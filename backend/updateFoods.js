const fs = require('fs');

const updates = {
  "Classic Margherita Pizza": {
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80",
    desc: "Classic Italian pizza with San Marzano tomato sauce, fresh mozzarella, and basil leaves"
  },
  "Spicy Pepperoni Pizza": {
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80",
    desc: "Loaded with spicy pepperoni, jalapeños, mozzarella, and a drizzle of hot honey"
  },
  "Margherita": {
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80",
    desc: "Wood-fired margherita with tomato base, buffalo mozzarella, and fresh basil"
  },
  "BBQ Chicken Pizza": {
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80",
    desc: "Smoky BBQ sauce, grilled chicken, red onions, and cheddar on a crispy crust"
  },
  "Veggie Supreme": {
    image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=500&q=80",
    desc: "Bell peppers, mushrooms, olives, onions, and cherry tomatoes on a herb base"
  },
  "Mushroom Truffle Pizza": {
    image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=500&q=80",
    desc: "Creamy truffle sauce, wild mushrooms, mozzarella, and fresh thyme"
  },
  "Four Cheese Pizza": {
    image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=500&q=80",
    desc: "Mozzarella, cheddar, parmesan, and gorgonzola melted over a garlic butter base"
  },
  "Hawaiian Pizza": {
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&q=80",
    desc: "Sweet pineapple chunks, ham, mozzarella, and tangy tomato sauce"
  },
  "Pesto Chicken Pizza": {
    image: "https://images.unsplash.com/photo-1548369937-47519962c11a?w=500&q=80",
    desc: "Basil pesto base, grilled chicken, sun-dried tomatoes, and fresh arugula"
  },
  "Tandoori Paneer Pizza": {
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&q=80",
    desc: "Tandoori marinated paneer, capsicum, onions, and mint chutney drizzle"
  },
  "Mexican Pizza": {
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=500&q=80",
    desc: "Spicy salsa base, kidney beans, jalapeños, corn, and melted cheddar"
  },
  "Farmhouse Pizza": {
    image: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=500&q=80",
    desc: "Fresh vegetables, mushrooms, and cottage cheese on a classic tomato base"
  },
  "White Sauce Pizza": {
    image: "https://images.unsplash.com/photo-1600628421055-4d30de868b8f?w=500&q=80",
    desc: "Creamy béchamel sauce, roasted garlic, spinach, and mozzarella"
  },
  "Peppy Paneer Pizza": {
    image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=500&q=80",
    desc: "Spiced paneer cubes, capsicum, and onion rings on a tangy tomato sauce"
  },
  "Double Cheeseburger": {
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80",
    desc: "Two juicy beef patties, double cheddar, lettuce, tomato, and house special sauce"
  },
  "Crispy Chicken Sandwich": {
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500&q=80",
    desc: "Crispy fried chicken breast, pickles, spicy mayo, and brioche bun"
  },
  "Classic Beef Burger": {
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80",
    desc: "100% beef patty with lettuce, tomato, onion, and classic burger sauce"
  },
  "Mushroom Swiss Burger": {
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&q=80",
    desc: "Beef patty topped with sautéed mushrooms, Swiss cheese, and garlic aioli"
  },
  "BBQ Bacon Burger": {
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&q=80",
    desc: "Smoky bacon, BBQ sauce, cheddar, and crispy onion rings on a toasted bun"
  },
  "Veggie Bean Burger": {
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500&q=80",
    desc: "Spiced black bean patty, avocado, lettuce, and chipotle mayo"
  },
  "Spicy Jalapeño Burger": {
    image: "https://images.unsplash.com/photo-1562582052-bf3d779b3b50?w=500&q=80",
    desc: "Beef patty, fresh jalapeños, pepper jack cheese, and sriracha sauce"
  },
  "Truffle Mushroom Burger": {
    image: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=500&q=80",
    desc: "Angus beef, truffle aioli, portobello mushroom, and aged gruyère"
  },
  "Chicken Avocado Burger": {
    image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=500&q=80",
    desc: "Grilled chicken breast, fresh avocado, tomato, and lemon herb mayo"
  },
  "Fish Fillet Burger": {
    image: "https://images.unsplash.com/photo-1615361200141-f45040f367be?w=500&q=80",
    desc: "Crispy battered fish fillet, coleslaw, pickles, and tartar sauce"
  },
  "Korean BBQ Burger": {
    image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=500&q=80",
    desc: "Beef patty glazed in Korean BBQ sauce, kimchi slaw, and sesame seeds"
  },
  "Breakfast Burger": {
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=500&q=80",
    desc: "Beef patty, fried egg, bacon, cheddar, and hash brown on a brioche bun"
  },
  "Black Bean Burger": {
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=500&q=80",
    desc: "Hearty black bean patty, roasted peppers, guacamole, and lime crema"
  },
  "Smash Burger": {
    image: "https://images.unsplash.com/photo-1640016429496-d4b7420cb12c?w=500&q=80",
    desc: "Thin smashed beef patty with caramelised onions, American cheese, and pickles"
  },
  "Chicken Tikka Masala": {
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&q=80",
    desc: "Tender chicken chunks marinated in spices, roasted and simmered in creamy tomato curry"
  },
  "Paneer Butter Masala": {
    image: "https://images.pexels.com/photos/9609838/pexels-photo-9609838.jpeg?auto=compress&cs=tinysrgb&w=500",
    desc: "Soft paneer cubes in a rich, creamy tomato and cashew sauce with aromatic spices"
  },
  "Butter Chicken": {
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&q=80",
    desc: "Slow-cooked chicken in a velvety butter and tomato sauce with cream and fenugreek"
  },
  "Dal Makhani": {
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&q=80",
    desc: "Black lentils and kidney beans slow-cooked overnight in butter and cream"
  },
  "Chole Bhature": {
    image: "https://images.unsplash.com/photo-1626500155538-2c4d59ef5f84?w=500&q=80",
    desc: "Spicy chickpea curry served with deep-fried fluffy bhature bread"
  },
  "Palak Paneer": {
    image: "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?w=500&q=80",
    desc: "Fresh spinach purée with soft paneer cubes cooked in aromatic Indian spices"
  },
  "Biryani (Chicken)": {
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80",
    desc: "Fragrant basmati rice layered with spiced chicken, saffron, and caramelised onions"
  },
  "Biryani (Veg)": {
    image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=500&q=80",
    desc: "Aromatic basmati rice with mixed vegetables, whole spices, and fresh herbs"
  },
  "Mutton Rogan Josh": {
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?w=500&q=80",
    desc: "Slow-cooked mutton in a bold Kashmiri spice gravy with whole aromatics"
  },
  "Masala Dosa": {
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&q=80",
    desc: "Crispy rice crepe filled with spiced potato filling, served with sambar and chutneys"
  },
  "Idli Sambar": {
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&q=80",
    desc: "Steamed rice cakes served with tangy lentil sambar and coconut chutney"
  },
  "Aloo Paratha": {
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
    desc: "Whole wheat flatbread stuffed with spiced mashed potato, served with butter and pickle"
  },
  "Pav Bhaji": {
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&q=80",
    desc: "Spiced mashed vegetable curry served with buttered and toasted pav rolls"
  },
  "Rajma Chawal": {
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&q=80",
    desc: "Red kidney beans in a thick spiced tomato gravy, served with steamed basmati rice"
  },
  "Kadai Paneer": {
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&q=80",
    desc: "Paneer and capsicum cooked in a spicy kadai masala with whole coriander"
  },
  "Malai Kofta": {
    image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=500&q=80",
    desc: "Fried paneer and potato dumplings in a rich, creamy cashew and tomato gravy"
  },
  "Tandoori Chicken": {
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&q=80",
    desc: "Chicken marinated in yoghurt and spices, chargrilled in a traditional tandoor oven"
  },
  "Fish Curry": {
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&q=80",
    desc: "Fresh fish fillets slow-cooked in a tangy coconut and tamarind curry sauce"
  },
  "Prawn Masala": {
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&q=80",
    desc: "Juicy prawns tossed in a spicy onion-tomato masala with coastal Indian spices"
  },
  "Veg Korma": {
    image: "https://images.unsplash.com/photo-1617692855027-33b14f061079?w=500&q=80",
    desc: "Mixed vegetables cooked in a mild, creamy cashew and coconut sauce"
  },
  "Matar Paneer": {
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&q=80",
    desc: "Green peas and paneer in a spiced tomato-onion gravy with warming spices"
  },
  "Lamb Seekh Kebab": {
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80",
    desc: "Minced lamb mixed with herbs and spices, skewered and grilled in a tandoor"
  },
  "Pad Thai Bowls": {
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=500&q=80",
    desc: "Stir-fried rice noodles with tofu, shrimp, peanuts, bean sprouts, and lime"
  },
  "Green Curry with Rice": {
    image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=500&q=80",
    desc: "Fragrant green curry with coconut milk, Thai basil, and jasmine rice"
  },
  "Red Curry with Rice": {
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500&q=80",
    desc: "Rich red curry paste cooked in coconut milk with vegetables and steamed rice"
  },
  "Tom Yum Soup": {
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80",
    desc: "Spicy and sour Thai soup with lemongrass, galangal, mushrooms, and shrimp"
  },
  "Massaman Curry": {
    image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=500&q=80",
    desc: "Mild and aromatic curry with potatoes, peanuts, and tender chicken in coconut milk"
  },
  "Thai Basil Chicken": {
    image: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=500&q=80",
    desc: "Minced chicken stir-fried with Thai holy basil, chillis, and oyster sauce"
  },
  "Som Tum Salad": {
    image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=500&q=80",
    desc: "Green papaya salad with peanuts, cherry tomatoes, lime, fish sauce, and dried shrimp"
  },
  "Thai Spring Rolls": {
    image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=500&q=80",
    desc: "Crispy golden rolls filled with glass noodles, vegetables, and served with sweet chilli"
  },
  "Satay Chicken Skewers": {
    image: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=500&q=80",
    desc: "Grilled chicken skewers marinated in turmeric and coconut, served with peanut sauce"
  },
  "Pineapple Fried Rice": {
    image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=500&q=80",
    desc: "Wok-fried jasmine rice with pineapple chunks, cashews, egg, and Thai seasoning"
  },
  "Mango Sticky Rice": {
    image: "https://images.unsplash.com/photo-1621955964441-c173e01c135b?w=500&q=80",
    desc: "Sweet glutinous sticky rice served with fresh ripe mango and coconut cream"
  },
  "Quinoa Buddha Bowl": {
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80",
    desc: "Protein-packed quinoa with roasted chickpeas, avocado, kale, and tahini dressing"
  },
  "Grilled Salmon Salad": {
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&q=80",
    desc: "Pan-seared salmon fillet on mixed greens with capers, lemon, and dill vinaigrette"
  },
  "Avocado Toast": {
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=500&q=80",
    desc: "Sourdough toast topped with smashed avocado, poached egg, chilli flakes, and seeds"
  },
  "Greek Salad": {
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&q=80",
    desc: "Crisp cucumber, tomatoes, olives, red onion, and feta cheese with oregano dressing"
  },
  "Acai Bowl": {
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=500&q=80",
    desc: "Blended acai with banana and berries, topped with granola, coconut, and honey"
  },
  "Green Smoothie Bowl": {
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=500&q=80",
    desc: "Spinach, mango, and banana blend topped with seeds, nuts, and fresh fruit"
  },
  "Grilled Chicken Salad": {
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&q=80",
    desc: "Chargrilled chicken breast on romaine lettuce with croutons and Caesar dressing"
  },
  "Spinach Omelette": {
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&q=80",
    desc: "Fluffy three-egg omelette with wilted spinach, feta, and sun-dried tomatoes"
  },
  "Overnight Oats Bowl": {
    image: "https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=500&q=80",
    desc: "Rolled oats soaked in almond milk, topped with berries, chia seeds, and honey"
  },
  "Lentil Soup": {
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80",
    desc: "Hearty red lentil soup with cumin, turmeric, and a squeeze of fresh lemon"
  },
  "Fruit Salad": {
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=500&q=80",
    desc: "Seasonal fresh fruits with mint leaves and a light honey-lime drizzle"
  },
  "Veggie Wrap": {
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&q=80",
    desc: "Whole wheat wrap filled with hummus, roasted vegetables, and mixed greens"
  },
  "Tuna Salad": {
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80",
    desc: "Albacore tuna with celery, red onion, lemon mayo on a bed of crisp lettuce"
  },
  "Detox Green Bowl": {
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&q=80",
    desc: "Kale, cucumber, edamame, and avocado with a ginger-miso dressing"
  },
  "Brown Rice and Steamed Veggies": {
    image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=500&q=80",
    desc: "Nutty brown rice with seasonal steamed vegetables and a light soy-sesame dressing"
  },
  "Teriyaki Chicken Bowl": {
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    desc: "Glazed teriyaki chicken over steamed rice with sesame seeds and spring onions"
  },
  "Bibimbap": {
    image: "https://images.unsplash.com/photo-1590301157284-ba8e2a6a0e8c?w=500&q=80",
    desc: "Korean rice bowl with seasoned vegetables, beef, fried egg, and gochujang sauce"
  },
  "Poke Bowl (Salmon)": {
    image: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?w=500&q=80",
    desc: "Fresh salmon cubes with sushi rice, edamame, cucumber, and ponzu dressing"
  },
  "Poke Bowl (Tuna)": {
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=500&q=80",
    desc: "Ahi tuna with sushi rice, mango, avocado, and spicy mayo drizzle"
  },
  "Mediterranean Bowl": {
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&q=80",
    desc: "Falafel, hummus, tabbouleh, and roasted vegetables over herbed couscous"
  },
  "Mexican Burrito Bowl": {
    image: "https://images.unsplash.com/photo-1543340904-0df8a3c5b7c4?w=500&q=80",
    desc: "Cilantro lime rice, black beans, grilled chicken, pico de gallo, and sour cream"
  },
  "Falafel Bowl": {
    image: "https://images.unsplash.com/photo-1561043433-aaf687c4cf04?w=500&q=80",
    desc: "Crispy falafel on a bed of quinoa with roasted veggies and tahini sauce"
  },
  "Shawarma Bowl": {
    image: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=500&q=80",
    desc: "Spiced shawarma chicken over rice with garlic sauce and pickled vegetables"
  },
  "Sushi Bowl": {
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&q=80",
    desc: "Deconstructed sushi bowl with seasoned rice, salmon, cucumber, and nori strips"
  },
  "Korean Beef Bowl": {
    image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=500&q=80",
    desc: "Bulgogi-style beef over steamed rice with kimchi, cucumber, and sesame oil"
  },
  "Noodle Bowl": {
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&q=80",
    desc: "Ramen-style noodles in a rich broth with soft egg, nori, corn, and bamboo shoots"
  },
  "Vietnamese Pho Bowl": {
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=500&q=80",
    desc: "Traditional Vietnamese beef noodle soup with star anise broth, herbs, and lime"
  }
};

