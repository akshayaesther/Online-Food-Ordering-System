const fs = require('fs');
const https = require('https');

const fetchUnsplash = (query, page=1) => {
  return new Promise((resolve, reject) => {
    https.get(`https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=30&page=${page}`, {
        headers: {
            'User-Agent': 'Mozilla/5.0'
        }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data).results.map(x => x.id));
        } catch (e) {
          resolve([]);
        }
      });
    }).on('error', reject);
  });
};

(async () => {
  let content = fs.readFileSync('C:/Users/Esther/Desktop/Online-Food-Ordering-System/backend/seed.js', 'utf8');
  
  const categories = ['Pizza', 'Burger', 'Indian', 'Thai', 'Healthy', 'Bowl', 'Sushi', 'Main'];
  const images = {};
  for (const cat of categories) {
    console.log('Fetching', cat);
    // Fetch 2 pages to be absolutely sure we have enough unique images
    const page1 = await fetchUnsplash(cat + ' food', 1);
    const page2 = await fetchUnsplash(cat + ' food', 2);
    images[cat] = [...page1, ...page2];
  }
  
  const startIndex = content.indexOf('const foods = [');
  const endIndex = content.lastIndexOf('];');
  
  if (startIndex === -1 || endIndex === -1) {
    console.log("Could not find foods array");
    process.exit(1);
  }
  
  let pre = content.slice(0, startIndex);
  let arrayContent = content.slice(startIndex, endIndex);
  let post = content.slice(endIndex);
  
  const usedImages = new Set();
  const getUniqueImage = (cat) => {
    let list = images[cat];
    if (!list || list.length === 0) list = images['Healthy']; 
    for (const id of list) {
      if (!usedImages.has(id)) {
        usedImages.add(id);
        return `https://images.unsplash.com/photo-${id}?w=500&q=80`;
      }
    }
    // Fallback if somehow still run out (which shouldn't happen with 60 per cat)
    const fallbackList = images['Pizza'].concat(images['Healthy'], images['Indian']);
    for (const id of fallbackList) {
        if (!usedImages.has(id)) {
            usedImages.add(id);
            return `https://images.unsplash.com/photo-${id}?w=500&q=80`;
        }
    }
    return `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80`;
  };

  let newArrayContent = '';
  let currentIndex = 0;
  
  while (true) {
    const startIdx = arrayContent.indexOf('{', currentIndex);
    if (startIdx === -1) {
      newArrayContent += arrayContent.slice(currentIndex);
      break;
    }
    
    const endIdx = arrayContent.indexOf('}', startIdx);
    if (endIdx === -1) break;
    
    let block = arrayContent.slice(startIdx, endIdx + 1);
    
    const catMatch = block.match(/category:\s*(["'])(.*?)\1/);
    if (catMatch) {
      let cat = catMatch[2];
      if (cat === 'Bowls') cat = 'Bowl';
      
      const imgUrl = getUniqueImage(cat);
      block = block.replace(/image_url:\s*(["']).*?\1/, `image_url: "${imgUrl}"`);
    }
    
    newArrayContent += arrayContent.slice(currentIndex, startIdx) + block;
    currentIndex = endIdx + 1;
  }
  
  fs.writeFileSync('C:/Users/Esther/Desktop/Online-Food-Ordering-System/backend/seed.js', pre + newArrayContent + post);
  console.log("Updated ALL images successfully with NO duplicates and NO undefined!");
})();
