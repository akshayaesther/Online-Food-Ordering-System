const fs = require('fs');

const newFoods = [];

const pizzaNames = [
  "Margherita", "BBQ Chicken Pizza", "Veggie Supreme", "Mushroom Truffle Pizza",
  "Four Cheese Pizza", "Hawaiian Pizza", "Pesto Chicken Pizza",
  "Tandoori Paneer Pizza", "Mexican Pizza", "Farmhouse Pizza",
  "White Sauce Pizza", "Peppy Paneer Pizza"
];
const pizzaImages = [
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80",
  "https://images.unsplash.com/photo-1722707757608-7da361644637?w=500&q=80",
  "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80",
  "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=500&q=80"
];

const burgerNames = [
  "Classic Beef Burger", "Mushroom Swiss Burger", "BBQ Bacon Burger",
  "Veggie Bean Burger", "Spicy Jalapeño Burger", "Truffle Mushroom Burger",
  "Chicken Avocado Burger", "Fish Fillet Burger", "Korean BBQ Burger",
  "Breakfast Burger", "Black Bean Burger", "Smash Burger"
];
const burgerImages = [
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80",
  "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&q=80",
  "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&q=80",
  "https://images.unsplash.com/photo-1625813656648-c1c240cf5b7e?w=500&q=80"
];

const indianNames = [
  "Butter Chicken", "Dal Makhani", "Chole Bhature", "Palak Paneer",
  "Biryani (Chicken)", "Biryani (Veg)", "Mutton Rogan Josh",
  "Masala Dosa", "Idli Sambar", "Aloo Paratha", "Pav Bhaji",
  "Rajma Chawal", "Kadai Paneer", "Malai Kofta", "Tandoori Chicken",
  "Fish Curry", "Prawn Masala", "Veg Korma", "Matar Paneer",
  "Lamb Seekh Kebab"
];
const indianImages = [
  "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&q=80",
  "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&q=80",
  "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&q=80",
  "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&q=80",
  "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&q=80"
];

const thaiNames = [
  "Green Curry with Rice", "Red Curry with Rice", "Tom Yum Soup",
  "Massaman Curry", "Thai Basil Chicken", "Som Tum Salad",
  "Thai Spring Rolls", "Satay Chicken Skewers",
  "Pineapple Fried Rice", "Mango Sticky Rice"
];
const thaiImages = [
  "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=500&q=80",
  "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=500&q=80",
  "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=500&q=80"
];

const healthyNames = [
  "Quinoa Buddha Bowl", "Grilled Salmon Salad", "Avocado Toast",
  "Greek Salad", "Acai Bowl", "Green Smoothie Bowl",
  "Grilled Chicken Salad", "Spinach Omelette",
  "Overnight Oats Bowl", "Lentil Soup", "Fruit Salad",
  "Veggie Wrap", "Tuna Salad", "Detox Green Bowl",
  "Brown Rice and Steamed Veggies"
];
const healthyImages = [
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&q=80",
  "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=500&q=80",
  "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&q=80"
];

const bowlNames = [
  "Teriyaki Chicken Bowl", "Bibimbap", "Poke Bowl (Salmon)",
  "Poke Bowl (Tuna)", "Mediterranean Bowl", "Mexican Burrito Bowl",
  "Falafel Bowl", "Shawarma Bowl", "Sushi Bowl",
  "Korean Beef Bowl", "Noodle Bowl", "Vietnamese Pho Bowl"
];
const bowlImages = [
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
  "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&q=80",
  "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=500&q=80",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&q=80"
];

const generateItems = (names, images, category) => {
  return names.map((name, i) => {
    return {
      name,
      description: `Delicious ${name} prepared with fresh ingredients.`,
      price: parseFloat((Math.random() * (24.99 - 8.99) + 8.99).toFixed(2)),
      image_url: images[i % images.length],
      category
    };
  });
};

const allItems = [
  ...generateItems(pizzaNames, pizzaImages, 'Pizza'),
  ...generateItems(burgerNames, burgerImages, 'Burger'),
  ...generateItems(indianNames, indianImages, 'Indian'),
  ...generateItems(thaiNames, thaiImages, 'Thai'),
  ...generateItems(healthyNames, healthyImages, 'Healthy'),
  ...generateItems(bowlNames, bowlImages, 'Bowls')
];

let bestSellerCount = 0;
let discountCount = 0;

allItems.forEach(item => {
  // Wait, does seed.js schema support rating, deliveryTime, badge? Let's check seed.js.
  // The prompt says "Keep the exact same data structure/schema as the existing food items" and "fields like name, category, description, price, image, rating, deliveryTime, badge etc."
  // BUT the existing 8 items in seed.js DO NOT have rating, deliveryTime, badge!
  // Wait, let me add them just in case because the prompt explicitly asked for them.
  item.rating = parseFloat((Math.random() * (4.9 - 4.0) + 4.0).toFixed(1));

  const deliveryTimes = ["15-25 min", "20-30 min", "25-35 min", "30-40 min"];
  item.deliveryTime = deliveryTimes[Math.floor(Math.random() * deliveryTimes.length)];

  if (bestSellerCount < 10 && Math.random() > 0.5) {
    item.badge = "BEST SELLER";
    bestSellerCount++;
  } else if (discountCount < 6 && Math.random() > 0.7) {
    item.badge = "20% OFF";
    discountCount++;
  } else {
    item.badge = null;
  }
});

// Just to be sure, fill up exact numbers
while (bestSellerCount < 8) {
  const item = allItems[Math.floor(Math.random() * allItems.length)];
  if (!item.badge) { item.badge = "BEST SELLER"; bestSellerCount++; }
}
while (discountCount < 5) {
  const item = allItems[Math.floor(Math.random() * allItems.length)];
  if (!item.badge) { item.badge = "20% OFF"; discountCount++; }
}

const itemsStr = allItems.map(item => `  {\n    name: "${item.name}",\n    description: "${item.description}",\n    price: ${item.price},\n    image_url: "${item.image_url}",\n    category: "${item.category}",\n    rating: ${item.rating},\n    deliveryTime: "${item.deliveryTime}",\n    badge: ${item.badge ? `"${item.badge}"` : 'null'}\n  }`).join(',\n');

const seedContent = fs.readFileSync('seed.js', 'utf8');
const replaceIndex = seedContent.lastIndexOf('];');
const newContent = seedContent.slice(0, replaceIndex) + ',\n' + itemsStr + '\n' + seedContent.slice(replaceIndex);

fs.writeFileSync('seed.js', newContent);
console.log("Added items!");