let content = fs.readFileSync('C:/Users/Esther/Desktop/Online-Food-Ordering-System/backend/seed.js', 'utf8');

for (const [name, data] of Object.entries(updates)) {
  // Use a string replacement by finding the block that contains name: "..." 
  // It's safer to use regex that matches the specific object block for the name
  
  // Example block:
  // {
  //   name: "Classic Margherita Pizza",
  //   description: "Tomato sauce, mozzarella, and basil",
  //   price: 12.99,
  //   image_url: "...",
  //   category: "Pizza"
  // }
  
  const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  // Find name: "name"
  const nameRegex = new RegExp(`name:\\s*(["'])${escapeRegExp(name)}\\1`);
  const match = nameRegex.exec(content);
  if (match) {
    // Find the next description: "..." and image_url: "..."
    // We will do this by finding the boundaries of the object
    const startIdx = content.lastIndexOf('{', match.index);
    const endIdx = content.indexOf('}', match.index);
    
    if (startIdx !== -1 && endIdx !== -1) {
      let block = content.slice(startIdx, endIdx);
      
      block = block.replace(/description:\s*(["']).*?\1/, `description: "${data.desc}"`);
      block = block.replace(/image_url:\s*(["']).*?\1/, `image_url: "${data.image}"`);
      
      content = content.slice(0, startIdx) + block + content.slice(endIdx);
    }
  }
}

fs.writeFileSync('C:/Users/Esther/Desktop/Online-Food-Ordering-System/backend/seed.js', content);
console.log("Updated seed.js successfully.");
