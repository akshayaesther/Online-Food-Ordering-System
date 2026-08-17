const fs = require('fs');

const fetchUnsplashScrape = async (query) => {
    try {
        const searchPath = encodeURIComponent(query).replace(/%20/g, '-');
        const res = await fetch(`https://unsplash.com/s/photos/${searchPath}`);
        const data = await res.text();
        const ids = [...data.matchAll(/https:\/\/images\.unsplash\.com\/photo-([a-zA-Z0-9_-]+)\?/g)].map(m=>m[1]);
        return Array.from(new Set(ids));
    } catch (e) {
        return [];
    }
};

const itemsToUpdate = {
  "Mushroom Truffle Pizza": "mushroom pizza",
  "Hawaiian Pizza": "hawaiian pizza",
  "Spicy Jalapeño Burger": "jalapeno burger",
  "Fish Fillet Burger": "fish burger",
  "Korean BBQ Burger": "korean burger",
  "Black Bean Burger": "black bean burger",
  "Smash Burger": "smash burger",
  "Chole Bhature": "chole bhature",
  "Biryani (Chicken)": "chicken biryani",
  "Biryani (Veg)": "vegetable biryani",
  "Masala Dosa": "dosa",
  "Idli Sambar": "idli",
  "Aloo Paratha": "aloo paratha",
  "Prawn Masala": "prawn curry",
  "Thai Basil Chicken": "thai basil chicken",
  "Som Tum Salad": "papaya salad",
  "Thai Spring Rolls": "spring rolls",
  "Mango Sticky Rice": "mango sticky rice",
  "Avocado Toast": "avocado toast",
  "Sushi Bowl": "sushi bowl",
  "Shawarma Bowl": "shawarma",
  "Mexican Burrito Bowl": "burrito bowl",
  "Bibimbap": "bibimbap",
  "Fruit Salad": "fruit salad",
  "Tuna Salad": "tuna salad",
  "Green Smoothie Bowl": "smoothie bowl"
};

(async () => {
  let content = fs.readFileSync('C:/Users/Esther/Desktop/Online-Food-Ordering-System/backend/seed.js', 'utf8');
  
  // Collect all currently used images in seed.js to avoid repeats
  const usedImages = new Set();
  const urlRegex = /image_url:\s*["']https:\/\/images\.unsplash\.com\/photo-([^?]+).*?["']/g;
  let match;
  while ((match = urlRegex.exec(content)) !== null) {
      usedImages.add(match[1]);
  }
  
  let updatedCount = 0;
  for (const [itemName, query] of Object.entries(itemsToUpdate)) {
    console.log(`Updating ${itemName} with query: ${query}`);
    const results = await fetchUnsplashScrape(query);
    
    let selectedId = null;
    for (const id of results) {
        if (!usedImages.has(id)) {
            selectedId = id;
            usedImages.add(id); // mark as used for future items in THIS loop
            break;
        }
    }
    
    if (!selectedId && results.length > 0) {
        selectedId = results[0]; // fallback to first even if used
    }
    
    if (selectedId) {
        const imgUrl = `https://images.unsplash.com/photo-${selectedId}?w=500&q=80`;
        // replace in content
        const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const exactNameMatch = new RegExp(`name:\\s*(["'])${escapeRegExp(itemName)}\\1`);
        
        const nameMatchIdx = content.search(exactNameMatch);
        if (nameMatchIdx !== -1) {
            const startIdx = content.lastIndexOf('{', nameMatchIdx);
            const endIdx = content.indexOf('}', nameMatchIdx);
            
            if (startIdx !== -1 && endIdx !== -1) {
                let block = content.slice(startIdx, endIdx);
                block = block.replace(/image_url:\s*(["']).*?\1/, `image_url: "${imgUrl}"`);
                content = content.slice(0, startIdx) + block + content.slice(endIdx);
                console.log(` -> Replaced image for ${itemName}`);
                updatedCount++;
            }
        } else {
            console.log(` -> Could not find item ${itemName} in seed.js`);
        }
    } else {
        console.log(` -> No image found for ${query}`);
    }
  }

  fs.writeFileSync('C:/Users/Esther/Desktop/Online-Food-Ordering-System/backend/seed.js', content);
  console.log(`Updated ${updatedCount} specific food items successfully!`);
})();
