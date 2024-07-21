 const Product = [
  {
    "id": 1,
    "title": "Wireless Mouse",
    "description": "Ergonomic wireless mouse with adjustable DPI, perfect for gaming and office work.",
    "category": "Electronics",
    "price": 25.99,
    "images": [
      "https://fijitraders.com/wp-content/uploads/2021/06/WIRELESS-MOUSE.jpg",
      "https://png.pngitem.com/pimgs/s/77-779717_cheap-wireless-mouse-mouse-hd-png-download.png"
    ],
    "seller_info": {
      "name": "TechGoods",
      "rating": 4.5,
      "location": "New York, USA"
    }
  },
  {
    "id": 2,
    "title": "Running Shoes",
    "description": "Lightweight and comfortable running shoes designed for maximum performance.",
    "category": "Sportswear",
    "price": 60.00,
    "images": [
      "https://images.herzindagi.info/image/2023/Nov/Sports-Shoes.jpg",
      "https://c4.wallpaperflare.com/wallpaper/838/532/887/shoes-nike-splashing-running-wallpaper-preview.jpg"
    ],
    "seller_info": {
      "name": "Sportify",
      "rating": 4.7,
      "location": "Los Angeles, USA"
    }
  },
  {
    "id": 3,
    "title": "Ceramic Coffee Mug",
    "description": "12oz ceramic coffee mug with a modern design. Microwave and dishwasher safe.",
    "category": "Kitchenware",
    "price": 12.50,
    "images": [
      "https://m.media-amazon.com/images/I/81iiWil8DHL._AC_UF894,1000_QL80_.jpg",
      "https://www.yourprint.in/new-admin-ajax.php?action=resize_outer_image&cfcache=all&url=meds3/d-i-o/Mugs/mug_basic_pat_d239_o.jpg&resizeTo=600"
    ],
    "seller_info": {
      "name": "HomeEssentials",
      "rating": 4.3,
      "location": "Chicago, USA"
    }
  },
  {
    "id": 4,
    "title": "Bluetooth Headphones",
    "description": "Noise-cancelling Bluetooth headphones with a 20-hour battery life.",
    "category": "Electronics",
    "price": 80.00,
    "images": [
      "https://i.pinimg.com/564x/f9/58/66/f958666a64a2536b0f2c7f4f70906ccd.jpg",
      "https://www.sony.co.in/image/146aaaba87a5b80aee60da476457a72f?fmt=jpeg&wid=1160&qlt=43"
    ],
    "seller_info": {
      "name": "SoundWave",
      "rating": 4.8,
      "location": "San Francisco, USA"
    }
  },
  {
    "id": 5,
    "title": "Organic Green Tea",
    "description": "100% organic green tea leaves, rich in antioxidants and great for health.",
    "category": "Grocery",
    "price": 15.99,
    "images": [
      "https://tearaja.in/cdn/shop/products/organic-green-tea-tearaja-1_grande.jpg?v=1704912609",
      "https://ootymade.com/cdn/shop/files/105-min_1024x1024@2x.png?v=1694266976"
    ],
    "seller_info": {
      "name": "HealthyDrinks",
      "rating": 4.6,
      "location": "Portland, USA"
    }
  },
  {
    "id": 6,
    "title": "Yoga Mat",
    "description": "Non-slip yoga mat made from eco-friendly materials, available in multiple colors.",
    "category": "Sportswear",
    "price": 22.99,
    "images": [
      "https://5.imimg.com/data5/JI/VR/MY-2951851/yoga-fitness-mat.png",
      "https://healkit.in/wp-content/uploads/2020/05/yogamat-6-mm-buy-online.jpg"
    ],
    "seller_info": {
      "name": "FitnessFirst",
      "rating": 4.5,
      "location": "Austin, USA"
    }
  },
  {
    "id": 7,
    "title": "Stainless Steel Water Bottle",
    "description": "Durable stainless steel water bottle with a leak-proof lid. Keeps beverages cold for 24 hours.",
    "category": "Outdoor",
    "price": 18.50,
    "images": [
      "https://5.imimg.com/data5/AY/NE/MA/SELLER-13236534/stainless-steel-water-bottle-500x500.jpg",
      "https://t3.ftcdn.net/jpg/03/29/04/30/360_F_329043049_0QBp6UVYUwyxeAvibel3znLV0o9FfYcW.jpg"
    ],
    "seller_info": {
      "name": "OutdoorGear",
      "rating": 4.4,
      "location": "Denver, USA"
    }
  },
  {
    "id": 8,
    "title": "Wireless Charger",
    "description": "Fast wireless charger compatible with all Qi-enabled devices.",
    "category": "Electronics",
    "price": 30.00,
    "images": [
      "https://www.cnet.com/a/img/resize/8dfd582b861be518dcb968d1f1b6de01ef114961/hub/2023/02/28/9da2e9c7-d07d-45cb-89d1-18c7013249e5/anker-315-wireless-charger.png?auto=webp&fit=crop&height=900&width=1200",
      "https://t3.ftcdn.net/jpg/01/01/43/96/360_F_101439610_ap3ZbVxCvJEIhYljVZWVu2nxN886Ezie.jpg"
    ],
    "seller_info": {
      "name": "GadgetZone",
      "rating": 4.7,
      "location": "Seattle, USA"
    }
  },
  {
    "id": 9,
    "title": "LED Desk Lamp",
    "description": "Adjustable LED desk lamp with touch control and multiple brightness settings.",
    "category": "Home Decor",
    "price": 28.99,
    "images": [
      "https://m.media-amazon.com/images/I/51sIgRT5+ML._AC_UF1000,1000_QL80_.jpg",
      "https://artstreet.in/cdn/shop/files/61HCQHe8b5L_695x695_eb17bacf-792e-4a8d-b34d-82d31e75525b_695x695.jpg?v=1684235350"
    ],
    "seller_info": {
      "name": "BrightHome",
      "rating": 4.6,
      "location": "Boston, USA"
    }
  },
  {
    "id": 10,
    "title": "Smart Watch",
    "description": "Feature-rich smart watch with heart rate monitor, GPS, and customizable watch faces.",
    "category": "Electronics",
    "price": 199.99,
    "images": [
      "https://m.media-amazon.com/images/I/61gpLj2KvTL.jpg",
      "https://img.freepik.com/premium-photo/new-smartwatch-balancing-with-hand_23-2150296477.jpg"
    ],
    "seller_info": {
      "name": "TimeTech",
      "rating": 4.7,
      "location": "Miami, USA"
    }
  },
  {
    "id": 11,
    "title": "Leather Wallet",
    "description": "Slim and stylish leather wallet with multiple card slots and a coin pocket.",
    "category": "Accessories",
    "price": 45.00,
    "images": [
      "https://t3.ftcdn.net/jpg/05/63/27/76/360_F_563277688_lQaXnd9lfqVl6N3jioruklMNHfB4WXRF.jpg",
      "https://png.pngtree.com/background/20230426/original/pngtree-leather-wallet-with-a-button-laying-on-top-of-an-object-picture-image_2488033.jpg"
    ],
    "seller_info": {
      "name": "StyleHub",
      "rating": 4.4,
      "location": "Dallas, USA"
    }
  },
  {
    "id": 12,
    "title": "Electric Kettle",
    "description": "1.7L electric kettle with rapid boiling technology and auto shut-off feature.",
    "category": "Kitchen Appliances",
    "price": 35.99,
    "images": [
      "https://sathya.in/media/77309/catalog/71zlLSHbJ-L._SL1500_.jpg",
      "https://t4.ftcdn.net/jpg/02/97/45/97/360_F_297459766_ANG0PPzrSzcMOQDpKEtLEvc8lSnb5x86.jpg"
    ],
    "seller_info": {
      "name": "KitchenPro",
      "rating": 4.6,
      "location": "San Diego, USA"
    }
  },
  {
    "id": 13,
    "title": "Camping Tent",
    "description": "Spacious 4-person camping tent with waterproof coating and easy setup.",
    "category": "Outdoor",
    "price": 120.00,
    "images": [
      "https://thumbs.dreamstime.com/b/red-camping-tent-misty-mountains-7134428.jpg",
      "https://static.vecteezy.com/system/resources/thumbnails/029/495/151/small_2x/ai-generated-ai-generative-camping-relaxation-time-tent-at-lake-beautiful-landscape-background-adventure-vacation-rafting-time-graphic-art-photo.jpg"
    ],
    "seller_info": {
      "name": "AdventureGear",
      "rating": 4.8,
      "location": "Salt Lake City, USA"
    }
  },
  {
    "id": 14,
    "title": "Portable Blender",
    "description": "Compact and powerful portable blender for smoothies and shakes on the go.",
    "category": "Kitchen Appliances",
    "price": 40.00,
    "images": [
      "https://m.media-amazon.com/images/I/716iF4+GMfL.jpg",
      "https://www.innovations.com.au/images/product/square/large/PJB.jpg"
    ],
    "seller_info": {
      "name": "BlendMaster",
      "rating": 4.7,
      "location": "Orlando, USA"
    }
  },
  {
    "id": 15,
    "title": "Gaming Keyboard",
    "description": "Mechanical gaming keyboard with RGB backlighting and programmable keys.",
    "category": "Electronics",
    "price": 90.00,
    "images": [
      "https://png.pngtree.com/background/20230526/original/pngtree-the-lighting-of-the-gaming-keyboard-in-full-rainbow-color-picture-image_2740730.jpg",
      "https://c4.wallpaperflare.com/wallpaper/860/281/302/pc-gaming-league-of-legends-rgb-cyberpower-pc-wallpaper-preview.jpg"
    ],
    "seller_info": {
      "name": "GamerGear",
      "rating": 4.6,
      "location": "Las Vegas, USA"
    }
  },
  {
    "id": 16,
    "title": "Electric Toothbrush",
    "description": "Rechargeable electric toothbrush with multiple brushing modes and a 2-minute timer.",
    "category": "Personal Care",
    "price": 55.00,
    "images": [
      "https://media.gq-magazine.co.uk/photos/62a20dc2f1a23ef217431be1/4:3/w_1440,h_1080,c_limit/Electricbrush_HP.jpg",
      "https://media.istockphoto.com/id/1301030509/photo/electric-toothbrush-dental-and-oral-care-concept.jpg?s=612x612&w=0&k=20&c=6xmWNqpZKznu0owvwrKtv8Q4CZCLq3kUHGNrLCl94Uk="
    ],
    "seller_info": {
      "name": "SmileBright",
      "rating": 4.5,
      "location": "Phoenix, USA"
    }
  },
  {
    "id": 17,
    "title": "Fitness Tracker",
    "description": "Water-resistant fitness tracker with heart rate monitor and sleep tracking.",
    "category": "Electronics",
    "price": 75.00,
    "images": [
      "https://t3.ftcdn.net/jpg/01/19/10/50/360_F_119105017_fvaI0vIf10n6WmvCTnlHtO5sBxZaEcxk.jpg",
      "https://cdn.pixabay.com/photo/2021/11/03/05/33/fitness-band-6764739_640.jpg"
    ],
    "seller_info": {
      "name": "FitTech",
      "rating": 4.8,
      "location": "San Antonio, USA"
    }
  },
  {
    "id": 18,
    "title": "Air Purifier",
    "description": "High-efficiency air purifier with HEPA filter and quiet operation.",
    "category": "Home Appliances",
    "price": 150.00,
    "images": [
      "https://img.freepik.com/premium-vector/air-purifier-interior-wooden-floor-background-illustration-with-house-plant-floor-air-cleaning-humidifying-devise-house_134830-319.jpg",
      "https://image.cnbcfm.com/api/v1/image/106694043-1599582236847-air.jpg?v=1599582292&w=1600&h=900"
    ],
    "seller_info": {
      "name": "CleanAir",
      "rating": 4.7,
      "location": "Atlanta, USA"
    }
  },
  {
    "id": 19,
    "title": "Laptop Stand",
    "description": "Adjustable laptop stand with ergonomic design for comfortable typing.",
    "category": "Office Supplies",
    "price": 30.00,
    "images": [
      "https://5.imimg.com/data5/SELLER/Default/2023/10/351989500/EA/RW/HD/7054459/portable-laptop-stand.png",
      "https://5.imimg.com/data5/SELLER/Default/2022/8/VE/TE/YP/12959365/foldable-metal-laptop-stand-500x500.jpg"
    ],
    "seller_info": {
      "name": "OfficePro",
      "rating": 4.5,
      "location": "Charlotte, USA"
    }
  },
  {
    "id": 20,
    "title": "Noise Cancelling Earbuds",
    "description": "Wireless noise-cancelling earbuds with long battery life and superior sound quality.",
    "category": "Electronics",
    "price": 110.00,
    "images": [
      "https://m.media-amazon.com/images/I/51DOzlkiBTL._AC_UF1000,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/71ycp7Dx2CL._AC_UF1000,1000_QL80_.jpg"
    ],
    "seller_info": {
      "name": "SoundMagic",
      "rating": 4.6,
      "location": "Nashville, USA"
    }
  },
  {
    "id": 21,
    "title": "Organic Honey",
    "description": "Pure organic honey harvested from wildflowers, rich in flavor and nutrients.",
    "category": "Grocery",
    "images": [
      "https://img.lovepik.com/photo/48013/7280.jpg_wh860.jpg",
      "https://t3.ftcdn.net/jpg/02/19/55/78/360_F_219557879_nQ78Jca2C2rlyAq1ttygRzV5km0RSnz5.jpg"
    ],
    "price": 15.99,
    "seller_info": {
      "name": "NatureSweets",
      "rating": 4.7,
      "location": "Seattle, USA"
    }
  },
  {
    "id": 22,
    "title": "Bamboo Cutting Board",
    "description": "Eco-friendly bamboo cutting board with juice groove and non-slip edges.",
    "category": "Kitchenware",
    "images": [
      "https://assets.bonappetit.com/photos/5ebee429d7d33f2451345969/16:9/w_2560%2Cc_limit/HR-Bamboo-Cutting-Board.jpg",
      "https://images-cdn.ubuy.co.in/65392166900d1e28bf0cb40c-vaefae-24-x-16-inch-xxx-large-bamboo.jpg"
    ],
    "price": 24.99,
    "seller_info": {
      "name": "GreenKitchen",
      "rating": 4.5,
      "location": "San Francisco, USA"
    }
  },
  {
    "id": 23,
    "title": "Instant Pot",
    "description": "7-in-1 programmable Instant Pot with multiple cooking functions and easy-to-use interface.",
    "category": "Kitchen Appliances",
    "images": [
      "https://m.media-amazon.com/images/I/61fJq6t-vrL.jpg",
      "https://png.pngtree.com/thumb_back/fh260/background/20230523/pngtree-an-electric-pressure-cooker-on-a-counter-is-next-to-rice-image_2699292.jpg"
    ],
    "price": 89.99,
    "seller_info": {
      "name": "KitchenKing",
      "rating": 4.8,
      "location": "Houston, USA"
    }
  },
  {
    "id": 24,
    "title": "Foldable Treadmill",
    "description": "Compact foldable treadmill with multiple speed settings and digital display.",
    "category": "Sportswear",
    "images": [
      "https://images-cdn.ubuy.co.in/634f483193abeb521a347aca-gymax-folding-treadmill-3-0hp-free.jpg",
      "https://uk.walkingpad.com/cdn/shop/products/WalkingPad-R1Pro-1000-1000-5.jpg?v=1695088819"
    ],
    "price": 299.99,
    "seller_info": {
      "name": "FitLife",
      "rating": 4.6,
      "location": "New York, USA"
    }
  },
  {
    "id": 25,
    "title": "Weighted Blanket",
    "description": "Cozy weighted blanket with breathable fabric for better sleep and relaxation.",
    "category": "Home Decor",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2023/01/weightedblankets-2048px-08388-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024",
      "https://allurebathfashions.co.uk/cdn/shop/articles/Allure_Bath_Fashions_-_Weighted_Blanket-13.jpg?v=1619606919"
    ],
    "price": 49.99,
    "seller_info": {
      "name": "ComfortZone",
      "rating": 4.7,
      "location": "Chicago, USA"
    }
  },
  {
    "id": 26,
    "title": "Smart Doorbell",
    "description": "WiFi-enabled smart doorbell with video recording and two-way audio.",
    "category": "Home Security",
    "images": [
      "https://m.media-amazon.com/images/I/51vtIUVUiFL.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2023/8/335120742/WA/EP/VW/80139830/wifi-wireless-full-hd-smart-video-doorbell-with-two-way-talk-pir-detection-night-vision.jpg"
    ],
    "price": 99.99,
    "seller_info": {
      "name": "SecureHome",
      "rating": 4.8,
      "location": "Los Angeles, USA"
    }
  },
  {
    "id": 27,
    "title": "Electric Scooter",
    "description": "Foldable electric scooter with a top speed of 15 mph and a range of 12 miles.",
    "category": "Outdoor",
    "images": [
      "https://www.rushlane.com/wp-content/uploads/2021/03/nij-auto-electric-scooters-launch-price-features-1200x675.jpg",
      "https://images.drivespark.com/ph-big/2021/08/simple-one-electric-scooter-4.jpg"
    ],
    "price": 199.99,
    "seller_info": {
      "name": "UrbanRide",
      "rating": 4.6,
      "location": "San Diego, USA"
    }
  },
  {
    "id": 28,
    "title": "VR Headset",
    "description": "Immersive VR headset with high-resolution display and comfortable fit.",
    "category": "Electronics",
    "images": [
      "https://images-cdn.ubuy.co.in/63b824cfe475a3621300ccd6-vr-headset-with-controller-adjustable-3d.jpg",
      "https://cdn.mos.cms.futurecdn.net/Bdd9TqytLkJoqePAYNzxgc.jpg"
    ],
    "price": 129.99,
    "seller_info": {
      "name": "VirtualWorld",
      "rating": 4.7,
      "location": "Austin, USA"
    }
  },
  {
    "id": 29,
    "title": "Digital Photo Frame",
    "description": "High-definition digital photo frame with WiFi connectivity and remote control.",
    "category": "Home Decor",
    "images": [
      "https://m.media-amazon.com/images/I/7146n4wnyjL._AC_UF1000,1000_QL80_.jpg",
      "https://images-cdn.ubuy.co.in/63a26663af01e23af965f913-bwjbsw-digital-picture-frame-10-1-inch.jpg"
    ],
    "price": 59.99,
    "seller_info": {
      "name": "MemoryLane",
      "rating": 4.5,
      "location": "Portland, USA"
    }
  },
  {
    "id": 30,
    "title": "Smart Light Bulbs",
    "description": "Set of smart light bulbs with color-changing options and app control.",
    "category": "Home Decor",
    "images": [
      "https://images.unsplash.com/photo-1711006155490-ec01a0ecf0de?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D",
      "https://d1vfpdpyv21g5i.cloudfront.net/zunpulse/products_v5/bulb-combo-2/bulb-2.jpg"
    ],
    "price": 39.99,
    "seller_info": {
      "name": "BrightTech",
      "rating": 4.6,
      "location": "Denver, USA"
    }
  },
  {
    "id": 31,
    "title": "Electric Griddle",
    "description": "Large electric griddle with adjustable temperature control and non-stick surface.",
    "category": "Kitchen Appliances",
    "images": [
      "https://media.istockphoto.com/id/1217841168/photo/electric-griddle-to-cook-food-photo-on-white-background.jpg?s=612x612&w=0&k=20&c=j6zu5cqR1KJ8KgSS2-ikW0x1A6ID94o0xNNtW45Pmu0=",
      "https://image.made-in-china.com/2f0j00vhTWEJBGnOUm/Electric-Griddle-with-Removable-Handles-BBQ-Grill-Pan-Indoor.webp"
    ],
    "price": 49.99,
    "seller_info": {
      "name": "GrillMaster",
      "rating": 4.7,
      "location": "Miami, USA"
    }
  },
  {
    "id": 32,
    "title": "Adjustable Dumbbells",
    "description": "Set of adjustable dumbbells with weight options from 5 to 50 lbs.",
    "category": "Sportswear",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2023/05/adjustable-dumbbell-2048px-9353.jpg",
      "https://images-cdn.ubuy.co.in/63569171a5538d0d8875547b-montsprit-adjustable-dumbbells-set.jpg"
    ],
    "price": 149.99,
    "seller_info": {
      "name": "MuscleMax",
      "rating": 4.8,
      "location": "Las Vegas, USA"
    }
  },
  {
    "id": 33,
    "title": "Electric Fireplace",
    "description": "Wall-mounted electric fireplace with realistic flame effect and remote control.",
    "category": "Home Decor",
    "images": [
      "https://c1.wallpaperflare.com/preview/263/367/703/fireplace-fire-home-interior.jpg",
      "https://www.heatdesign.ie/wp-content/uploads/2021/05/Cambria-with-HD-16-inch-electric-fire.jpg"
    ],
    "price": 199.99,
    "seller_info": {
      "name": "CozyHome",
      "rating": 4.6,
      "location": "Boston, USA"
    }
  },
  {
    "id": 34,
    "title": "E-Reader",
    "description": "Lightweight e-reader with a glare-free screen and long battery life.",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/38/zEk8RJdmQrqja2XwbjgJ_DSC_2368.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fGVib29rJTIwcmVhZGVyfGVufDB8fHx8MTcyMDY5ODczM3ww&ixlib=rb-4.0.3",
      "https://c0.wallpaperflare.com/preview/258/455/631/kindle-e-reader-technology-reading.jpg"
    ],
    "price": 99.99,
    "seller_info": {
      "name": "ReadTech",
      "rating": 4.7,
      "location": "Charlotte, USA"
    }
  },
  {
    "id": 35,
    "title": "Smart Thermostat",
    "description": "WiFi-enabled smart thermostat with programmable settings and energy-saving features.",
    "category": "Home Security",
    "images": [
      "https://images.ctfassets.net/gztkr1jaynk0/4ZViS3hxJJUjMM4Va52D7P/be84fad941453ff00586ee8040c5714c/install-smart-thermostat.jpg",
      "https://media.product.which.co.uk/prod/images/original/gm-fb32a1df-3035-4b08-8c77-d6e8f9c801eb-smart-thermostat.jpg"
    ],
    "price": 149.99,
    "seller_info": {
      "name": "EcoHome",
      "rating": 4.8,
      "location": "Nashville, USA"
    }
  },
  {
    "id": 36,
    "title": "Waterproof Backpack",
    "description": "Durable waterproof backpack with multiple compartments and ergonomic design.",
    "category": "Outdoor",
    "images": [
      "https://img.freepik.com/premium-photo/gorgeous-stylish-waterproof-backpack-isolated-white-background_94628-25223.jpg",
      "https://hpa-nz.co.nz/wp-content/uploads/2023/09/waterproof-backpack-dry-backpack-40-hd-3.jpg"
    ],
    "price": 69.99,
    "seller_info": {
      "name": "AdventurePack",
      "rating": 4.6,
      "location": "Salt Lake City, USA"
    }
  },
  {
    "id": 37,
    "title": "Electric Pressure Cooker",
    "description": "Versatile electric pressure cooker with pre-set programs and safety features.",
    "category": "Kitchen Appliances",
    "images": [
      "https://agarolifestyle.com/cdn/shop/files/Slide01_63bb5594-a813-4c6a-aeb3-dffa3990f62e.jpg?v=1684135921",
      "https://m.media-amazon.com/images/I/71q+sDymP5L._AC_UF894,1000_QL80_.jpg"
    ],
    "price": 79.99,
    "seller_info": {
      "name": "CookEase",
      "rating": 4.7,
      "location": "Orlando, USA"
    }
  },
  {
    "id": 38,
    "title": "Fitness Ball",
    "description": "Anti-burst fitness ball suitable for yoga, pilates, and general exercise.",
    "category": "Sportswear",
    "images": [
      "https://w0.peakpx.com/wallpaper/153/902/HD-wallpaper-ball-fitness-exercise-gym-workout-thumbnail.jpg",
      "https://i.pinimg.com/736x/b1/b7/5e/b1b75e05271d31e921b4b37568d878c2.jpg"
    ],
    "price": 19.99,
    "seller_info": {
      "name": "GymGear",
      "rating": 4.5,
      "location": "Dallas, USA"
    }
  },
  {
    "id": 39,
    "title": "Electric Shaver",
    "description": "Rechargeable electric shaver with precision blades and a pop-up trimmer.",
    "category": "Personal Care",
    "images": [
      "https://m.media-amazon.com/images/I/71K6HcFcySL._UF1000,1000_QL80_.jpg",
      "https://t4.ftcdn.net/jpg/03/10/99/79/360_F_310997939_d7AmSLJmkz6ucYenzLsvCKJgBRa569RZ.jpg"
    ],
    "price": 49.99,
    "seller_info": {
      "name": "ShaveMaster",
      "rating": 4.6,
      "location": "Phoenix, USA"
    }
  },
  {
    "id": 40,
    "title": "Induction Cooktop",
    "description": "Portable induction cooktop with multiple temperature settings and a digital display.",
    "category": "Kitchen Appliances",
    "images": [
      "https://m.media-amazon.com/images/I/715L3WOq4JL._AC_UF894,1000_QL80_.jpg",
      "https://myborosil.com/cdn/shop/products/my-borosil-cooktops-smartkook-induction-cooktop-pc11-29939959562378.jpg?v=1677171051"
    ],
    "price": 59.99,
    "seller_info": {
      "name": "CookSmart",
      "rating": 4.7,
      "location": "San Antonio, USA"
    }
  },
  {
    "id": 41,
    "title": "Smart Plug",
    "description": "WiFi-enabled smart plug with energy monitoring and voice control compatibility.",
    "category": "Home Security",
    "images": [
      "https://5.imimg.com/data5/SELLER/Default/2023/10/352300186/YH/FY/DJ/65981574/smartplug-139-500x500.png",
      "https://m.media-amazon.com/images/I/413cAMi4xNL.jpg"
    ],
    "seller_info": {
      "name": "PlugIn",
      "rating": 4.5,
      "location": "Atlanta, USA"
    },
    "price": 29.99
  },
  {
    "id": 42,
    "title": "Electric Blanket",
    "description": "Soft electric blanket with adjustable heat settings and auto shut-off.",
    "category": "Home Decor",
    "images": [
      "https://media.handball-store.com/catalog/product/cache/image/1800x/9df78eab33525d08d6e5fb8d27136e95/b/e/beurer_42108_1.jpg",
      "https://www.tradeinn.com/f/13958/139583097/beurer-hd-150-xxl-electric-blanket-150x200-cm.jpg"
    ],
    "seller_info": {
      "name": "WarmCozy",
      "rating": 4.6,
      "location": "Chicago, USA"
    },
    "price": 79.99
  },
  {
    "id": 43,
    "title": "Travel Pillow",
    "description": "Memory foam travel pillow with ergonomic design and washable cover.",
    "category": "Accessories",
    "images": [
      "https://www.shutterstock.com/image-photo/travel-pillow-sleep-mask-suitcase-260nw-2054288768.jpg",
      "https://media.cntraveler.com/photos/652fec75857b3793e045ab0a/16:9/w_2560%2Cc_limit/Travel%2520Pillows-2023_GettyImages-1212164958.jpg"
    ],
    "seller_info": {
      "name": "ComfortTravel",
      "rating": 4.5,
      "location": "New York, USA"
    },
    "price": 19.99
  },
  {
    "id": 44,
    "title": "Solar Charger",
    "description": "Portable solar charger with dual USB ports and high-efficiency solar panels.",
    "category": "Electronics",
    "images": [
      "https://c8.alamy.com/comp/D5R6W4/mobile-phone-solar-powered-battery-charger-D5R6W4.jpg",
      "https://t4.ftcdn.net/jpg/05/85/85/41/360_F_585854158_kA1l4gPYEWt2f0mRazgD7Uotibwxw04v.jpg"
    ],
    "seller_info": {
      "name": "EcoTech",
      "rating": 4.7,
      "location": "San Francisco, USA"
    },
    "price": 49.99
  },
  {
    "id": 45,
    "title": "Yoga Mat",
    "description": "Non-slip yoga mat with extra thickness for comfort and support.",
    "category": "Sportswear",
    "images": [
      "https://png.pngtree.com/background/20230525/original/pngtree-colorful-yoga-mats-picture-image_2736891.jpg",
      "https://assets.vogue.in/photos/60d02cec96d470590e0c7d17/2:3/w_2560%2Cc_limit/8%2520eco-friendly%2520yoga%2520mats%2520to%2520support%2520your%2520practice%2520and%2520the%2520planet.jpg"
    ],
    "seller_info": {
      "name": "ZenFitness",
      "rating": 4.6,
      "location": "Denver, USA"
    },
    "price": 24.99
  },
  {
    "id": 46,
    "title": "Bluetooth Speaker",
    "description": "Portable Bluetooth speaker with deep bass and 12-hour battery life.",
    "category": "Electronics",
    "images": [
      "https://m.media-amazon.com/images/I/71QIESVX4jL.jpg",
      "https://jasminesmarthomes.com/img/shop-single-img/product1553-item-01.jpg"
    ],
    "seller_info": {
      "name": "SoundWave",
      "rating": 4.7,
      "location": "Seattle, USA"
    },
    "price": 39.99
  },
  {
    "id": 47,
    "title": "Cordless Vacuum Cleaner",
    "description": "Lightweight cordless vacuum cleaner with powerful suction and easy maneuverability.",
    "category": "Home Appliances",
    "images": [
      "https://media.istockphoto.com/id/816906882/photo/woman-using-a-vacuum-cleaner-while-cleaning-carpet-in-the-house.jpg?s=612x612&w=0&k=20&c=Jhj5lzJi_4tSbPZi-NHVlpJu1UAsTK6kSCQQ5JYUc3w=",
      "https://img.etimg.com/thumb/width-1600,height-900,imgsize-1627630,resizemode-75,msid-100960013/top-trending-products/kitchen-dining/large-appliances/top-6-mini-vacuum-cleaners-for-spotless-and-healthy-living.jpg"
    ],
    "seller_info": {
      "name": "CleanMaster",
      "rating": 4.8,
      "location": "Houston, USA"
    },
    "price": 149.99
  },
  {
    "id": 48,
    "title": "Electric Skateboard",
    "description": "High-speed electric skateboard with remote control and long-lasting battery.",
    "category": "Outdoor",
    "images": [
      "https://robbreport.com/wp-content/uploads/2017/11/starkboard-01.jpg?w=1000",
      "https://media.wired.com/photos/5954932fbe605811a2fdd6e9/master/pass/s5pOG7texzsXk-2VmYcDV-wSlTaReaaI76QjDkBci7QqWHH5gXVTOy3yhWv_3vbb2EL11iVzQOfsDpVDIR-Iko.jpeg"
    ],
    "seller_info": {
      "name": "SkatePro",
      "rating": 4.6,
      "location": "Austin, USA"
    },
    "price": 299.99
  },
  {
    "id": 49,
    "title": "Smart Refrigerator",
    "description": "Energy-efficient smart refrigerator with touch screen and WiFi connectivity.",
    "category": "Home Appliances",
    "images": [
      "https://fortune.com/img-assets/wp-content/uploads/2016/01/samsung-refrigerator.jpg?w=1440&q=75",
      "https://img.freepik.com/premium-photo/smart-fridge-hd-8k-wallpaper-stock-photographic-image_871881-23165.jpg?w=360"
    ],
    "seller_info": {
      "name": "FridgeTech",
      "rating": 4.7,
      "location": "Phoenix, USA"
    },
    "price": 1999.99
  },
  {
    "id": 50,
    "title": "Wireless Earbuds",
    "description": "Compact wireless earbuds with noise-cancelling feature and charging case.",
    "category": "Electronics",
    "images": [
      "https://gizmore.in/cdn/shop/files/1_5bc161a6-ae00-4b62-976a-cdfbb71a744f.jpg?v=1695796412&width=2048",
      "https://images-cdn.ubuy.co.in/633c3472f0803a5dd03856fc-bluetooth-5-3-headphones-for-samsung-s22.jpg"
    ],
    "seller_info": {
      "name": "SoundMagic",
      "rating": 4.8,
      "location": "San Diego, USA"
    },
    "price": 129.99
  },
  {
    "id": 51,
    "title": "Electric Bike",
    "description": "Eco-friendly electric bike with pedal assist and a range of up to 50 miles.",
    "category": "Outdoor",
    "images": [
      "https://c4.wallpaperflare.com/wallpaper/976/934/572/electric-bikes-bmw-urban-racer-electric-best-bikes-wallpaper-preview.jpg",
      "https://techcrunch.com/wp-content/uploads/2019/01/HD.LW_.LEAD_.png"
    ],
    "seller_info": {
      "name": "GreenRide",
      "rating": 4.7,
      "location": "Portland, USA"
    },
    "price": 1499.99
  },
  {
    "id": 52,
    "title": "Smart Coffee Maker",
    "description": "WiFi-enabled coffee maker with programmable settings and voice control.",
    "category": "Kitchen Appliances",
    "images": [
      "https://accessworld.in/cdn/shop/products/Melitta-barista-ts-smart-coffee-machine-2.webp?v=1664018745&width=1800",
      "https://www.digitaltrends.com/wp-content/uploads/2021/12/atomi-smart-coffee-maker.jpg?fit=720%2C720&p=1"
    ],
    "seller_info": {
      "name": "BrewMaster",
      "rating": 4.6,
      "location": "San Francisco, USA"
    },
    "price": 149.99
  },   
  {
    "id": 53,
    "title": "Pet Hair Remover",
    "description": "Effective pet hair remover with reusable roller and self-cleaning base.",
    "category": "Home Care",
    "images": [
      "https://m.media-amazon.com/images/I/51ybqiZszsL._AC_UF1000,1000_QL80_.jpg",
      "https://www.shutterstock.com/shutterstock/videos/1102003881/thumb/1.jpg?ip=x480"
    ],
    "seller_info": {
      "name": "PetCare",
      "rating": 4.5,
      "location": "Denver, USA"
    },
    "price": 29.99
  },
  {
    "id": 54,
    "title": "Smart Lock",
    "description": "Keyless smart lock with fingerprint recognition and mobile app control.",
    "category": "Home Security",
    "images": [
      "https://i.pinimg.com/originals/70/b5/96/70b596ee86447356ae7de941325da772.jpg",
      "https://media.licdn.com/dms/image/D5612AQG1C_9ul-GmkA/article-cover_image-shrink_720_1280/0/1700130595225?e=2147483647&v=beta&t=lqZMqcGloFAKLwfraHG7E2nDIGESZCVntUYB3F8H7zA"
    ],
    "seller_info": {
      "name": "SecureTech",
      "rating": 4.8,
      "location": "Los Angeles, USA"
    },
    "price": 199.99
  },
  {
    "id": 55,
    "title": "Fitness Tracker Watch",
    "description": "Multifunction fitness tracker watch with heart rate monitor and GPS.",
    "category": "Electronics",
    "images": [
      "https://m.media-amazon.com/images/I/61GvwAAMvNL.jpg",
      "https://media.istockphoto.com/id/1331093241/photo/sport-woman-running-treadmill-use-smartwatch-connect-smartphone-workout-app-and-listening.webp?b=1&s=170667a&w=0&k=20&c=mj8yA37GXHiAEqmXXGko6QSQjrIsC6cnYrQbUGMPVxs="
    ],
    "seller_info": {
      "name": "FitLife",
      "rating": 4.7,
      "location": "Seattle, USA"
    },
    "price": 79.99
  },
  {
    "id": 56,
    "title": "Robot Vacuum Cleaner",
    "description": "Smart robot vacuum cleaner with multiple cleaning modes and app control.",
    "category": "Home Appliances",
    "images": [
      "https://img.freepik.com/premium-photo/robotic-vacuum-cleaner-hd-8k-wallpaper-stock-photographic-image_890746-39891.jpg",
      "https://media.wired.com/photos/641d0fc298e1501546f52c83/1:1/w_1430,h_1430,c_limit/How-to-Get-the-Most-Out-of-(or-Into)-Your-Robot-Vacuum-Gear-GettyImages-1314495818.jpg"
    ],
    "seller_info": {
      "name": "CleanBot",
      "rating": 4.8,
      "location": "Boston, USA"
    },
    "price": 249.99
  },
  {
    "id": 57,
    "title": "Bluetooth Headphones",
    "description": "Over-ear Bluetooth headphones with noise-cancelling feature and long battery life.",
    "category": "Electronics",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBqytTcDiM3GPsSPUSXt4jYheWu0zu4c0KQ&s",
      "https://rukminim2.flixcart.com/image/850/1000/l55nekw0/headphone/l/i/n/neckband-water-sweat-resistant-earphones-with-built-in-hd-mic-original-imagfw7tgttecfrg.jpeg?q=90&crop=false"
    ],
    "seller_info": {
      "name": "SoundWave",
      "rating": 4.7,
      "location": "Austin, USA"
    },
    "price": 99.99
  },
  {
    "id": 58,
    "title": "Electric Grill",
    "description": "Portable electric grill with non-stick surface and adjustable temperature control.",
    "category": "Kitchen Appliances",
    "images": [
      "https://5.imimg.com/data5/SELLER/Default/2022/11/YA/MG/RO/25945379/electric-barbeque-grill-500x500.jpg",
      "https://t4.ftcdn.net/jpg/01/81/74/39/360_F_181743942_3FiHD7S5VpZtYQfhX2Ps8z6ZbT8jFDY9.jpg"
    ],
    "seller_info": {
      "name": "GrillMaster",
      "rating": 4.6,
      "location": "Chicago, USA"
    },
    "price": 79.99
  },
  {
    "id": 59,
    "title": "Air Fryer",
    "description": "Compact air fryer with digital display and multiple cooking presets.",
    "category": "Kitchen Appliances",
    "images": [
      "https://t4.ftcdn.net/jpg/04/25/94/69/360_F_425946966_eoAnhbXqPUeejglGFevKmNfUFRJYVVEz.jpg",
      "https://e7.pngegg.com/pngimages/113/470/png-clipart-princess-digital-aerofryer-xl-deep-fryers-air-fryer-philips-avance-collection-airfryer-xl-philips-avance-collection-airfryer-xxl-hd9650-air-fryer-kitchen-food-thumbnail.png"
    ],
    "seller_info": {
      "name": "FryTech",
      "rating": 4.7,
      "location": "Miami, USA"
    },
    "price": 89.99
  },
  {
    "id": 60,
    "title": "Smart Scale",
    "description": "Bluetooth smart scale with body composition analysis and mobile app sync.",
    "category": "Personal Care",
    "images": [
      "https://m.media-amazon.com/images/I/818qQGF1EvL._AC_UF350,350_QL80_.jpg",
      "https://m.media-amazon.com/images/I/51b39eud81L._AC_UF350,350_QL80_.jpg"
    ],
    "seller_info": {
      "name": "HealthMetrics",
      "rating": 4.6,
      "location": "New York, USA"
    },
    "price": 49.99
  },
  {
    "id": 61,
    "title": "Cordless Drill",
    "description": "Powerful cordless drill with multiple speed settings and rechargeable battery.",
    "category": "Tools",
    "images": [
      "https://cdn.moglix.com/catalog/product/feature-images/RcUJOqIYkM7QH.jpg",
      "https://media.istockphoto.com/id/1167547382/photo/carpentry-using-a-cordless-drill.jpg?s=612x612&w=0&k=20&c=mdXTri7uia0BAp4InFW_E7vnhdjfVWoZOva4PV8oz_4="
    ],
    "seller_info": {
      "name": "ToolPro",
      "rating": 4.7,
      "location": "Dallas, USA"
    },
    "price": 89.99
  },
  {
    "id": 62,
    "title": "Gaming Mouse",
    "description": "Ergonomic gaming mouse with adjustable DPI settings and customizable buttons.",
    "category": "Electronics",
    "images": [
      "https://wallpapers.com/images/hd/gaming-mice-1600-x-900-wallpaper-vitcrhi4vf0gfvzn.jpg",
      "https://c0.wallpaperflare.com/preview/316/361/238/black-logitech-g-series-gaming-mouse-on-red-surface.jpg"
    ],
    "seller_info": {
      "name": "GamerZone",
      "rating": 4.6,
      "location": "San Francisco, USA"
    },
    "price": 49.99
  },
  {
    "id": 63,
    "title": "Home Security Camera",
    "description": "1080p home security camera with night vision and motion detection.",
    "category": "Home Security",
    "images": [
      "https://img.freepik.com/premium-photo/hand-holding-mobile-connect-with-security-camera_493806-814.jpg",
      "https://m.economictimes.com/thumb/msid-102130529,width-1600,height-900,resizemode-4,imgsize-19898/best-cctv-camera-under-1000-in-india-to-secure-your-home-office.jpg"
    ],
    "seller_info": {
      "name": "SecureHome",
      "rating": 4.8,
      "location": "Portland, USA"
    },
    "price": 129.99
  },
  {
    "id": 64,
    "title": "Portable Power Bank",
    "description": "High-capacity portable power bank with dual USB ports and fast charging.",
    "category": "Electronics",
    "images": [
      "https://d57avc95tvxyg.cloudfront.net/images/detailed/869/10000mah-power-bank-portable-charger-for-o-plus-360-hd-maxbhi-5-1-1.jpg?t=1514262271",
      "https://img.freepik.com/premium-photo/modern-smart-phone-charging-with-help-big-power-bank-using-powerbank-charging-devices-small-power-station-with-multiple-usb-ports-charging-phone_123211-6452.jpg"
    ],
    "seller_info": {
      "name": "PowerPro",
      "rating": 4.7,
      "location": "Denver, USA"
    },
    "price": 39.99
  },
  {
    "id": 65,
    "title": "Smart Water Bottle",
    "description": "Hydration-tracking smart water bottle with LED reminders and app sync.",
    "category": "Fitness",
    "images": [
      "https://hidratespark.com/cdn/shop/articles/20220511_SB_Available-at-Apple_Cover.jpg?v=1690993120&width=2048",
      "https://www.waterh.com/cdn/shop/files/WaterH-Boost.png?v=1713940822"
    ],
    "seller_info": {
      "name": "HydrateTech",
      "rating": 4.6,
      "location": "Austin, USA"
    },
    "price": 24.99
  },
  {
    "id": 66,
    "title": "Outdoor String Lights",
    "description": "Weatherproof outdoor string lights with remote control and multiple lighting modes.",
    "category": "Home Decor",
    "images": [
      "https://hips.hearstapps.com/hmg-prod/images/backyard-string-lights-6-1586290751.jpg?crop=1.00xw:0.334xh;0,0.284xh&resize=640:*",
      "https://parkerlighting.com/wp-content/uploads/2019/11/Vintage-String-Lights-5-27-5-1000x580.jpg"
    ],
    "seller_info": {
      "name": "BrightHome",
      "rating": 4.7,
      "location": "Miami, USA"
    },
    "price": 34.99
  },
  {
    "id": 67,
    "title": "Foam Roller",
    "description": "High-density foam roller for muscle massage and recovery.",
    "category": "Fitness",
    "images": [
      "https://t4.ftcdn.net/jpg/02/59/70/99/360_F_259709983_xtq8LN4gpXcD2hzVIhdwdmHsm1pHyy9m.jpg",
      "https://media.istockphoto.com/id/1194299468/photo/athlete-using-a-foam-roller.jpg?s=612x612&w=0&k=20&c=iS3J8mRk6cBzwGpcDuXrcsH1xrlDuZ27LSDhvgwz64Y="
    ],
    "seller_info": {
      "name": "RecoveryPro",
      "rating": 4.5,
      "location": "San Antonio, USA"
    },
    "price": 19.99
  },
  {
    "id": 68,
    "title": "Wireless Charging Pad",
    "description": "Slim wireless charging pad with fast charging support for multiple devices.",
    "category": "Electronics",
    "images": [
      "https://www.cnet.com/a/img/resize/8dfd582b861be518dcb968d1f1b6de01ef114961/hub/2023/02/28/9da2e9c7-d07d-45cb-89d1-18c7013249e5/anker-315-wireless-charger.png?auto=webp&fit=crop&height=900&width=1200",
      "https://m.media-amazon.com/images/I/61Mab2qhlzL.jpg"
    ],
    "seller_info": {
      "name": "ChargeHub",
      "rating": 4.6,
      "location": "Seattle, USA"
    },
    "price": 29.99
  },
  {
    "id": 69,
    "title": "Instant Pot",
    "description": "Multi-functional instant pot with pressure cooking, slow cooking, and steaming options.",
    "category": "Kitchen Appliances",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2023/09/instant-pot-2048px-2355.jpg",
      "https://t4.ftcdn.net/jpg/03/69/82/87/360_F_369828741_FBYYxvnbuRRDpFXkoa6V2d4FxoRWoTBu.jpg"
    ],
    "seller_info": {
      "name": "CookEase",
      "rating": 4.8,
      "location": "Los Angeles, USA"
    },
    "price": 79.99
  },
  {
    "id": 70,
    "title": "Smart LED Strip Lights",
    "description": "Flexible smart LED strip lights with color-changing options and app control.",
    "category": "Home Decor",
    "images": [
      "https://m.media-amazon.com/images/I/51c4S2cFc7L._AC_UF1000,1000_QL80_.jpg",
      "https://blog.havells.com/wp-content/uploads/2018/11/rsz_highcompress-strip_led_lightv.jpg"
    ],
    "seller_info": {
      "name": "LightWave",
      "rating": 4.7,
      "location": "Portland, USA"
    },
    "price": 49.99
  },
  {
    "id": 71,
    "title": "Electric Kettle",
    "description": "Stainless steel electric kettle with fast boiling and auto shut-off.",
    "category": "Kitchen Appliances",
    "images": [
      "https://sathya.in/media/77309/catalog/71zlLSHbJ-L._SL1500_.jpg",
      "https://t3.ftcdn.net/jpg/03/00/19/80/360_F_300198051_yKssY7MNPhFJDJ5kaf9qpjda1R75blxP.jpg"
    ],
    "seller_info": {
      "name": "BrewMaster",
      "rating": 4.6,
      "location": "New York, USA"
    },
    "price": 29.99
  },
  {
    "id": 72,
    "title": "Electric Toothbrush",
    "description": "Rechargeable electric toothbrush with multiple cleaning modes and a smart timer.",
    "category": "Personal Care",
    "images": [
      "https://img.freepik.com/premium-photo/electric-toothbrush-white-background_543889-176.jpg",
      "https://media.gq-magazine.co.uk/photos/62a20dc2f1a23ef217431be1/4:3/w_1440,h_1080,c_limit/Electricbrush_HP.jpg"
    ],
    "seller_info": {
      "name": "SmileBright",
      "rating": 4.8,
      "location": "San Diego, USA"
    },
    "price": 39.99
  },
  {
    "id": 73,
    "title": "Camping Tent",
    "description": "Spacious camping tent with waterproof coating and easy setup.",
    "category": "Outdoor",
    "images": [
      "https://media.istockphoto.com/id/614333886/photo/illuminated-green-tent-under-stars-at-night-forest.jpg?s=612x612&w=0&k=20&c=82MnAs8eS6LfVwY9zmphCpZdSZHFSoPB6nh07BtZ-oo=",
      "https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?cs=srgb&dl=pexels-josh-hild-1270765-2422265.jpg&fm=jpg"
    ],
    "seller_info": {
      "name": "AdventureGear",
      "rating": 4.7,
      "location": "Salt Lake City, USA"
    },
    "price": 99.99
  },
  {
    "id": 74,
    "title": "Portable Blender",
    "description": "Compact portable blender for smoothies and shakes, USB rechargeable.",
    "category": "Kitchen Appliances",
    "images": [
      "https://m.media-amazon.com/images/I/716iF4+GMfL.jpg",
      "https://reviewed-com-res.cloudinary.com/image/fetch/s--iPy71HVl--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1671227048000/Hero-20221110_PortableBlenderTBRNHeroV2_Renzi.PNG"
    ],
    "seller_info": {
      "name": "BlendMaster",
      "rating": 4.6,
      "location": "Los Angeles, USA"
    },
    "price": 34.99
  },
  {
    "id": 75,
    "title": "Smart Alarm Clock",
    "description": "WiFi-enabled smart alarm clock with sunrise simulation and voice control.",
    "category": "Home Decor",
    "images": [
      "https://m.media-amazon.com/images/I/41lTmDy8ttL._AC_UF894,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/51yFG9GQWSL._AC_UF894,1000_QL80_.jpg"
    ],
    "seller_info": {
      "name": "WakeUp",
      "rating": 4.6,
      "location": "Nashville, USA"
    },
    "price": 59.99
  },
  {
    "id": 76,
    "title": "Handheld Massager",
    "description": "Portable handheld massager with adjustable speed settings and multiple attachments.",
    "category": "Personal Care",
    "images": [
      "https://cdn.shopify.com/s/files/1/0197/1503/1102/files/03_LLM171_Functionality.png?v=1600320613",
      "https://m.media-amazon.com/images/I/51kD2gzrzLL.jpg"
    ],
    "seller_info": {
      "name": "RelaxPro",
      "rating": 4.8,
      "location": "Phoenix, USA"
    },
    "price": 49.99
  },
  {
    "id": 77,
    "title": "Electric Lunch Box",
    "description": "Portable electric lunch box with heating functionality and leak-proof design.",
    "category": "Kitchen Appliances",
    "images": [
      "https://5.imimg.com/data5/SELLER/Default/2021/11/UU/KW/EE/78836313/whatsapp-image-2021-11-18-at-5-06-41-pm-3--500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2023/4/297558753/PH/VE/ZY/33808401/electric-tiffin-box-500x500.jpg"
    ],
    "seller_info": {
      "name": "LunchMaster",
      "rating": 4.7,
      "location": "Los Angeles, USA"
    },
    "price": 29.99
  },
  {
    "id": 78,
    "title": "Smart Home Hub",
    "description": "All-in-one smart home hub with voice assistant and home automation features.",
    "category": "Home Security",
    "images": [
      "https://images.vivintcdn.com/global/Blog%202022/smart-home-hub.jpg",
      "https://s.yimg.com/ny/api/res/1.2/nq44NLmlkIfH82pkJV2IeQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM5Mg--/https://media.zenfs.com/en-US/homerun/engadget_479/601a76422ff43fb74fe227d5959fa2f9"
    ],
    "seller_info": {
      "name": "HomeTech",
      "rating": 4.8,
      "location": "San Francisco, USA"
    },
    "price": 149.99
  },
  {
    "id": 79,
    "title": "Electric Heated Blanket",
    "description": "Plush electric heated blanket with multiple heat settings and auto shut-off.",
    "category": "Home Decor",
    "images": [
      "https://www.beurerindia.com/cdn/shop/files/611P7ncPqRL._SX679.jpg?v=1701413647&width=1445",
      "https://images-cdn.ubuy.co.in/63a999512f89550f7013a6dc-idoo-electric-blanket-throw-10-heating.jpg"
    ],
    "seller_info": {
      "name": "WarmCozy",
      "rating": 4.6,
      "location": "Chicago, USA"
    },
    "price": 69.99
  },
  {
    "id": 80,
    "title": "Wireless Keyboard",
    "description": "Slim wireless keyboard with ergonomic design and long battery life.",
    "category": "Electronics",
    "images": [
      "https://c4.wallpaperflare.com/wallpaper/47/903/816/keyboards-dark-computer-speedlink-wallpaper-preview.jpg",
      "https://www.wallpaperflare.com/static/380/955/669/keyboard-half-close-up-silver-wallpaper.jpg"
    ],
    "seller_info": {
      "name": "TechType",
      "rating": 4.7,
      "location": "Austin, USA"
    },
    "price": 39.99
  },
  {
    "id": 81,
    "title": "Portable Air Conditioner",
    "description": "Compact portable air conditioner with remote control and dehumidifier function.",
    "category": "Home Appliances",
    "images": [
      "https://img.etimg.com/thumb/width-1600,height-900,imgsize-156412,resizemode-75,msid-98293657/top-trending-products/major-appliances/air-conditioners/dont-suffer-through-the-summer-get-a-portable-ac-and-stay-cool-under-15000.jpg",
      "https://c8.alamy.com/comp/B3RXE5/portable-air-conditioning-unit-B3RXE5.jpg"
    ],
    "seller_info": {
      "name": "CoolBreeze",
      "rating": 4.6,
      "location": "Miami, USA"
    },
    "price": 299.99
  },
  {
    "id": 82,
    "title": "Adjustable Laptop Stand",
    "description": "Ergonomic adjustable laptop stand with multiple height settings and cooling fan.",
    "category": "Office Supplies",
    "images": [
      "https://m.media-amazon.com/images/I/61y3OauGiSL._AC_UF1000,1000_QL80_.jpg",
      "https://i.pinimg.com/736x/f2/3c/dc/f23cdce5880add83daee5acb06d9cd4a.jpg"
    ],
    "seller_info": {
      "name": "WorkEase",
      "rating": 4.7,
      "location": "Seattle, USA"
    },
    "price": 39.99
  },
  {
    "id": 83,
    "title": "Smart Garden",
    "description": "Indoor smart garden with automatic watering and LED grow lights.",
    "category": "Home Decor",
    "images": [
      "https://img.freepik.com/premium-photo/smart-garden-sensors-plant-health-automated-care-system-solid-color-background-4k-ultra-hd_964851-117189.jpg",
      "https://www.shutterstock.com/image-photo/agriculture-robotic-autonomous-car-working-260nw-1995250223.jpg"
    ],
    "seller_info": {
      "name": "GreenThumb",
      "rating": 4.8,
      "location": "San Diego, USA"
    },
    "price": 149.99
  },
  {
    "id": 84,
    "title": "Electric Fondue Set",
    "description": "Electric fondue set with temperature control and stainless steel pot.",
    "category": "Kitchen Appliances",
    "images": [
      "https://m.media-amazon.com/images/I/71nkmkup1uL._AC_UF894,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/81tI0Bt9mjL.jpg"
    ],
    "seller_info": {
      "name": "FondueFun",
      "rating": 4.7,
      "location": "New York, USA"
    },
    "price": 49.99
  },
  {
    "id": 85,
    "title": "Smart Door Lock",
    "description": "Bluetooth-enabled smart door lock with keyless entry and mobile app control.",
    "category": "Home Security",
    "images": [
      "https://smartify.in/wp-content/uploads/2019/07/Smart-Door-Lock-FB02.png",
      "https://whitetech.in/wp-content/uploads/2024/01/1-6.png"
    ],
    "seller_info": {
      "name": "SecureHome",
      "rating": 4.8,
      "location": "Portland, USA"
    },
    "price": 129.99
  },
  {
    "id": 86,
    "title": "Portable Blender",
    "description": "Compact portable blender for smoothies and shakes, USB rechargeable.",
    "category": "Kitchen Appliances",
    "images": [
      "https://images-cdn.ubuy.co.in/64d0e978ddc6bb7aaa533607-uezeth-portable-blender-electric.jpg",
      "https://images.meesho.com/images/products/275276014/sshwd_512.webp"
    ],
    "seller_info": {
      "name": "BlendMaster",
      "rating": 4.6,
      "location": "Los Angeles, USA"
    },
    "price": 29.99
  },
  {
    "id": 87,
    "title": "Fitness Resistance Bands",
    "description": "Set of resistance bands for strength training and physical therapy exercises.",
    "category": "Fitness",
    "images": [
      "https://assets.vogue.in/photos/5ce42fb889be368d677d054b/16:9/w_1920,h_1080,c_limit/Resistance-Band-Workouts.jpg",
      "https://images.pexels.com/photos/12859461/pexels-photo-12859461.jpeg?cs=srgb&dl=pexels-marco-cyrus-92391161-12859461.jpg&fm=jpg"
    ],
    "seller_info": {
      "name": "FitGear",
      "rating": 4.7,
      "location": "Miami, USA"
    },
    "price": 19.99
  },
  {
    "id": 88,
    "title": "Smart Thermostat",
    "description": "WiFi-enabled smart thermostat with energy-saving features and mobile app control.",
    "category": "Home Appliances",
    "images": [
      "https://images.ctfassets.net/gztkr1jaynk0/4ZViS3hxJJUjMM4Va52D7P/be84fad941453ff00586ee8040c5714c/install-smart-thermostat.jpg",
      "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnQlMjB0aGVybW9zdGF0fGVufDB8fDB8fHww"
    ],
    "seller_info": {
      "name": "ThermoTech",
      "rating": 4.8,
      "location": "San Francisco, USA"
    },
    "price": 89.99
  },
  {
    "id": 89,
    "title": "Indoor Bike Trainer stand",
    "description": "Indoor bike trainer stand with adjustable resistance for cycling workouts.",
    "category": "Fitness",
    "images": [
      "https://images-cdn.ubuy.co.in/6348cc26da030a4d221ff244-sportneer-fluid-indoor-bike-trainer.jpg",
      "https://m.media-amazon.com/images/I/61mLhpXBarL._AC_UF894,1000_QL80_.jpg"
    ],
    "seller_info": {
      "name": "CycleFit",
      "rating": 4.7,
      "location": "Portland, USA"
    },
    "price": 129.99
  },
  {
    "id": 90,
    "title": "Smart Plug",
    "description": "WiFi smart plug with remote control and energy monitoring capabilities.",
    "category": "Home Automation",
    "images": [
      "https://5.imimg.com/data5/SELLER/Default/2023/10/352300186/YH/FY/DJ/65981574/smartplug-139-500x500.png",
      "https://www.shutterstock.com/image-photo/woman-plugging-device-into-smart-260nw-2152582703.jpg"
    ],
    "seller_info": {
      "name": "PlugTech",
      "rating": 4.6,
      "location": "Seattle, USA"
    },
    "price": 24.99
  },
  {
    "id": 91,
    "title": "Digital Meat Thermometer",
    "description": "Instant-read digital meat thermometer for accurate cooking temperature.",
    "category": "Kitchen Tools",
    "images": [
      "https://assets.epicurious.com/photos/6033f83018c98a36f0d8585f/16:9/w_3923,h_2207,c_limit/Thermometers_HERO_021721_9183_VOG_final.jpg",
      "https://assets.epicurious.com/photos/6169db4e9aab49952062ff16/16:9/w_2560%2Cc_limit/Thermopen_HERO_22250_VOG_test.jpg"
    ],
    "seller_info": {
      "name": "ChefTools",
      "rating": 4.8,
      "location": "New York, USA"
    },
    "price": 19.99
  },
  {
    "id": 92,
    "title": "Smart Scale",
    "description": "Bluetooth smart scale for precise weight and body composition analysis.",
    "category": "Health & Wellness",
    "images": [
      "https://media.cnn.com/api/v1/images/stellar/prod/210114113204-best-smart-scale-lead.jpg?q=x_0,y_0,h_1406,w_2500,c_crop",
      "https://rukminim2.flixcart.com/image/850/1000/k5wse4w0/weighing-scale/a/c/x/smart-health-scale-hs11-lenovo-original-imafzhfd3zzppwyy.jpeg?q=20&crop=false"
    ],
    "seller_info": {
      "name": "BodyTech",
      "rating": 4.7,
      "location": "Chicago, USA"
    },
    "price": 49.99
  },
  {
    "id": 93,
    "title": "Robotic Vacuum Cleaner",
    "description": "Intelligent robotic vacuum cleaner with mapping technology and self-charging.",
    "category": "Home Appliances",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQegi2wsOcQCLt8w3B7nisUZptyoTAwetU-A&s",
      "https://img.freepik.com/free-photo/robot-vacuum-cleaning-floor_23-2151319059.jpg"
    ],
    "seller_info": {
      "name": "CleanBot",
      "rating": 4.8,
      "location": "San Francisco, USA"
    },
    "price": 299.99
  },
  {
    "id": 94,
    "title": "Electric Wine Opener",
    "description": "Automatic electric wine opener with rechargeable battery and foil cutter.",
    "category": "Kitchen Appliances",
    "images": [
      "https://m.media-amazon.com/images/I/71SFRaT4QgL._AC_UF894,1000_QL80_.jpg",
      "https://rukminim2.flixcart.com/image/850/1000/l2z26q80/bottle-opener/r/r/c/wos15af-deoxys-original-image6y7pjgndusc.jpeg?q=90&crop=false"
    ],
    "seller_info": {
      "name": "WineMaster",
      "rating": 4.6,
      "location": "Los Angeles, USA"
    },
    "price": 19.99
  },
  {
    "id": 95,
    "title": "WiFi Range Extender",
    "description": "Dual-band WiFi range extender for extending wireless coverage in home or office.",
    "category": "Electronics",
    "images": [
      "https://m.media-amazon.com/images/I/51GqW5try+L.jpg",
      "https://m.media-amazon.com/images/I/61dFL4O3l4L.jpg"
    ],
    "seller_info": {
      "name": "NetBoost",
      "rating": 4.7,
      "location": "Austin, USA"
    },
    "price": 59.99
  },
  {
    "id": 96,
    "title": "Noise Cancelling Headphones",
    "description": "Wireless noise cancelling headphones with high-fidelity sound and long battery life.",
    "category": "Electronics",
    "images": [
      "https://static.vecteezy.com/system/resources/thumbnails/022/337/218/small_2x/neon-headphones-illustration-ai-generative-free-photo.jpg",
      "https://w0.peakpx.com/wallpaper/946/11/HD-wallpaper-music-headphones-music.jpg"
    ],
    "seller_info": {
      "name": "SoundWave",
      "rating": 4.8,
      "location": "New York, USA"
    },
    "price": 149.99
  },
  {
    "id": 97,
    "title": "Smart Refrigerator",
    "description": "Smart refrigerator with WiFi connectivity, touch screen display, and energy-saving mode.",
    "category": "Home Appliances",
    "images": [
      "https://t4.ftcdn.net/jpg/05/69/33/69/360_F_569336933_LlrRcXmf1sFFTzQGMRjJXNz3T5vuOFcD.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiLYdVWd971-lRMKqod1E6IDrebSQKXmey1Q&s"
    ],
    "seller_info": {
      "name": "CoolTech",
      "rating": 4.7,
      "location": "Los Angeles, USA"
    },
    "price": 1499.99
  },
  {
    "id": 98,
    "title": "Electric Hand Washer",
    "description": "High-powered electric pressure washer for cleaning driveways, decks, and patios.",
    "category": "Outdoor",
    "images": [
      "https://ae01.alicdn.com/kf/H508de083a2614998b69236891af3f79eA/Electric-Intelligent-Automatic-Liquid-Soap-Dispenser-Hanging-Induction-Foaming-Hand-Washing-Device-Kitchen-Bathroom-Hand-Washer.jpg",
      "https://media.wired.com/photos/5e6155ec13b68000088850d3/master/pass/Ideas-Hand-Dryer-184693017.jpg"
    ],
    "seller_info": {
      "name": "CleanForce",
      "rating": 4.6,
      "location": "Chicago, USA"
    },
    "price": 199.99
  },
  {
    "id": 99,
    "title": "Smart Light Bulbs",
    "description": "Set of smart light bulbs with color-changing options and voice control compatibility.",
    "category": "Home Automation",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2024/02/smartledlightbulbs-2048px-07781-3x2-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
      "https://syska.co.in/blog/wp-content/uploads/2023/07/Syska_Smart_Lights.jpeg"
    ],
    "seller_info": {
      "name": "BrightHome",
      "rating": 4.7,
      "location": "San Francisco, USA"
    },
    "price": 39.99
  },
  {
    "id": 100,
    "title": "Portable Jump Starter",
    "description": "Compact portable jump starter for cars with built-in flashlight and USB ports.",
    "category": "Automotive",
    "images": [
      "https://m.media-amazon.com/images/I/71+HOpdptjL._AC_UF1000,1000_QL80_.jpg",
      "https://images-cdn.ubuy.co.in/649d09fdc559e000ae237114-avapow-car-battery-jump-starter-3000a.jpg"
    ],
    "seller_info": {
      "name": "JumpStart",
      "rating": 4.8,
      "location": "Austin, USA"
    },
    "price": 79.99
  },
  {
    "id": 101,
    "title": "Smart Pet Feeder",
    "description": "Automatic smart pet feeder with programmable feeding schedules and portion control.",
    "category": "Pet Supplies",
    "images": [
      "https://images-cdn.ubuy.co.in/63549dabaa9abb4968199526-automatic-dog-feeder-with-hd-camera.jpg",
      "https://images-cdn.ubuy.co.in/63400a7c144f9c2110640d36-automatic-cat-feeder-6l-wifi-smart-dog.jpg"
    ],
    "seller_info": {
      "name": "PetCare",
      "rating": 4.7,
      "location": "Seattle, USA"
    },
    "price": 79.99
  },
  {
    "id": 102,
    "title": "Electric Skillet",
    "description": "Non-stick electric skillet with adjustable temperature control and tempered glass lid.",
    "category": "Kitchen Appliances",
    "images": [
      "https://m.media-amazon.com/images/I/61AkzZYnN9L._AC_UF894,1000_QL80_.jpg",
      "https://saladmaster.com/DesktopModules/Revindex.Dnn.RevindexStorefront/Portals/1/Gallery/f8b8f8c2-47fd-4138-8445-7b560860c88b.jpg"
    ],
    "seller_info": {
      "name": "SkilletPro",
      "rating": 4.6,
      "location": "Miami, USA"
    },
    "price": 49.95
  },
  {
    "id": 103,
    "title": "4K Action Camera",
    "description": "Waterproof 4K action camera with wide-angle lens and built-in WiFi.",
    "category": "Electronics",
    "images": [
      "https://rukminim2.flixcart.com/image/850/1000/kkmwr680/sports-action-camera/2/z/9/4k-ultra-hd-16-mp-wifi-waterproof-action-camera-4k-camera-12-4k-original-imafa5mpcpmqzv6k.jpeg?q=90&crop=false",
      "https://m.media-amazon.com/images/I/71Nx9ta-mpL._AC_UF1000,1000_QL80_.jpg"
    ],
    "seller_info": {
      "name": "ActionCam",
      "rating": 4.8,
      "location": "Portland, USA"
    },
    "price": 159.99
  },
  {
    "id": 104,
    "title": "Digital Air Fryer",
    "description": "Large capacity digital air fryer with multiple cooking presets and non-stick basket.",
    "category": "Kitchen Appliances",
    "images": [
      "https://www.hestiaappliances.com/cdn/shop/products/436632504-aero-smart-technology_1024x1024.jpg?v=1674543709",
      "https://cdn.staticans.com/image/tr:e-sharpen-01,h-1000,w-1000,cm-pad_resize/data/philips/06feb2024/HD9270_3.png"
    ],
    "seller_info": {
      "name": "FryMaster",
      "rating": 4.7,
      "location": "Nashville, USA"
    },
    "price": 89.95
  },
  {
    "id": 105,
    "title": "Cordless Electric Screwdriver",
    "description": "Rechargeable cordless electric screwdriver with LED light and multiple bits.",
    "category": "Tools & Home Improvement",
    "images": [
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/screwdriver-set/7/m/k/1-electric-screwdriver-pagaly-original-imagyafwz3g7egy6.jpeg?q=90&crop=false",
      "https://www.dremel.com/imagestorage/en-us/hses-01-209522-png-16-9-244703_w_1920_h_1080.png"
    ],
    "seller_info": {
      "name": "ToolMaster",
      "rating": 4.6,
      "location": "Phoenix, USA"
    },
    "price": 39.99
  },
  {
    "id": 106,
    "title": "Wireless Earbuds",
    "description": "True wireless earbuds with noise cancellation and long battery life.",
    "category": "Electronics",
    "images": [
      "https://image.made-in-china.com/202f0j00IOuoKhfWYQbg/Yx27-Anc-Wireless-Earphone-HD-Stereo-Tws-Wireless-Earbuds-Touch-Screen-in-Ear.webp",
      "https://blaupunktaudio.in/cdn/shop/products/btw300-true-wireless-enc-earbuds-bk-blaupunkt-india-1.png?v=1710491573"
    ],
    "seller_info": {
      "name": "SoundPro",
      "rating": 4.7,
      "location": "Los Angeles, USA"
    },
    "price": 129.99
  },
  {
    "id": 107,
    "title": "Smart Doorbell",
    "description": "Video doorbell with HD camera, motion detection, and two-way audio.",
    "category": "Home Security",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB7xfUHOUzyXcg4UkaN-ZyjCNXiPZ5LRvX1w&s",
      "https://5.imimg.com/data5/SELLER/Default/2023/8/335120742/WA/EP/VW/80139830/wifi-wireless-full-hd-smart-video-doorbell-with-two-way-talk-pir-detection-night-vision.jpg"
    ],
    "seller_info": {
      "name": "SecureVision",
      "rating": 4.8,
      "location": "New York, USA"
    },
    "price": 199.95
  },
  {
    "id": 108,
    "title": "Portable Solar Charger",
    "description": "Foldable solar charger for mobile devices, ideal for outdoor activities.",
    "category": "Outdoor",
    "images": [
      "https://c8.alamy.com/comp/D5R6W4/mobile-phone-solar-powered-battery-charger-D5R6W4.jpg",
      "https://img.freepik.com/free-vector/powerbank-battery-charger-realistic-concept-with-mobile-phone-charging-vector-illustration_1284-81781.jpg"
    ],
    "seller_info": {
      "name": "SunPower",
      "rating": 4.6,
      "location": "San Francisco, USA"
    },
    "price": 49.99
  },
  {
    "id": 109,
    "title": "Electric Toothbrush",
    "description": "Rechargeable electric toothbrush with multiple brushing modes and smart timer.",
    "category": "Personal Care",
    "images": [
      "https://media.gq-magazine.co.uk/photos/654b845644d636daedc00006/16:9/w_2560%2Cc_limit/OralB_0001.jpg",
      "https://img.beatxp.com/prod/product/272/2%20%282%29.webp"
    ],
    "seller_info": {
      "name": "OralTech",
      "rating": 4.7,
      "location": "Miami, USA"
    },
    "price": 79.95
  },
  {
    "id": 110,
    "title": "Adjustable Dumbbells",
    "description": "Set of adjustable dumbbells with quick weight adjustment and ergonomic handle.",
    "category": "Fitness",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2023/05/adjustable-dumbbell-2048px-9393-3x2-1.jpg",
      "https://www.cnet.com/a/img/resize/7a51a712dc6c753875278954fecd2345c2635492/hub/2022/04/01/69fb55c3-e79a-4940-95bc-20900b366ef7/core-best-adjustable-dumbbells-2022-1205.jpg?auto=webp&fit=crop&height=360&width=640"
    ],
    "seller_info": {
      "name": "FitGear",
      "rating": 4.8,
      "location": "Chicago, USA"
    },
    "price": 149.99
  },
  {
    "id": 111,
    "title": "Smart Air Purifier",
    "description": "HEPA air purifier with smart sensors and mobile app control.",
    "category": "Home Appliances",
    "images": [
      "https://images.gizbot.com/img/2022/03/amazon-sale-best-smart-air-purifier-devices-with-wi-fi-connectivity-1647836843.jpg",
      "https://images.macrumors.com/t/LN7lN2Pv_063FD2Ycm3zE7j3Omg=/2400x/article-new/2022/07/meross-smart-air-purifier-.jpeg"
    ],
    "seller_info": {
      "name": "PureAir",
      "rating": 4.7,
      "location": "Seattle, USA"
    },
    "price": 199.99
  },
  {
    "id": 112,
    "title": "Smart Light Switch",
    "description": "WiFi-enabled smart light switch with touch control and voice assistant compatibility.",
    "category": "Home Automation",
    "images": [
      "https://images.squarespace-cdn.com/content/v1/56b2abf8746fb90a22938c61/1463117835238-EZQPU2YDBLUUG2ETIV1I/Rectangle+smart+home+2+gang+wifi+switch+%284%29.png",
      "https://www.techhive.com/wp-content/uploads/2024/06/smart-switch-hub-art-100854074-orig-1.jpg?quality=50&strip=all"
    ],
    "seller_info": {
      "name": "BrightHome",
      "rating": 4.6,
      "location": "Austin, USA"
    },
    "price": 29.95
  },
  {
    "id": 113,
    "title": "Portable Espresso Maker",
    "description": "Compact portable espresso maker for coffee on the go, manual operation.",
    "category": "Kitchen Appliances",
    "images": [
      "https://www.coffeenirvana.co.in/cdn/shop/products/wacaco-GR_600x_885ca57c-24a1-4184-a93b-e6641ec8e84b.jpg?v=1637403966",
      "https://m.media-amazon.com/images/I/71q1Lks69CL.jpg"
    ],
    "seller_info": {
      "name": "EspressoGo",
      "rating": 4.7,
      "location": "San Diego, USA"
    },
    "price": 49.99
  },
  {
    "id": 114,
    "title": "Electric Kettle",
    "description": "Stainless steel electric kettle with temperature control and fast boiling.",
    "category": "Kitchen Appliances",
    "images": [
      "https://kannankandyestore.com/wp-content/uploads/2024/02/Hafele-Kettle-5-scaled.jpg",
      "https://myborosil.com/cdn/shop/files/my-borosil-electric-kettles-borosil-cooltouch-electric-kettle-brown-1-8l-33317481775242.jpg?v=1702384348"
    ],
    "seller_info": {
      "name": "KettlePro",
      "rating": 4.8,
      "location": "Portland, USA"
    },
    "price": 34.99
  },
  {
    "id": 115,
    "title": "Bluetooth Speaker",
    "description": "Portable Bluetooth speaker with high-quality sound and waterproof design.",
    "category": "Electronics",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIuduwMeE6Gasyub3hzJVkgTHPjURv8XbVWQ&s",
      "https://www.portronics.com/cdn/shop/files/Resound21500x1500Black1.jpg?v=1690176596"
    ],
    "seller_info": {
      "name": "SoundWave",
      "rating": 4.7,
      "location": "Nashville, USA"
    },
    "price": 79.99
  },
  {
    "id": 116,
    "title": "Smart Plug",
    "description": "WiFi smart plug with remote control and energy monitoring capabilities.",
    "category": "Home Automation",
    "images": [
      "https://external-preview.redd.it/FqJAyzHznUG3E_nwAqdrebNDIZkUUM15J12aTUQB200.jpg?auto=webp&s=b2bbcbc02d60f32788ebf720613785e7240e9223",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/9b4258f7-c5cf-4a8d-89ea-b7b415d4f4e3.__CR0,0,1940,1200_PT0_SX970_V1___.jpg"
    ],
    "seller_info": {
      "name": "PlugTech",
      "rating": 4.6,
      "location": "Seattle, USA"
    },
    "price": 19.95
  },
  {
    "id": 117,
    "title": "Portable Power Bank",
    "description": "High-capacity portable power bank with fast charging and multiple ports.",
    "category": "Electronics",
    "images": [
      "https://t3.ftcdn.net/jpg/01/25/32/58/360_F_125325890_g9kwakz9vP3OlsMZtl257MJkKWtw7Iyd.jpg",
      "https://cdshoptelecom.in/wp-content/uploads/2022/08/Ubon-PBX17-Power-Bank.webp"
    ],
    "seller_info": {
      "name": "ChargePro",
      "rating": 4.7,
      "location": "Phoenix, USA"
    },
    "price": 39.99
  },
  {
    "id": 118,
    "title": "Smart Thermostat",
    "description": "WiFi-enabled smart thermostat with energy-saving features and mobile app control.",
    "category": "Home Appliances",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4mfKm8m6ZPIqY73EFRbFun9KtTJKf0hipuA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUs8RjNaGV6eVtdvwQtCJIir3b9rFezWJ6OA&s"
    ],
    "seller_info": {
      "name": "ThermoTech",
      "rating": 4.8,
      "location": "San Francisco, USA"
    },
    "price": 129.95
  },
  {
    "id": 119,
    "title": "Robot Vacuum Cleaner",
    "description": "Smart robot vacuum cleaner with mapping technology and self-charging capabilities.",
    "category": "Home Appliances",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQzvDJGTlx-rcpuYYGya0qMv8Pp_bupr7KUQ&s",
      "https://m.media-amazon.com/images/I/71aos-XaTaL._AC_UF350,350_QL80_.jpg"
    ],
    "seller_info": {
      "name": "CleanBot",
      "rating": 4.7,
      "location": "Los Angeles, USA"
    },
    "price": 299.99
  },
  {
    "id": 120,
    "title": "Electric Pressure Cooker",
    "description": "Multi-functional electric pressure cooker with preset cooking modes.",
    "category": "Kitchen Appliances",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCPuq0Tm79YXyhVoNcg4LmejzR55inhfoYw&s",
      "https://www.shutterstock.com/image-photo/stainless-steel-pressure-cooker-kitchen-260nw-1941364471.jpg"
    ],
    "seller_info": {
      "name": "CookMaster",
      "rating": 4.6,
      "location": "Austin, USA"
    },
    "price": 69.99
  },
  {
    "id": 121,
    "title": "Electric Lawn Mower",
    "description": "Cordless electric lawn mower with adjustable cutting height and foldable handle.",
    "category": "Outdoor",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiT2DvLagksSoznbw18N7ezqut00AcNDomyQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoVUbjHO5PJUJXetGPciSYTtnaL-vuyGCC2w&s"
    ],
    "seller_info": {
      "name": "GreenMow",
      "rating": 4.7,
      "location": "Denver, USA"
    },
    "price": 249.95
  },
  {
    "id": 122,
    "title": "Smart Watch",
    "description": "Fitness tracker smart watch with heart rate monitor, GPS, and multiple sport modes.",
    "category": "Electronics",
    "images": [
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw90eec861/images/Fastrack/Catalog/38103AM02_6.jpg?sw=800&sh=800",
      "https://img.joomcdn.net/5468613901fe8f4257ea962ffc926ab1263245fd_1024_1024.jpeg"
    ],
    "seller_info": {
      "name": "FitTime",
      "rating": 4.8,
      "location": "San Jose, USA"
    },
    "price": 199.99
  },
  {
    "id": 123,
    "title": "Cordless Vacuum Cleaner",
    "description": "Lightweight cordless vacuum cleaner with powerful suction and HEPA filtration.",
    "category": "Home Appliances",
    "images": [
      "https://media.istockphoto.com/id/1361742888/photo/oman-cleaning-floor-and-carpet-with-cordless-vacuum-cleaner-at-home.jpg?s=612x612&w=0&k=20&c=wmSR4XaldzUw0Z6p6aIj3SEItHIBzDGCx5jOQOgiiXI=",
      "https://images-cdn.ubuy.co.in/667bbaf78ca54d5f7c0a9e54-cordless-vacuum-cleaner-500w-40kpa.jpg"
    ],
    "seller_info": {
      "name": "VacPro",
      "rating": 4.7,
      "location": "Chicago, USA"
    },
    "price": 149.99
  },
  {
    "id": 124,
    "title": "Wireless Charging Pad",
    "description": "Fast wireless charging pad compatible with multiple devices and safety features.",
    "category": "Electronics",
    "images": [
      "https://www.shutterstock.com/image-photo/charging-mobile-phone-battery-wireless-260nw-2245972273.jpg",
      "https://media.wired.com/photos/61d8c4f3f927e3da65e9641f/3:2/w_2400,h_1600,c_limit/Gear_GuRu_black%20halo.jpg"
    ],
    "seller_info": {
      "name": "ChargeMax",
      "rating": 4.6,
      "location": "Dallas, USA"
    },
    "price": 29.99
  },
  {
    "id": 125,
    "title": "Smart Home Hub",
    "description": "Central smart home hub for controlling various smart devices with voice commands.",
    "category": "Home Automation",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWv6WvYO81M56ethhrt7UrXeUzVFpUXre9SQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fOQxASfQYoHmI8bXOcQWexYt4Ntm2imwiw&s"
    ],
    "seller_info": {
      "name": "HomeControl",
      "rating": 4.8,
      "location": "New York, USA"
    },
    "price": 149.95
  },
  {
    "id": 126,
    "title": "Electric Grill",
    "description": "Indoor electric grill with non-stick surface and adjustable temperature control.",
    "category": "Kitchen Appliances",
    "images": [
      "https://media.istockphoto.com/id/483893736/photo/tasty-chicken-steaks-on-the-contact-electric-grill.jpg?s=612x612&w=0&k=20&c=Q8rStd3DAh7FVPvyR2OD-PeBMlSKzKyImZJwv8szlr0=",
      "https://rukminim2.flixcart.com/image/850/1000/ktrk13k0/barbecue-grill/x/g/r/yes-2000-watt-chrome-steel-electric-barbecue-grill-electric-nh-original-imag7fkyjwtzdyws.jpeg?q=90&crop=false"
    ],
    "seller_info": {
      "name": "GrillMaster",
      "rating": 4.7,
      "location": "Miami, USA"
    },
    "price": 69.99
  },
  {
    "id": 127,
    "title": "Fitness Tracker",
    "description": "Waterproof fitness tracker with sleep monitoring, step counter, and heart rate tracking.",
    "category": "Health & Wellness",
    "images": [
      "https://img.mensxp.com/media/content/2022/Dec/iStock-477135432_639037a2f3c83.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlZCcLtkueVr9JZoE0YcEM6jjKAkwTuIfiBQ&s"
    ],
    "seller_info": {
      "name": "HealthTrack",
      "rating": 4.6,
      "location": "Los Angeles, USA"
    },
    "price": 49.99
  },
  {
    "id": 128,
    "title": "Portable Air Conditioner",
    "description": "Compact portable air conditioner with remote control and multiple cooling modes.",
    "category": "Home Appliances",
    "images": [
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2023_08/3595863/230223-portable-ac-units-vl-2x1.jpg",
      "https://thumbs.dreamstime.com/b/modern-portable-air-cooler-isolated-transparent-background-high-resolution-image-freestanding-digital-panel-checkered-321462697.jpg"
    ],
    "seller_info": {
      "name": "CoolBreeze",
      "rating": 4.7,
      "location": "San Diego, USA"
    },
    "price": 249.99
  },
  {
    "id": 129,
    "title": "3D Printer",
    "description": "High-precision 3D printer with auto-leveling and multiple filament compatibility.",
    "category": "Electronics",
    "images": [
      "https://img.freepik.com/free-photo/technology-equipment-blue-laboratory-generated-by-ai_188544-19546.jpg",
      "https://images.unsplash.com/photo-1611117775350-ac3950990985?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8M2QlMjBwcmludGVyfGVufDB8fDB8fHww"
    ],
    "seller_info": {
      "name": "PrintTech",
      "rating": 4.8,
      "location": "San Francisco, USA"
    },
    "price": 399.99
  },
  {
    "id": 130,
    "title": "Wireless Keyboard and Mouse",
    "description": "Ergonomic wireless keyboard and mouse combo with long battery life.",
    "category": "Computers",
    "images": [
      "https://m.media-amazon.com/images/I/71gR-IwIv-L.jpg",
      "https://megacompuworldjaipur.com/image/cache/catalog/Product/KM%20Combo/H%20p/KM200%20COMBO%20BOX-700x550.jpg"
    ],
    "seller_info": {
      "name": "TechGear",
      "rating": 4.7,
      "location": "Chicago, USA"
    },
    "price": 34.99
  },
  {
    "id": 131,
    "title": "Digital Photo Frame",
    "description": "WiFi digital photo frame with high-resolution display and mobile app control.",
    "category": "Home Decor",
    "images": [
      "https://m.media-amazon.com/images/I/71uvtaB+YnL._AC_UF1000,1000_QL80_.jpg",
      "https://images-cdn.ubuy.co.in/63a26663af01e23af965f913-bwjbsw-digital-picture-frame-10-1-inch.jpg"
    ],
    "seller_info": {
      "name": "FramePro",
      "rating": 4.6,
      "location": "Boston, USA"
    },
    "price": 79.99
  },
  {
    "id": 132,
    "title": "Portable Bluetooth Speaker",
    "description": "Waterproof portable Bluetooth speaker with 360-degree sound and long battery life.",
    "category": "Electronics",
    "images": [
      "https://assets.ajio.com/medias/sys_master/root/20230208/3JsJ/63e3c976aeb26924e361042a/-473Wx593H-4927969160-multi-MODEL3.jpg",
      "https://www.jiomart.com/images/product/original/rvdhrgmiby/drumstone-best-mini-portable-bluetooth-speaker-i-smallest-bluetooth-speaker-with-hd-sound-bass-for-phone-pc-tablet-i-photo-selfie-button-answer-phone-calls-i-cute-tiny-speaker-product-images-orvdhrgmiby-p594704174-2-202210202140.png?im=Resize=(420,420)"
    ],
    "seller_info": {
      "name": "SoundWave",
      "rating": 4.7,
      "location": "Seattle, USA"
    },
    "price": 59.99
  },
  {
    "id": 133,
    "title": "Smart LED Strip Lights",
    "description": "Color-changing LED strip lights with remote control and music sync feature.",
    "category": "Home Decor",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_SIVRgoHonzNoqFNhIy7Wsa1bj4ElxeXrjg&s",
      "https://www.led-lighthouse.co.uk/wp-content/uploads/2022/07/RGB-full-range-12v-300x300.jpg.webp"
    ],
    "seller_info": {
      "name": "LightWave",
      "rating": 4.8,
      "location": "New York, USA"
    },
    "price": 29.99
  },
  {
    "id": 134,
    "title": "Electric Stand Mixer",
    "description": "High-performance electric stand mixer with multiple attachments and speeds.",
    "category": "Kitchen Appliances",
    "images": [
      "https://media.istockphoto.com/id/528066480/photo/red-stand-mixer-mixing-cream.jpg?s=612x612&w=0&k=20&c=pvDLhvwtyMi9lvbikDppNZy86O8SxhjTFFW2jrmLsPU=",
      "https://m.media-amazon.com/images/I/61twP11RdbL._AC_UF894,1000_QL80_.jpg"
    ],
    "seller_info": {
      "name": "MixMaster",
      "rating": 4.7,
      "location": "Los Angeles, USA"
    },
    "price": 129.99
  },
  {
    "id": 135,
    "title": "Digital Alarm Clock",
    "description": "Modern digital alarm clock with dual alarms, USB charging ports, and night light.",
    "category": "Home Decor",
    "images": [
      "https://i.ytimg.com/vi/tgsopNao298/maxresdefault.jpg",
      "https://images-cdn.ubuy.co.in/641fba29e298e9776b2464f7-digital-clock-large-display-alarm-clock.jpg"
    ],
    "seller_info": {
      "name": "TimeKeeper",
      "rating": 4.6,
      "location": "Miami, USA"
    },
    "price": 19.99
  },
  {
    "id": 136,
    "title": "Portable Projector",
    "description": "Compact portable projector with HD resolution and built-in speaker.",
    "category": "Electronics",
    "images": [
      "https://m.media-amazon.com/images/I/71b8Mxo2INL.jpg",
      "https://cdn.mos.cms.futurecdn.net/Jm4w2PrakZSGnuFjXvrAA8-1200-80.jpg"
    ],
    "seller_info": {
      "name": "ProjectorPro",
      "rating": 4.7,
      "location": "Austin, USA"
    },
    "price": 199.99
  },
  {
    "id": 137,
    "title": "Electric Shaver",
    "description": "Rechargeable electric shaver with precision blades and wet/dry functionality.",
    "category": "Personal Care",
    "images": [
      "https://t4.ftcdn.net/jpg/03/10/99/79/360_F_310997939_d7AmSLJmkz6ucYenzLsvCKJgBRa569RZ.jpg",
      "https://m.media-amazon.com/images/I/71K6HcFcySL._UF1000,1000_QL80_.jpg"
    ],
    "seller_info": {
      "name": "ShaveTech",
      "rating": 4.8,
      "location": "San Francisco, USA"
    },
    "price": 49.99
  },
  {
    "id": 138,
    "title": "Smart Door Lock",
    "description": "Keyless smart door lock with fingerprint recognition and mobile app control.",
    "category": "Home Security",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtTG3fGOXrg3s-Nz2GaAKwhtJfEsQ0eplVKA&s",
      "https://t4.ftcdn.net/jpg/03/08/96/47/360_F_308964740_vNktsZc1pZwsKVSzQQYAxXizHziKhdxS.jpg"
    ],
    "seller_info": {
      "name": "SecureHome",
      "rating": 4.7,
      "location": "New York, USA"
    },
    "price": 149.99
  },
  {
    "id": 139,
    "title": "Wireless Mouse",
    "description": "Ergonomic wireless mouse with adjustable DPI and silent clicks.",
    "category": "Computers",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy07POariUS_fDDZwNo4h0qzTnRc8nsC8LBA&s",
      "https://e0.pxfuel.com/wallpapers/271/717/desktop-wallpaper-logitech-launches-a-wireless-version-of-its-popular-g502-gaming-mouse-thumbnail.jpg"
    ],
    "seller_info": {
      "name": "TechGear",
      "rating": 4.6,
      "location": "Chicago, USA"
    },
    "price": 19.99
  },
  {
    "id": 140,
    "title": "Electric Blanket",
    "description": "Soft electric blanket with adjustable heat settings and auto shut-off feature.",
    "category": "Home Decor",
    "images": [
      "https://img.freepik.com/free-photo/young-woman-working-from-home_23-2149187593.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_iM9l-vrKB14gelvNKLiU93eDmQM7FbSvxQ&s"
    ],
    "seller_info": {
      "name": "WarmComfort",
      "rating": 4.8,
      "location": "Boston, USA"
    },
    "price": 79.99
  },
  {
    "id": 141,
    "title": "Noise Cancelling Headphones",
    "description": "Over-ear noise cancelling headphones with high-fidelity sound and long battery life.",
    "category": "Electronics",
    "images": [
      "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/products/headphones/dyson-zone/overview/features/571-PDP-Feature-Female-LookingLeft-AudioOnly-05b_M2.jpg?$responsive$&cropPathE=desktop&fit=stretch,1&wid=1920",
      "https://www.shutterstock.com/image-photo/black-headphones-on-matte-background-260nw-1683931528.jpg"
    ],
    "seller_info": {
      "name": "AudioTech",
      "rating": 4.7,
      "location": "San Francisco, USA"
    },
    "price": 129.99
  },
  {
    "id": 142,
    "title": "Smart Refrigerator",
    "description": "WiFi-enabled smart refrigerator with touch screen control and energy-saving features.",
    "category": "Home Appliances",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSG3svDdpPilZVXna1IOmwuqzzegAquQ0X9g&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpqYJW0p8_84e5C63qxBTkmmobPKEeseKYA&s"
    ],
    "seller_info": {
      "name": "FridgeTech",
      "rating": 4.8,
      "location": "Los Angeles, USA"
    },
    "price": 1799.99
  },
  {
    "id": 143,
    "title": "Automatic Pet Feeder",
    "description": "Smart automatic pet feeder with portion control and scheduled feeding times.",
    "category": "Pet Supplies",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhvKiTBoy2ZA6TI7ws9Kkhe8Y3tTKlqy72Dg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQWYM4_BbMIEBt3Lr5kyjg-k2qeOct6ipyA&s"
    ],
    "seller_info": {
      "name": "PetCare",
      "rating": 4.6,
      "location": "Austin, USA"
    },
    "price": 59.99
  },
  {
    "id": 144,
    "title": "Digital Drawing Tablet",
    "description": "High-resolution digital drawing tablet with stylus and customizable shortcut keys.",
    "category": "Electronics",
    "images": [
      "https://www.lifewire.com/thmb/oEAVuLWQ3Qmrn7ouquU2qrnaNfE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4LW4141661-05-c8d3a4a9df2f4b8487519784da6f8749.jpg",
      "https://m.media-amazon.com/images/I/712KXxR0yxL._AC_UF1000,1000_QL80_.jpg"
    ],
    "seller_info": {
      "name": "ArtPro",
      "rating": 4.7,
      "location": "New York, USA"
    },
    "price": 199.99
  },
  {
    "id": 145,
    "title": "Cordless Hair Clippers",
    "description": "Professional-grade cordless hair clippers with adjustable length settings.",
    "category": "Personal Care",
    "images": [
      "https://m.media-amazon.com/images/I/818O55SymNL.jpg",
      "https://images-cdn.ubuy.co.in/633bab6b7189533101106f64-cordless-hair-clippers-haircut-machine.jpg"
    ],
    "seller_info": {
      "name": "ClipMaster",
      "rating": 4.8,
      "location": "Chicago, USA"
    },
    "price": 39.99
  },
  {
    "id": 146,
    "title": "Electric Skateboard",
    "description": "High-speed electric skateboard with remote control and long-lasting battery.",
    "category": "Outdoor",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREyqio-lKHkTByZx-5TQTaJtxrPVgj4QRD7A&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5UAQ447ijo9hO3pcNYdUMCFBRTGJeXFY5Tg&s"
    ],
    "seller_info": {
      "name": "SkateTech",
      "rating": 4.7,
      "location": "San Diego, USA"
    },
    "price": 299.99
  },
  {
    "id": 147,
    "title": "Smart Coffee Maker",
    "description": "WiFi-enabled smart coffee maker with programmable settings and app control.",
    "category": "Kitchen Appliances",
    "images": [
      "https://www.crosscraft.com.mt/wp-content/uploads/2021/12/Melitta-Barista-T-Smart-Coffee-Machine-676141-App-Controlled.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2021/10/RR/QX/PL/105829541/nescafe-e-smart-coffee-maker-machine-travel-mug-500x500.jpg"
    ],
    "seller_info": {
      "name": "CoffeeTech",
      "rating": 4.6,
      "location": "Miami, USA"
    },
    "price": 89.99
  },
  {
    "id": 148,
    "title": "Wireless Charging Stand",
    "description": "Fast wireless charging stand compatible with multiple devices and safety features.",
    "category": "Electronics",
    "images": [
      "https://m.media-amazon.com/images/I/71ZwtsDEtqL._AC_UF1000,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/71YAXw3E7WL.jpg"
    ],
    "seller_info": {
      "name": "ChargePro",
      "rating": 4.8,
      "location": "Phoenix, USA"
    },
    "price": 39.99
  },
  {
    "id": 149,
    "title": "Smart Mirror",
    "description": "Smart mirror with built-in lighting, touch screen, and virtual assistant integration.",
    "category": "Home Decor",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWC-5ReQkNQaslMNxpW2jIt0Vpk7HJ22lu9w&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKSZGNz_oWDoOLjPSXIlds9elDqwRLccdkRw&s"
    ],
    "seller_info": {
      "name": "MirrorTech",
      "rating": 4.7,
      "location": "Seattle, USA"
    },
    "price": 299.99
  },
  {
    "id": 150,
    "title": "Electric Bike",
    "description": "High-performance electric bike with pedal assist, removable battery, and LCD display.",
    "category": "Outdoor",
    "images": [
      "https://images.news18.com/ibnlive/uploads/2022/11/feature-image-8-2-16694443564x3.jpg?impolicy=website&width=640&height=480",
      "https://bd.gaadicdn.com/processedimages/oben/oben-electric-bike/494X300/oben-electric-bike65f15882812e4.jpg?imwidth=880"
    ],
    "seller_info": {
      "name": "BikeTech",
      "rating": 4.8,
      "location": "Portland, USA"
    },
    "price": 1499.99
  },
  {
    "id": 151,
    "title": "Smart Fitness Scale",
    "description": "Bluetooth smart fitness scale with body composition analysis and mobile app integration.",
    "category": "Health & Wellness",
    "images": [
      "https://m.media-amazon.com/images/I/716DXY7PjrL.jpg",
      "https://www.jiomart.com/images/product/original/rvxr0r0orq/beatxp-smartplus-bmi-weighing-scale-with-13-essential-body-parameters-with-smart-fitness-app-and-backlit-lcd-display-18-months-warranty-product-images-orvxr0r0orq-p601786619-3-202305251620.jpg?im=Resize=(420,420)"
    ],
    "seller_info": {
      "name": "ScalePro",
      "rating": 4.6,
      "location": "Denver, USA"
    },
    "price": 79.99
  },
  {
    "id": 152,
    "title": "Digital Piano",
    "description": "88-key digital piano with weighted keys, multiple sound settings, and recording feature.",
    "category": "Musical Instruments",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCYX870mWXmQOOiJGUQ--8GN7t8g_zKZUfQ&s",
      "https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?cs=srgb&dl=pexels-pixabay-164743.jpg&fm=jpg"
    ],
    "seller_info": {
      "name": "MusicMaster",
      "rating": 4.7,
      "location": "Nashville, USA"
    },
    "price": 699.99
  },
  {
    "id": 153,
    "title": "Smart Light Bulb",
    "description": "WiFi-enabled smart light bulb with adjustable brightness and color, voice control.",
    "category": "Home Automation",
    "price": 29.99,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDZvSLSIVeC2kj5MTvMUy4YJucr7QUp6CcA&s",
      "https://img.etimg.com/thumb/width-640,height-480,imgsize-23642,resizemode-75,msid-108921212/top-trending-products/home-improvement/best-smart-led-light-under-1000-in-india-to-make-your-lighting-smarter.jpg"
    ],
    "seller_info": {
      "name": "BrightHome",
      "rating": 4.7,
      "location": "Austin, USA"
    }
  },
  {
    "id": 154,
    "title": "Electric Pressure Washer",
    "description": "High-power electric pressure washer with multiple nozzles and adjustable pressure.",
    "category": "Outdoor",
    "price": 199.99,
    "images": [
      "https://t4.ftcdn.net/jpg/02/15/81/55/360_F_215815533_NQSAKbDlGnVgX1QCgzeJ8LOyUCWYdcvr.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2020/12/RK/ET/GN/3055511/car-wash-equipment-500x500.jpg"
    ],
    "seller_info": {
      "name": "CleanPro",
      "rating": 4.6,
      "location": "San Jose, USA"
    }
  },
  {
    "id": 155,
    "title": "Cordless Drill",
    "description": "Powerful cordless drill with variable speed, multiple drill bits, and rechargeable battery.",
    "category": "Tools",
    "price": 79.99,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx9hJ7WXAJZ8JY8WdV3l0YevwfKAf-mnlPzg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf7-kt_W0i00EkuVXCBKxgxBw_bOa05NhqlQ&s"
    ],
    "seller_info": {
      "name": "DrillMaster",
      "rating": 4.7,
      "location": "Houston, USA"
    }
  },
  {
    "id": 156,
    "title": "Electric Wine Opener",
    "description": "Battery-operated electric wine opener with foil cutter and rechargeable base.",
    "category": "Kitchen Appliances",
    "price": 34.99,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9tkZMqmiCjLUuCpVVtYec0CSAnY5bssMQw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGrQ9tMT2Gbq26FEVJ45PnaJi63eote_Epiw&s"
    ],
    "seller_info": {
      "name": "WinePro",
      "rating": 4.8,
      "location": "San Francisco, USA"
    }
  },
  {
    "id": 157,
    "title": "Smart Sprinkler Controller",
    "description": "WiFi-enabled smart sprinkler controller with weather-based watering schedules.",
    "category": "Home Automation",
    "price": 89.99,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMuEvdY6UtbIliDqgt2R1JGNxEZCvqMzCN1w&s",
      "https://5.imimg.com/data5/BE/KT/DP/SELLER-31884659/global-smart-irrigation-controllers-market-jpg-250x250.jpg"
    ],
    "seller_info": {
      "name": "IrrigationTech",
      "rating": 4.7,
      "location": "Los Angeles, USA"
    }
  },
  {
    "id": 158,
    "title": "Bluetooth Car Adapter",
    "description": "Bluetooth car adapter with hands-free calling, music streaming, and dual USB charging.",
    "category": "Automotive",
    "price": 24.99,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuSOf4DJAtmrOM80C4atWjc8E44zjsVn2dYg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQajYpTXhPPS_rwBw0ZM1sJv8gat-Bh3St_Cg&s"
    ],
    "seller_info": {
      "name": "CarConnect",
      "rating": 4.6,
      "location": "Miami, USA"
    }
  },
  {
    "id": 159,
    "title": "Robot Vacuum Cleaner",
    "description": "Smart robot vacuum cleaner with app control, self-charging, and multi-surface cleaning.",
    "category": "Home Appliances",
    "price": 199.99,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScilZLReNIkYccixuSjxGucX_ioLbmwOu5yg&s",
      "https://images.unsplash.com/photo-1647940990395-967898eb0d65?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ib3QlMjB2YWN1dW0lMjBjbGVhbmVyfGVufDB8fDB8fHww"
    ],
    "seller_info": {
      "name": "VacPro",
      "rating": 4.8,
      "location": "Dallas, USA"
    }
  },
  {
    "id": 160,
    "title": "Wireless Earbuds",
    "description": "True wireless earbuds with noise isolation, touch controls, and charging case.",
    "category": "Electronics",
    "price": 79.99,
    "images": [
      "https://media.wired.com/photos/6666602f40914f225699a6bc/2:3/w_866,h_1299,c_limit/Technics-EAH-AZ80-Earbuds-Abstract-Background-SOURCE-Amazon.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnLO_MDk1es6fI-3sLm7OMod3Lfq9SZs9uCQ&s"
    ],
    "seller_info": {
      "name": "AudioTech",
      "rating": 4.7,
      "location": "Seattle, USA"
    }
  },
  {
    "id": 161,
    "title": "Smart Thermostat",
    "description": "WiFi-enabled smart thermostat with energy-saving features and app control.",
    "category": "Home Automation",
    "price": 129.99,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmem94YqahbkhsvwAkXZMQeXqxVrhUs4sCvQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8abkYORDMuezkhshEG8Yo4cQsKhT_X8IdCw&s"
    ],
    "seller_info": {
      "name": "ThermoTech",
      "rating": 4.7,
      "location": "Phoenix, USA"
    }
  },
  {
    "id": 162,
    "title": "Electric Toothbrush",
    "description": "Rechargeable electric toothbrush with multiple brushing modes and smart timer.",
    "category": "Personal Care",
    "price": 49.99,
    "images": [
      "https://t4.ftcdn.net/jpg/02/20/50/01/360_F_220500192_BrF9BRBqLZ5vnitPD5zruXJDsSdB0KV2.jpg",
      "https://www.electricteeth.com/uk/wp-content/uploads/sites/3/2023/02/Quietest_Electric_Toothbrush_Video_Thumbnail.jpg"
    ],
    "seller_info": {
      "name": "OralCare",
      "rating": 4.8,
      "location": "Chicago, USA"
    }
  },
  {
    "id": 163,
    "title": "Smart Garden System",
    "description": "Automated indoor smart garden system with LED grow lights and app control.",
    "category": "Home & Garden",
    "price": 149.99,
    "images": [
      "https://image.made-in-china.com/2f0j00oPSceYmdkqka/Smart-Hydroponics-Growing-System-with-Circulation-Pump-Home-Garden-Use-for-Greenhouse-Vegetable-Fruit-Flower.jpg",
      "https://media.gettyimages.com/id/1595783776/photo/interior-laboratory-of-a-vertical-farm-with-red-led-lights.jpg?s=612x612&w=gi&k=20&c=VC34mmqw7h4DdCAif-u-GIFjbJQ_14OlX4XVOqhBf3A="
    ],
    "seller_info": {
      "name": "GreenThumb",
      "rating": 4.7,
      "location": "Austin, USA"
    }
  },
  {
    "id": 164,
    "title": "Wireless Gaming Controller",
    "description": "Ergonomic wireless gaming controller with customizable buttons and vibration feedback.",
    "category": "Gaming",
    "price": 69.99,
    "images": [
      "https://img.etimg.com/thumb/width-1600,height-900,imgsize-398968,resizemode-75,msid-109406530/top-trending-products/gaming-consoles/best-bluetooth-gamepads.jpg",
      "https://rukminim2.flixcart.com/image/850/1000/ko8xtow0/code-in-the-box-game/h/r/a/pc-2-4g-wireless-gaming-controller-with-game-stick-2-controller-original-imag2r5aek7cpaec.jpeg?q=20&crop=false"
    ],
    "seller_info": {
      "name": "GamePro",
      "rating": 4.8,
      "location": "San Francisco, USA"
    }
  },
  {
    "id": 165,
    "title": "Portable Power Bank",
    "description": "High-capacity portable power bank with fast charging and multiple USB ports.",
    "category": "Electronics",
    "price": 39.99,
    "images": [
      "https://www.shutterstock.com/image-photo/portable-power-banks-charger-process-260nw-1864637995.jpg",
      "https://cdn.mos.cms.futurecdn.net/H92RpfRJxgYWonsfqB5vFj.jpg"
    ],
    "seller_info": {
      "name": "ChargeTech",
      "rating": 4.6,
      "location": "New York, USA"
    }
  },
  {
    "id": 166,
    "title": "Bluetooth Headphones",
    "description": "Over-ear Bluetooth headphones with noise cancellation and long battery life.",
    "category": "Electronics",
    "price": 99.99,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHwWRSAHOXSupFuOYOTFLpUSGgOi7SoM2uPA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAt1JtNIj2R-T59fwaGWo6rGrha6d3Wi57zg&s"
    ],
    "seller_info": {
      "name": "SoundPro",
      "rating": 4.7,
      "location": "Los Angeles, USA"
    }
  },
  {
    "id": 167,
    "title": "Smart Water Bottle",
    "description": "Smart water bottle with hydration tracking, LED reminders, and app integration.",
    "category": "Health & Wellness",
    "price": 19.99,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpxHS-zgeCaIVZlIExhtx3-GdUG_UpsEcBQ&s",
      "https://m.media-amazon.com/images/I/51tMkcA-oJL.jpg"
    ],
    "seller_info": {
      "name": "HydroTech",
      "rating": 4.8,
      "location": "Miami, USA"
    }
  },
  {
    "id": 168,
    "title": "Digital Air Fryer",
    "description": "Large-capacity digital air fryer with multiple cooking presets and touch screen control.",
    "category": "Kitchen Appliances",
    "price": 129.99,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Jxh3_KawBcRnGYLY6xgFETgPTSsq0Ac-1w&s",
      "https://www.hindustantimes.com/ht-img/img/2024/06/07/1600x900/lifelong__1717752921348_1717752921587.jpg"
    ],
    "seller_info": {
      "name": "AirChef",
      "rating": 4.7,
      "location": "Chicago, USA"
    }
  },
  {
    "id": 169,
    "title": "Fitness Tracker Watch",
    "description": "Fitness tracker watch with heart rate monitoring, GPS, and activity tracking.",
    "category": "Fitness",
    "price": 79.99,
    "images": [
      "https://www.jiomart.com/images/product/original/rvgwpgueio/dicto-india-black-smart-watch-with-bluetooth-call-heart-rate-monitor-fitness-and-step-tracker-for-men-women-boys-girls-compatible-with-android-ios-dicto-india-disw-t-500-product-images-orvgwpgueio-p605927874-1-202311010232.jpg?im=Resize=(420,420)",
      "https://i.pinimg.com/474x/b3/3e/e9/b33ee94a4f0c32e331dda68687ec7275.jpg"
    ],
    "seller_info": {
      "name": "FitTech",
      "rating": 4.6,
      "location": "Seattle, USA"
    }
  },
  {
    "id": 170,
    "title": "Portable Camping Stove",
    "description": "Lightweight portable camping stove with windproof design and adjustable flame.",
    "category": "Outdoor",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRywsPPsrRj6rr-9WKrF9DJaSh75AKzGHJFvg&s",
      "https://5.imimg.com/data5/HD/AC/MY-51269138/campingaz-camp-bistro-2-stove-250x250.jpg"
    ],
    "seller_info": {
      "name": "CampMaster",
      "rating": 4.8,
      "location": "Portland, USA"
    },
    "price": 59.99
  },
  {
    "id": 171,
    "title": "Electric Kettle",
    "description": "Stainless steel electric kettle with rapid boiling and auto shut-off feature.",
    "category": "Kitchen Appliances",
    "images": [
      "https://img.freepik.com/premium-photo/female-hands-pouring-boiling-water-from-modern-metal-stainless-kettle-glass-cup-brewing-tea-kitchen-home_122732-4301.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8lhYmNKa1NmE1b-f0HyOjgNSKHMG39lmIUw&s"
    ],
    "seller_info": {
      "name": "KettlePro",
      "rating": 4.7,
      "location": "Seattle, USA"
    },
    "price": 34.95
  },
  {
    "id": 172,
    "title": "Smart Baby Monitor",
    "description": "WiFi-enabled smart baby monitor with HD video, two-way audio, and night vision.",
    "category": "Baby",
    "images": [
      "https://m.media-amazon.com/images/I/51N+yy+T-rL._AC_UF1000,1000_QL80_.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFYkHRCpbOKQNylgtBYdM1ymCkH5lOX2uKow&s"
    ],
    "seller_info": {
      "name": "BabySafe",
      "rating": 4.8,
      "location": "Boston, USA"
    },
    "price": 129.99
  },
  {
    "id": 173,
    "title": "Electric Pressure Cooker",
    "description": "Multi-function electric pressure cooker with programmable settings and safety features.",
    "category": "Kitchen Appliances",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFdQMBkS4cb3cXZ68MHFi1jhHWvnCuWpWIgQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCn3EmEKTjXiC-7s7omLZPsm6JhPXyAZEc1g&s"
    ],
    "seller_info": {
      "name": "CookMaster",
      "rating": 4.7,
      "location": "San Francisco, USA"
    },
    "price": 79.95
  },
  {
    "id": 174,
    "title": "Smart Home Security Camera",
    "description": "Wireless smart home security camera with motion detection and two-way audio.",
    "category": "Home Security",
    "images": [
      "https://www.shutterstock.com/image-photo/security-camera-high-tech-smart-260nw-2221559161.jpg",
      "https://www.livemint.com/lm-img/img/2024/01/04/1600x900/Best_home_security_cameras_1704373587513_1704373587676.jpg"
    ],
    "seller_info": {
      "name": "SecureCam",
      "rating": 4.8,
      "location": "New York, USA"
    },
    "price": 89.99
  },
  {
    "id": 175,
    "title": "Electric Scooter",
    "description": "Foldable electric scooter with long battery life, LED display, and adjustable speed.",
    "category": "Outdoor",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRop8DaXea1QfNP6kot6VKfJf1_tdAfbJKJsA&s",
      "https://images.squarespace-cdn.com/content/v1/631f031f841f9516b44d8878/1667279721056-4OWAB8DK2ADOBFM9ESXN/Render_001.jpg"
    ],
    "seller_info": {
      "name": "ScootTech",
      "rating": 4.7,
      "location": "Los Angeles, USA"
    },
    "price": 299.99
  },
  {
    "id": 176,
    "title": "Smart Plug",
    "description": "WiFi-enabled smart plug with voice control and energy monitoring.",
    "category": "Home Automation",
    "images": [
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/9b4258f7-c5cf-4a8d-89ea-b7b415d4f4e3.__CR0,0,1940,1200_PT0_SX970_V1___.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1OFzxqAoE2t3HtVDBBe5uRLAwPORBKdFsng&s"
    ],
    "seller_info": {
      "name": "PlugSmart",
      "rating": 4.7,
      "location": "Chicago, USA"
    },
    "price": 19.99
  },
  {
    "id": 177,
    "title": "Electric Grill",
    "description": "Indoor/outdoor electric grill with adjustable temperature control and non-stick surface.",
    "category": "Kitchen Appliances",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaFHEc9kHf1solqgRAAs3zphJTGxwwafSkow&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmGbe6AYOUcAzQok9cPa8Y1as34rgr-wdqw&s"
    ],
    "seller_info": {
      "name": "GrillPro",
      "rating": 4.8,
      "location": "Houston, USA"
    },
    "price": 69.95
  },
  {
    "id": 178,
    "title": "Smart Air Purifier",
    "description": "WiFi-enabled smart air purifier with HEPA filter and air quality monitor.",
    "category": "Home Appliances",
    "images": [
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/air-purifier/a/0/k/24-q500-smart-24-4-qubo-original-imagvyxvjvskqmfg.jpeg?q=90&crop=false",
      "https://cdn.staticans.com/image/tr:e-sharpen-01,h-1000,w-1000,cm-pad_resize/data/philips/19jan2024/Info-AC1715-02.jpg"
    ],
    "seller_info": {
      "name": "AirClean",
      "rating": 4.7,
      "location": "Miami, USA"
    },
    "price": 129.99
  },
  {
    "id": 179,
    "title": "Cordless Vacuum Cleaner",
    "description": "Lightweight cordless vacuum cleaner with powerful suction and long battery life.",
    "category": "Home Appliances",
    "images": [
      "https://www.kent.co.in/blog/wp-content/uploads/2019/04/Vacuum-cleaner-for-home.jpg",
      "https://proscenic.co.in/cdn/shop/files/P10Ultra_3_600x.jpg?v=1699095168"
    ],
    "seller_info": {
      "name": "VacTech",
      "rating": 4.8,
      "location": "San Diego, USA"
    },
    "price": 179.99
  },
  {
    "id": 180,
    "title": "Smart Doorbell",
    "description": "WiFi-enabled smart doorbell with HD video, motion detection, and two-way audio.",
    "category": "Home Security",
    "images": [
      "https://images-cdn.ubuy.co.in/6351294d9c788c280b61f4e4-ring-video-doorbell-2020-release.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1eaOjuyiRthcqaE0cb7UFEwiaHs9U5L7ZpQ&s"
    ],
    "seller_info": {
      "name": "DoorTech",
      "rating": 4.7,
      "location": "Austin, USA"
    },
    "price": 149.99
  },
  {
    "id": 181,
    "title": "Smart Light Switch",
    "description": "WiFi-enabled smart light switch with voice control and app integration.",
    "category": "Home Automation",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsmgfOXK1mi8oKp7Ddh7fzKzRoNGNo7YJvuw&s",
      "https://media.istockphoto.com/id/1298291794/photo/smart-home-automation.jpg?s=612x612&w=0&k=20&c=UjqbiMcVNXr1ef36b8e0OTD_BAj_dib6YgFrTsqE94Q="
    ],
    "seller_info": {
      "name": "SwitchSmart",
      "rating": 4.6,
      "location": "New York, USA"
    },
    "price": 29.99
  },
  {
    "id": 182,
    "title": "Electric Bike Pump",
    "description": "Portable electric bike pump with digital pressure gauge and rechargeable battery.",
    "category": "Outdoor",
    "images": [
      "https://eskute.co.uk/cdn/shop/articles/portable-tire-air-pump.jpg?v=1667874451",
      "https://rukminim2.flixcart.com/image/850/1000/k20r8nk0/pump/g/h/g/electric-air-pump-air-pump-trendegic-original-imafhgnjkj6hy787.jpeg?q=90&crop=false"
    ],
    "seller_info": {
      "name": "BikePro",
      "rating": 4.8,
      "location": "San Francisco, USA"
    },
    "price": 49.95
  },
  {
    "id": 183,
    "title": "Smart WiFi Router",
    "description": "High-speed smart WiFi router with dual-band connectivity and app management.",
    "category": "Electronics",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4rADH2G6Mn4nrtj49rELKZvGsu3JohCQ0EA&s",
      "https://m.media-amazon.com/images/I/51MsvuD7iOL._AC_UF1000,1000_QL80_.jpg"
    ],
    "seller_info": {
      "name": "NetTech",
      "rating": 4.7,
      "location": "Los Angeles, USA"
    },
    "price": 89.99
  },
  {
    "id": 184,
    "title": "Electric Chainsaw",
    "description": "Powerful electric chainsaw with automatic lubrication and safety lock feature.",
    "category": "Tools",
    "images": [
      "https://5.imimg.com/data5/SELLER/Default/2021/7/SV/MD/TU/43733038/makita-uc4041a-electric-chain-saw-500x500.png",
      "https://media.istockphoto.com/id/139544191/photo/a-set-of-hands-using-a-chainsaw-on-a-tree-trunk.jpg?s=612x612&w=0&k=20&c=OisrRHdZ5ghy2ReVQ-gDjP5s7MrXvlO7xLgCQOaaoFs="
    ],
    "seller_info": {
      "name": "SawPro",
      "rating": 4.6,
      "location": "Seattle, USA"
    },
    "price": 129.95
  },
  {
    "id": 185,
    "title": "Smart Pet Camera",
    "description": "WiFi-enabled smart pet camera with treat dispenser, HD video, and two-way audio.",
    "category": "Pet Supplies",
    "images": [
      "https://m.media-amazon.com/images/I/61C0rrvRsCL.jpg",
      "https://m.media-amazon.com/images/I/51YsrNQ2swL.jpg"
    ],
    "seller_info": {
      "name": "PetTech",
      "rating": 4.8,
      "location": "San Diego, USA"
    },
    "price": 179.99
  },
  {
    "id": 186,
    "title": "Electric Skateboard",
    "description": "Electric skateboard with remote control, long battery life, and high-speed capabilities.",
    "category": "Outdoor",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTviMViBLwpbLgVwUtwlHU9sOWdPtrhgZge2A&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp0pYCLSvg1vPkT2QSMeQl4cYpIpt7kEPfww&s"
    ],
    "seller_info": {
      "name": "SkateTech",
      "rating": 4.7,
      "location": "Miami, USA"
    },
    "price": 249.99
  },
  {
    "id": 187,
    "title": "Smart Humidifier",
    "description": "Ultrasonic smart humidifier with app control, adjustable mist levels, and night light.",
    "category": "Home Appliances",
    "images": [
      "https://mir-s3-cdn-cf.behance.net/projects/404/47b39d197359087.Y3JvcCwxOTcxLDE1NDIsMjE0LDExMDc.jpg",
      "https://lh4.googleusercontent.com/proxy/1H1DIHjUE4i2FDlLASH6rTR8uJh0ykTMR-lRvt6YEe08_w1TYDouz9ZN2orq2bfwZfffjnKUJhAqn79oQiI-4N0GEmOEohfBoXa8gpYZvwGruZkmqT9x4OKEF1BbAFqa6UCbBPKlFRvPFQAgVg"
    ],
    "seller_info": {
      "name": "HumidTech",
      "rating": 4.7,
      "location": "Chicago, USA"
    },
    "price": 89.99
  },
  {
    "id": 188,
    "title": "Wireless Charging Pad",
    "description": "Fast wireless charging pad with non-slip surface and overcharge protection.",
    "category": "Electronics",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2024/07/applechargers-2048px-01141.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrprnJlgsYwRWdJCKWWHV_uGyArdEbMgbfXQ&s"
    ],
    "seller_info": {
      "name": "ChargePro",
      "rating": 4.8,
      "location": "Austin, USA"
    },
    "price": 39.99
  },
  {
    "id": 189,
    "title": "Electric Lawn Mower",
    "description": "Cordless electric lawn mower with adjustable cutting height and large grass catcher.",
    "category": "Outdoor",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqoftD86rXZOMugg71_CRYKgO1ZE1imMxdBA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQzvaFicdVE8yNwlluTlvU9eIkDYJnxDUhZg&s"
    ],
    "seller_info": {
      "name": "LawnTech",
      "rating": 4.7,
      "location": "San Francisco, USA"
    },
    "price": 299.99
  },
  {
    "id": 190,
    "title": "Smart Thermos",
    "description": "Smart thermos with temperature display, hydration reminders, and app integration.",
    "category": "Health & Wellness",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHf0hpmw71pFxjDoB6oITWmoyzj-CWWMteg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoal1HHir91yyjfR4XDSraj5H2JupWJSTeYA&s"
    ],
    "seller_info": {
      "name": "ThermoSmart",
      "rating": 4.6,
      "location": "Miami, USA"
    },
    "price": 49.99
  },
  {
    "id": 191,
    "title": "Electric Blanket",
    "description": "Heated electric blanket with multiple heat settings and auto shut-off.",
    "category": "Home Decor",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWWarOgh_F_bdQFlowFK8uq04xEAXtiLh2Sg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJrigSd6lHQbfb1sDelDwFOKDQYhXHWCVy5A&s"
    ],
    "seller_info": {
      "name": "WarmTech",
      "rating": 4.7,
      "location": "New York, USA"
    },
    "price": 79.99
  },
  {
    "id": 192,
    "title": "Smart Sleep Tracker",
    "description": "Wearable smart sleep tracker with heart rate monitor, sleep analysis, and app sync.",
    "category": "Health & Wellness",
    "images": [
      "https://media.wired.com/photos/65202179e9a05bb2c058a246/1:1/w_1366,h_1366,c_limit/Oura-Horizon-Gear.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyDuazmowT7xS_OMhbhgRY9lO9QcsfQjvVmA&s"
    ],
    "seller_info": {
      "name": "SleepPro",
      "rating": 4.8,
      "location": "Los Angeles, USA"
    },
    "price": 129.99
  },
  {
    "id": 193,
    "title": "Portable Blender",
    "description": "Rechargeable portable blender with USB charging and travel lid.",
    "category": "Kitchen Appliances",
    "images": [
      "https://www.wonderchef.com/cdn/shop/files/Image1_1eb29e84-f497-40b5-a50c-c6a98d306711_1024x1024.jpg?v=1710490779",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0NjIyY5J4chcMZExe6xsbIvFJ0WiDe9BJA&s"
    ],
    "seller_info": {
      "name": "BlendTech",
      "rating": 4.7,
      "location": "San Diego, USA"
    },
    "price": 34.99
  },
  {
    "id": 194,
    "title": "Smart Garage Door Opener",
    "description": "WiFi-enabled smart garage door opener with remote control and activity alerts.",
    "category": "Home Automation",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV7PJ_rtPQHniDjuNhRHpyLDkGoRaS-uKrIg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZM6jMo2ef-deSe3PyNNDzEvu7XS80LhfRWw&sg"
    ],
    "seller_info": {
      "name": "GarageSmart",
      "rating": 4.7,
      "location": "Chicago, USA"
    },
    "price": 199.99
  },
  {
    "id": 195,
    "title": "Electric Wine Opener",
    "description": "Rechargeable electric wine opener with foil cutter and charging base.",
    "category": "Kitchen Appliances",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDCg3-hiqYmmqF6YRSZLHoPUJnTT-h_8l-wg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8N0mRMWt-OBvsjc6sWWv748hUDOFqZLYSXQ&s"
    ],
    "seller_info": {
      "name": "WineTech",
      "rating": 4.8,
      "location": "Napa Valley, USA"
    },
    "price": 19.99
  },
  {
    "id": 196,
    "title": "Smart Body Analyzer",
    "description": "Advanced smart body analyzer with full body composition and health metrics tracking.",
    "category": "Health & Wellness",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYn-r1ENFcyBhNOWtx2rQGYsteZuzgEe5iJA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKh2ycQ5shlz5cM6zQp2i55HtyfTwjnuV0Uw&s"
    ],
    "seller_info": {
      "name": "HealthPro",
      "rating": 4.7,
      "location": "New York, USA"
    },
    "price": 149.99
  },
  {
    "id": 197,
    "title": "Smart Light Strip",
    "description": "WiFi-enabled smart light strip with color changing, music sync, and app control.",
    "category": "Home Automation",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXaZcEizfPdySsf0CtgVeNj_YkTbahHSPO2g&s",
      "https://m.media-amazon.com/images/I/71lZ2JAkAsL.jpg"
    ],
    "seller_info": {
      "name": "LightTech",
      "rating": 4.8,
      "location": "San Francisco, USA"
    },
    "price": 59.99
  },
  {
    "id": 198,
    "title": "Smart Air Conditioner",
    "description": "Energy-efficient smart air conditioner with remote control and voice assistant compatibility.",
    "category": "Home Appliances",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYD_3NOijq9DJIkw0uP9hCMt6mZ2pIy__y4A&s",
      "https://images.interestingengineering.com/img/iea/ypwqpkBD6N/air.jpeg"
    ],
    "seller_info": {
      "name": "CoolTech",
      "rating": 4.7,
      "location": "Miami, USA"
    },
    "price": 399.99
  },
  {
    "id": 199,
    "title": "Electric Shaver",
    "description": "Rechargeable electric shaver with precision blades and waterproof design.",
    "category": "Personal Care",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNDkGRHtxP2I0JX7hFYQx7Lk6NvZu5j8TG9A&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStLJ9Lc7P8lzJY-sywI9AiZKprfrulvkLnaA&s"
    ],
    "seller_info": {
      "name": "ShavePro",
      "rating": 4.6,
      "location": "Chicago, USA"
    },
    "price": 49.99
  },
  {
    "id": 200,
    "title": "Smart Watch",
    "description": "Smart watch with fitness tracking, heart rate monitor, and app notifications.",
    "category": "Electronics",
    "images": [
      "https://w0.peakpx.com/wallpaper/839/330/HD-wallpaper-apple-watch-series-8-smartwatch-boasts-an-always-on-display-and-a-durable-design-gadget-flow.jpg",
      "https://uandiworld.com/cdn/shop/files/05_fd69b7da-88c8-47f0-9ded-fe304395f980_1080x.jpg?v=1706940672"
    ],
    "seller_info": {
      "name": "TechTime",
      "rating": 4.8,
      "location": "San Jose, USA"
    },
    "price": 199.99
  }
  ] 


export default Product ;