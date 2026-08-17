const fs = require('fs');
const https = require('https');

const fetchUnsplash = (query) => {
  return new Promise((resolve, reject) => {
    https.get(`https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=30`, {
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
  let content = fs.readFileSync('seed.js', 'utf8');
  
  const categories = ['Pizza', 'Burger', 'Indian', 'Thai', 'Healthy', 'Bowl', 'Sushi'];
  const images = {};
  for (const cat of categories) {
    console.log('Fetching', cat);
    images[cat] = await fetchUnsplash(cat + ' food');
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
    // If we run out
    const randomId = list[Math.floor(Math.random()*list.length)];
    return `https://images.unsplash.com/photo-${randomId}?w=500&q=80`;
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
  
  fs.writeFileSync('seed.js', pre + newArrayContent + post);
  console.log("Updated images successfully!");
})();
