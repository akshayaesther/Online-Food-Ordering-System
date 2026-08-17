const mongoose = require('mongoose');
const FoodItem = require('./models/FoodItem');

const MONGO_URI = 'mongodb://127.0.0.1:27017/food_delivery';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected for seeding'))
  .catch(err => console.log(err));

const foods = [
  {
    name: "Classic Margherita Pizza",
    description: "Classic Italian pizza with San Marzano tomato sauce, fresh mozzarella, and basil leaves",
    price: 12.99,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Pizza"
  },
  {
    name: "Spicy Pepperoni Pizza",
    description: "Loaded with spicy pepperoni, jalapeños, mozzarella, and a drizzle of hot honey",
    price: 14.99,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Pizza"
  },
  {
    name: "Double Cheeseburger",
    description: "Two juicy beef patties, double cheddar, lettuce, tomato, and house special sauce",
    price: 10.99,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Burger"
  },
  {
    name: "Crispy Chicken Sandwich",
    description: "Crispy fried chicken breast, pickles, spicy mayo, and brioche bun",
    price: 9.99,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Burger"
  },
  {
    name: "Chicken Tikka Masala",
    description: "Tender chicken chunks marinated in spices, roasted and simmered in creamy tomato curry",
    price: 15.99,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Indian"
  },
  {
    name: "Paneer Butter Masala",
    description: "Soft paneer cubes in a rich, creamy tomato and cashew sauce with aromatic spices",
    price: 13.99,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Indian"
  },
  {
    name: "Sushi Boat Deluxe",
    description: "Assorted nigiri and rolls, serves 2",
    price: 34.99,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Sushi"
  },
  {
    name: "Pad Thai Bowls",
    description: "Stir-fried rice noodles with tofu, shrimp, peanuts, bean sprouts, and lime",
    price: 13.99,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Thai"
  }
  ,
  {
    name: "Margherita",
    description: "Wood-fired margherita with tomato base, buffalo mozzarella, and fresh basil",
    price: 15.48,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Pizza",
    rating: 4.6,
    deliveryTime: "30-40 min",
    badge: "BEST SELLER"
  },
  {
    name: "BBQ Chicken Pizza",
    description: "Smoky BBQ sauce, grilled chicken, red onions, and cheddar on a crispy crust",
    price: 21.38,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Pizza",
    rating: 4.7,
    deliveryTime: "20-30 min",
    badge: "BEST SELLER"
  },
  {
    name: "Veggie Supreme",
    description: "Bell peppers, mushrooms, olives, onions, and cherry tomatoes on a herb base",
    price: 20.83,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Pizza",
    rating: 4.2,
    deliveryTime: "30-40 min",
    badge: "BEST SELLER"
  },
  {
    name: "Mushroom Truffle Pizza",
    description: "Creamy truffle sauce, wild mushrooms, mozzarella, and fresh thyme",
    price: 16.65,
    image_url: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=500&q=80",
    category: "Pizza",
    rating: 4.6,
    deliveryTime: "20-30 min",
    badge: null
  },
  {
    name: "Four Cheese Pizza",
    description: "Mozzarella, cheddar, parmesan, and gorgonzola melted over a garlic butter base",
    price: 17.64,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Pizza",
    rating: 4.8,
    deliveryTime: "30-40 min",
    badge: null
  },
  {
    name: "Hawaiian Pizza",
    description: "Sweet pineapple chunks, ham, mozzarella, and tangy tomato sauce",
    price: 22.81,
    image_url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80",
    category: "Pizza",
    rating: 4.3,
    deliveryTime: "20-30 min",
    badge: null
  },
  {
    name: "Pesto Chicken Pizza",
    description: "Basil pesto base, grilled chicken, sun-dried tomatoes, and fresh arugula",
    price: 18.21,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Pizza",
    rating: 4.2,
    deliveryTime: "20-30 min",
    badge: null
  },
  {
    name: "Tandoori Paneer Pizza",
    description: "Tandoori marinated paneer, capsicum, onions, and mint chutney drizzle",
    price: 16.52,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Pizza",
    rating: 4.7,
    deliveryTime: "25-35 min",
    badge: null
  },
  {
    name: "Mexican Pizza",
    description: "Spicy salsa base, kidney beans, jalapeños, corn, and melted cheddar",
    price: 9.22,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Pizza",
    rating: 4.3,
    deliveryTime: "15-25 min",
    badge: null
  },
  {
    name: "Farmhouse Pizza",
    description: "Fresh vegetables, mushrooms, and cottage cheese on a classic tomato base",
    price: 11.57,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Pizza",
    rating: 4.3,
    deliveryTime: "30-40 min",
    badge: null
  },
  {
    name: "White Sauce Pizza",
    description: "Creamy béchamel sauce, roasted garlic, spinach, and mozzarella",
    price: 22.71,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Pizza",
    rating: 4.8,
    deliveryTime: "20-30 min",
    badge: "BEST SELLER"
  },
  {
    name: "Peppy Paneer Pizza",
    description: "Spiced paneer cubes, capsicum, and onion rings on a tangy tomato sauce",
    price: 14.69,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Pizza",
    rating: 4.3,
    deliveryTime: "30-40 min",
    badge: "BEST SELLER"
  },
  {
    name: "Classic Beef Burger",
    description: "100% beef patty with lettuce, tomato, onion, and classic burger sauce",
    price: 13.89,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Burger",
    rating: 4.5,
    deliveryTime: "20-30 min",
    badge: "BEST SELLER"
  },
  {
    name: "Mushroom Swiss Burger",
    description: "Beef patty topped with sautéed mushrooms, Swiss cheese, and garlic aioli",
    price: 22.58,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Burger",
    rating: 4.7,
    deliveryTime: "30-40 min",
    badge: "BEST SELLER"
  },
  {
    name: "BBQ Bacon Burger",
    description: "Smoky bacon, BBQ sauce, cheddar, and crispy onion rings on a toasted bun",
    price: 21.28,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Burger",
    rating: 4.4,
    deliveryTime: "25-35 min",
    badge: "BEST SELLER"
  },
  {
    name: "Veggie Bean Burger",
    description: "Spiced black bean patty, avocado, lettuce, and chipotle mayo",
    price: 13.89,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Burger",
    rating: 4.1,
    deliveryTime: "20-30 min",
    badge: "BEST SELLER"
  },
  {
    name: "Spicy Jalapeño Burger",
    description: "Beef patty, fresh jalapeños, pepper jack cheese, and sriracha sauce",
    price: 14.89,
    image_url: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&q=80",
    category: "Burger",
    rating: 4.2,
    deliveryTime: "15-25 min",
    badge: "BEST SELLER"
  },
  {
    name: "Truffle Mushroom Burger",
    description: "Angus beef, truffle aioli, portobello mushroom, and aged gruyère",
    price: 10.88,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Burger",
    rating: 4.3,
    deliveryTime: "15-25 min",
    badge: null
  },
  {
    name: "Chicken Avocado Burger",
    description: "Grilled chicken breast, fresh avocado, tomato, and lemon herb mayo",
    price: 21.71,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Burger",
    rating: 4.2,
    deliveryTime: "25-35 min",
    badge: "20% OFF"
  },
  {
    name: "Fish Fillet Burger",
    description: "Crispy battered fish fillet, coleslaw, pickles, and tartar sauce",
    price: 19.5,
    image_url: "https://images.unsplash.com/photo-1615297928064-24977384d0da?w=500&q=80",
    category: "Burger",
    rating: 4.3,
    deliveryTime: "30-40 min",
    badge: null
  },
  {
    name: "Korean BBQ Burger",
    description: "Beef patty glazed in Korean BBQ sauce, kimchi slaw, and sesame seeds",
    price: 17.3,
    image_url: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&q=80",
    category: "Burger",
    rating: 4.1,
    deliveryTime: "25-35 min",
    badge: null
  },
  {
    name: "Breakfast Burger",
    description: "Beef patty, fried egg, bacon, cheddar, and hash brown on a brioche bun",
    price: 17.45,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Burger",
    rating: 4.3,
    deliveryTime: "30-40 min",
    badge: "20% OFF"
  },
  {
    name: "Black Bean Burger",
    description: "Hearty black bean patty, roasted peppers, guacamole, and lime crema",
    price: 21.72,
    image_url: "https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?w=500&q=80",
    category: "Burger",
    rating: 4.2,
    deliveryTime: "20-30 min",
    badge: "20% OFF"
  },
  {
    name: "Smash Burger",
    description: "Thin smashed beef patty with caramelised onions, American cheese, and pickles",
    price: 14.22,
    image_url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80",
    category: "Burger",
    rating: 4,
    deliveryTime: "30-40 min",
    badge: null
  },
  {
    name: "Butter Chicken",
    description: "Slow-cooked chicken in a velvety butter and tomato sauce with cream and fenugreek",
    price: 11.95,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Indian",
    rating: 4.7,
    deliveryTime: "25-35 min",
    badge: null
  },
  {
    name: "Dal Makhani",
    description: "Black lentils and kidney beans slow-cooked overnight in butter and cream",
    price: 23.95,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Indian",
    rating: 4.4,
    deliveryTime: "15-25 min",
    badge: null
  },
  {
    name: "Chole Bhature",
    description: "Spicy chickpea curry served with deep-fried fluffy bhature bread",
    price: 16.73,
    image_url: "https://images.unsplash.com/photo-1780504863220-514ba37dcba0?w=500&q=80",
    category: "Indian",
    rating: 4.5,
    deliveryTime: "20-30 min",
    badge: "20% OFF"
  },
  {
    name: "Palak Paneer",
    description: "Fresh spinach purée with soft paneer cubes cooked in aromatic Indian spices",
    price: 18.91,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Indian",
    rating: 4.2,
    deliveryTime: "25-35 min",
    badge: null
  },
  {
    name: "Biryani (Chicken)",
    description: "Fragrant basmati rice layered with spiced chicken, saffron, and caramelised onions",
    price: 18.28,
    image_url: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&q=80",
    category: "Indian",
    rating: 4.7,
    deliveryTime: "15-25 min",
    badge: null
  },
  {
    name: "Biryani (Veg)",
    description: "Aromatic basmati rice with mixed vegetables, whole spices, and fresh herbs",
    price: 24.65,
    image_url: "https://images.unsplash.com/photo-1697155406055-2db32d47ca07?w=500&q=80",
    category: "Indian",
    rating: 4.1,
    deliveryTime: "15-25 min",
    badge: "20% OFF"
  },
  {
    name: "Mutton Rogan Josh",
    description: "Slow-cooked mutton in a bold Kashmiri spice gravy with whole aromatics",
    price: 21.44,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Indian",
    rating: 4.5,
    deliveryTime: "30-40 min",
    badge: null
  },
  {
    name: "Masala Dosa",
    description: "Crispy rice crepe filled with spiced potato filling, served with sambar and chutneys",
    price: 14.07,
    image_url: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&q=80",
    category: "Indian",
    rating: 4.1,
    deliveryTime: "30-40 min",
    badge: "20% OFF"
  },
  {
    name: "Idli Sambar",
    description: "Steamed rice cakes served with tangy lentil sambar and coconut chutney",
    price: 14.61,
    image_url: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&q=80",
    category: "Indian",
    rating: 4.7,
    deliveryTime: "30-40 min",
    badge: null
  },
  {
    name: "Aloo Paratha",
    description: "Whole wheat flatbread stuffed with spiced mashed potato, served with butter and pickle",
    price: 13.11,
    image_url: "https://images.unsplash.com/photo-1683533761804-5fc12be0f684?w=500&q=80",
    category: "Indian",
    rating: 4.7,
    deliveryTime: "20-30 min",
    badge: null
  },
  {
    name: "Pav Bhaji",
    description: "Spiced mashed vegetable curry served with buttered and toasted pav rolls",
    price: 16.66,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Indian",
    rating: 4.7,
    deliveryTime: "30-40 min",
    badge: null
  },
  {
    name: "Rajma Chawal",
    description: "Red kidney beans in a thick spiced tomato gravy, served with steamed basmati rice",
    price: 15.71,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Indian",
    rating: 4.4,
    deliveryTime: "20-30 min",
    badge: null
  },
  {
    name: "Kadai Paneer",
    description: "Paneer and capsicum cooked in a spicy kadai masala with whole coriander",
    price: 19.99,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Indian",
    rating: 4.4,
    deliveryTime: "15-25 min",
    badge: null
  },
  {
    name: "Malai Kofta",
    description: "Fried paneer and potato dumplings in a rich, creamy cashew and tomato gravy",
    price: 12.16,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Indian",
    rating: 4,
    deliveryTime: "30-40 min",
    badge: null
  },
  {
    name: "Tandoori Chicken",
    description: "Chicken marinated in yoghurt and spices, chargrilled in a traditional tandoor oven",
    price: 20.73,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Indian",
    rating: 4.8,
    deliveryTime: "30-40 min",
    badge: null
  },
  {
    name: "Fish Curry",
    description: "Fresh fish fillets slow-cooked in a tangy coconut and tamarind curry sauce",
    price: 19.49,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Indian",
    rating: 4.1,
    deliveryTime: "20-30 min",
    badge: null
  },
  {
    name: "Prawn Masala",
    description: "Juicy prawns tossed in a spicy onion-tomato masala with coastal Indian spices",
    price: 21.45,
    image_url: "https://images.unsplash.com/photo-1632660345494-9cc2607f89c2?w=500&q=80",
    category: "Indian",
    rating: 4.6,
    deliveryTime: "30-40 min",
    badge: null
  },
  {
    name: "Veg Korma",
    description: "Mixed vegetables cooked in a mild, creamy cashew and coconut sauce",
    price: 21.41,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Indian",
    rating: 4.2,
    deliveryTime: "25-35 min",
    badge: null
  },
  {
    name: "Matar Paneer",
    description: "Green peas and paneer in a spiced tomato-onion gravy with warming spices",
    price: 10.55,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Indian",
    rating: 4.3,
    deliveryTime: "25-35 min",
    badge: null
  },
  {
    name: "Lamb Seekh Kebab",
    description: "Minced lamb mixed with herbs and spices, skewered and grilled in a tandoor",
    price: 14.98,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Indian",
    rating: 4.7,
    deliveryTime: "15-25 min",
    badge: null
  },
  {
    name: "Green Curry with Rice",
    description: "Fragrant green curry with coconut milk, Thai basil, and jasmine rice",
    price: 15.69,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Thai",
    rating: 4.1,
    deliveryTime: "20-30 min",
    badge: null
  },
  {
    name: "Red Curry with Rice",
    description: "Rich red curry paste cooked in coconut milk with vegetables and steamed rice",
    price: 17.66,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Thai",
    rating: 4.1,
    deliveryTime: "30-40 min",
    badge: null
  },
  {
    name: "Tom Yum Soup",
    description: "Spicy and sour Thai soup with lemongrass, galangal, mushrooms, and shrimp",
    price: 12.66,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Thai",
    rating: 4.6,
    deliveryTime: "30-40 min",
    badge: null
  },
  {
    name: "Massaman Curry",
    description: "Mild and aromatic curry with potatoes, peanuts, and tender chicken in coconut milk",
    price: 21.74,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Thai",
    rating: 4.9,
    deliveryTime: "15-25 min",
    badge: null
  },
  {
    name: "Thai Basil Chicken",
    description: "Minced chicken stir-fried with Thai holy basil, chillis, and oyster sauce",
    price: 10.49,
    image_url: "https://images.unsplash.com/photo-1627308595186-e6bb36712645?w=500&q=80",
    category: "Thai",
    rating: 4,
    deliveryTime: "20-30 min",
    badge: null
  },
  {
    name: "Som Tum Salad",
    description: "Green papaya salad with peanuts, cherry tomatoes, lime, fish sauce, and dried shrimp",
    price: 16.64,
    image_url: "https://images.unsplash.com/photo-1648421331147-9fcfab29536e?w=500&q=80",
    category: "Thai",
    rating: 4.9,
    deliveryTime: "25-35 min",
    badge: null
  },
  {
    name: "Thai Spring Rolls",
    description: "Crispy golden rolls filled with glass noodles, vegetables, and served with sweet chilli",
    price: 15.24,
    image_url: "https://images.unsplash.com/photo-1695712641569-05eee7b37b6d?w=500&q=80",
    category: "Thai",
    rating: 4.4,
    deliveryTime: "20-30 min",
    badge: null
  },
  {
    name: "Satay Chicken Skewers",
    description: "Grilled chicken skewers marinated in turmeric and coconut, served with peanut sauce",
    price: 14.36,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Thai",
    rating: 4.4,
    deliveryTime: "15-25 min",
    badge: null
  },
  {
    name: "Pineapple Fried Rice",
    description: "Wok-fried jasmine rice with pineapple chunks, cashews, egg, and Thai seasoning",
    price: 9.03,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Thai",
    rating: 4,
    deliveryTime: "15-25 min",
    badge: null
  },
  {
    name: "Mango Sticky Rice",
    description: "Sweet glutinous sticky rice served with fresh ripe mango and coconut cream",
    price: 18.48,
    image_url: "https://images.unsplash.com/photo-1711161988375-da7eff032e45?w=500&q=80",
    category: "Thai",
    rating: 4.3,
    deliveryTime: "15-25 min",
    badge: null
  },
  {
    name: "Quinoa Buddha Bowl",
    description: "Protein-packed quinoa with roasted chickpeas, avocado, kale, and tahini dressing",
    price: 16.24,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Healthy",
    rating: 4.8,
    deliveryTime: "25-35 min",
    badge: null
  },
  {
    name: "Grilled Salmon Salad",
    description: "Pan-seared salmon fillet on mixed greens with capers, lemon, and dill vinaigrette",
    price: 14.16,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Healthy",
    rating: 4.4,
    deliveryTime: "15-25 min",
    badge: null
  },
  {
    name: "Avocado Toast",
    description: "Sourdough toast topped with smashed avocado, poached egg, chilli flakes, and seeds",
    price: 19.39,
    image_url: "https://images.unsplash.com/photo-1687276287139-88f7333c8ca4?w=500&q=80",
    category: "Healthy",
    rating: 4.6,
    deliveryTime: "15-25 min",
    badge: null
  },
  {
    name: "Greek Salad",
    description: "Crisp cucumber, tomatoes, olives, red onion, and feta cheese with oregano dressing",
    price: 9.46,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Healthy",
    rating: 4.6,
    deliveryTime: "15-25 min",
    badge: null
  },
  {
    name: "Acai Bowl",
    description: "Blended acai with banana and berries, topped with granola, coconut, and honey",
    price: 17.2,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Healthy",
    rating: 4.6,
    deliveryTime: "30-40 min",
    badge: null
  },
  {
    name: "Green Smoothie Bowl",
    description: "Spinach, mango, and banana blend topped with seeds, nuts, and fresh fruit",
    price: 18.9,
    image_url: "https://images.unsplash.com/photo-1627308594190-a057cd4bfac8?w=500&q=80",
    category: "Healthy",
    rating: 4.4,
    deliveryTime: "30-40 min",
    badge: null
  },
  {
    name: "Grilled Chicken Salad",
    description: "Chargrilled chicken breast on romaine lettuce with croutons and Caesar dressing",
    price: 13.43,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Healthy",
    rating: 4.5,
    deliveryTime: "20-30 min",
    badge: null
  },
  {
    name: "Spinach Omelette",
    description: "Fluffy three-egg omelette with wilted spinach, feta, and sun-dried tomatoes",
    price: 21.98,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Healthy",
    rating: 4.1,
    deliveryTime: "15-25 min",
    badge: null
  },
  {
    name: "Overnight Oats Bowl",
    description: "Rolled oats soaked in almond milk, topped with berries, chia seeds, and honey",
    price: 10.87,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Healthy",
    rating: 4.3,
    deliveryTime: "30-40 min",
    badge: null
  },
  {
    name: "Lentil Soup",
    description: "Hearty red lentil soup with cumin, turmeric, and a squeeze of fresh lemon",
    price: 17.51,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Healthy",
    rating: 4.1,
    deliveryTime: "25-35 min",
    badge: null
  },
  {
    name: "Fruit Salad",
    description: "Seasonal fresh fruits with mint leaves and a light honey-lime drizzle",
    price: 9.06,
    image_url: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=500&q=80",
    category: "Healthy",
    rating: 4.6,
    deliveryTime: "20-30 min",
    badge: null
  },
  {
    name: "Veggie Wrap",
    description: "Whole wheat wrap filled with hummus, roasted vegetables, and mixed greens",
    price: 22.42,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Healthy",
    rating: 4.6,
    deliveryTime: "20-30 min",
    badge: null
  },
  {
    name: "Tuna Salad",
    description: "Albacore tuna with celery, red onion, lemon mayo on a bed of crisp lettuce",
    price: 22.63,
    image_url: "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=500&q=80",
    category: "Healthy",
    rating: 4.7,
    deliveryTime: "25-35 min",
    badge: null
  },
  {
    name: "Detox Green Bowl",
    description: "Kale, cucumber, edamame, and avocado with a ginger-miso dressing",
    price: 15.58,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Healthy",
    rating: 4.8,
    deliveryTime: "15-25 min",
    badge: null
  },
  {
    name: "Brown Rice and Steamed Veggies",
    description: "Nutty brown rice with seasonal steamed vegetables and a light soy-sesame dressing",
    price: 11.2,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Healthy",
    rating: 4.8,
    deliveryTime: "20-30 min",
    badge: null
  },
  {
    name: "Teriyaki Chicken Bowl",
    description: "Glazed teriyaki chicken over steamed rice with sesame seeds and spring onions",
    price: 10.13,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Bowls",
    rating: 4.7,
    deliveryTime: "20-30 min",
    badge: null
  },
  {
    name: "Bibimbap",
    description: "Korean rice bowl with seasoned vegetables, beef, fried egg, and gochujang sauce",
    price: 10.91,
    image_url: "https://images.unsplash.com/photo-1718777791239-c473e9ce7376?w=500&q=80",
    category: "Bowls",
    rating: 4.5,
    deliveryTime: "30-40 min",
    badge: null
  },
  {
    name: "Poke Bowl (Salmon)",
    description: "Fresh salmon cubes with sushi rice, edamame, cucumber, and ponzu dressing",
    price: 24.85,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Bowls",
    rating: 4.6,
    deliveryTime: "15-25 min",
    badge: null
  },
  {
    name: "Poke Bowl (Tuna)",
    description: "Ahi tuna with sushi rice, mango, avocado, and spicy mayo drizzle",
    price: 21.49,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Bowls",
    rating: 4.1,
    deliveryTime: "15-25 min",
    badge: null
  },
  {
    name: "Mediterranean Bowl",
    description: "Falafel, hummus, tabbouleh, and roasted vegetables over herbed couscous",
    price: 16.52,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Bowls",
    rating: 4.5,
    deliveryTime: "20-30 min",
    badge: null
  },
  {
    name: "Mexican Burrito Bowl",
    description: "Cilantro lime rice, black beans, grilled chicken, pico de gallo, and sour cream",
    price: 22.15,
    image_url: "https://images.unsplash.com/photo-1668665771757-4d42737d295a?w=500&q=80",
    category: "Bowls",
    rating: 4.4,
    deliveryTime: "30-40 min",
    badge: null
  },
  {
    name: "Falafel Bowl",
    description: "Crispy falafel on a bed of quinoa with roasted veggies and tahini sauce",
    price: 22.19,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Bowls",
    rating: 4.4,
    deliveryTime: "25-35 min",
    badge: null
  },
  {
    name: "Shawarma Bowl",
    description: "Spiced shawarma chicken over rice with garlic sauce and pickled vegetables",
    price: 12.91,
    image_url: "https://images.unsplash.com/photo-1662116765994-1e4200c43589?w=500&q=80",
    category: "Bowls",
    rating: 4.4,
    deliveryTime: "20-30 min",
    badge: null
  },
  {
    name: "Sushi Bowl",
    description: "Deconstructed sushi bowl with seasoned rice, salmon, cucumber, and nori strips",
    price: 20.56,
    image_url: "https://images.unsplash.com/photo-1724365956437-1b7e1ade4cf7?w=500&q=80",
    category: "Bowls",
    rating: 4.2,
    deliveryTime: "15-25 min",
    badge: null
  },
  {
    name: "Korean Beef Bowl",
    description: "Bulgogi-style beef over steamed rice with kimchi, cucumber, and sesame oil",
    price: 15.42,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Bowls",
    rating: 4.4,
    deliveryTime: "20-30 min",
    badge: null
  },
  {
    name: "Noodle Bowl",
    description: "Ramen-style noodles in a rich broth with soft egg, nori, corn, and bamboo shoots",
    price: 22.96,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Bowls",
    rating: 4.8,
    deliveryTime: "15-25 min",
    badge: null
  },
  {
    name: "Vietnamese Pho Bowl",
    description: "Traditional Vietnamese beef noodle soup with star anise broth, herbs, and lime",
    price: 23.13,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    category: "Bowls",
    rating: 4.8,
    deliveryTime: "15-25 min",
    badge: null
  }
];

const seedDB = async () => {
  try {
    await FoodItem.deleteMany({});
    await FoodItem.insertMany(foods);
    console.log('Database seeded with food items');
    mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
};

seedDB();
