const products = [
    {
        "product_id": 1,
        "product_name": "Floral Dress",
        "product_img": "src/assets/floral_dress.jpg",
        "product_description": "Beautiful floral print dress",
        "product_price": 49.99,
        "category_id": 1
    },
    {
        "product_id": 2,
        "product_name": "Leather Jacket",
        "product_img": "src/assets/leather_jacket.jpg",
        "product_description": "Stylish black leather jacket",
        "product_price": 99.99,
        "category_id": 2
    },
    {
        "product_id": 3,
        "product_name": "Chronograph Watch",
        "product_img": "src/assets/watch.jpg",
        "product_description": "Elegant silver timepiece",
        "product_price": 199.99,
        "category_id": 3
    },
    {
        "product_id": 4,
        "product_name": "Lipstick Set",
        "product_img": "src/assets/lipstick_set.jpg",
        "product_description": "Set of 5 vibrant lipsticks",
        "product_price": 29.99,
        "category_id": 4
    },
    {
        "product_id": 5,
        "product_name": "Striped Blouse",
        "product_img": "src/assets/striped_blouse.jpg",
        "product_description": "Classic black and white striped blouse",
        "product_price": 39.99,
        "category_id": 1
    },
    {
        "product_id": 6,
        "product_name": "Denim Jeans",
        "product_img": "src/assets/denim_jeans.jpg",
        "product_description": "High-waisted skinny jeans",
        "product_price": 59.99,
        "category_id": 2
    },
    {
        "product_id": 7,
        "product_name": "Leather Handbag",
        "product_img": "src/assets/leather_handbag.jpg",
        "product_description": "Genuine leather handbag with gold accents",
        "product_price": 79.99,
        "category_id": 1
    },
    {
        "product_id": 8,
        "product_name": "Sneakers",
        "product_img": "src/assets/sneakers.jpg",
        "product_description": "Casual sneakers in various colors",
        "product_price": 69.99,
        "category_id": 2
    },
    {
        "product_id": 9,
        "product_name": "Diamond Bracelet",
        "product_img": "src/assets/diamond_bracelet.jpg",
        "product_description": "Dazzling diamond bracelet",
        "product_price": 299.99,
        "category_id": 3
    },
    {
        "product_id": 10,
        "product_name": "Mascara",
        "product_img": "src/assets/mascara.jpg",
        "product_description": "Volumizing mascara for fuller lashes",
        "product_price": 19.99,
        "category_id": 4
    },
    {
        "product_id": 11,
        "product_name": "Maxi Dress",
        "product_img": "src/assets/maxi_dress.jpg",
        "product_description": "Flowy and elegant maxi dress",
        "product_price": 79.99,
        "category_id": 1
    },
    {
        "product_id": 12,
        "product_name": "Graphic T-Shirt",
        "product_img": "src/assets/graphic_tshirt.jpg",
        "product_description": "Trendy graphic t-shirt with cool design",
        "product_price": 29.99,
        "category_id": 2
    },
    {
        "product_id": 13,
        "product_name": "Sports Watch",
        "product_img": "src/assets/sports_watch.jpg",
        "product_description": "Water-resistant sports watch",
        "product_price": 129.99,
        "category_id": 3
    },
    {
        "product_id": 14,
        "product_name": "Nail Polish Set",
        "product_img": "src/assets/nail_polish_set.jpg",
        "product_description": "Set of 10 vibrant nail polish colors",
        "product_price": 24.99,
        "category_id": 4
    },
    {
        "product_id": 15,
        "product_name": "Blazer",
        "product_img": "src/assets/blazer.jpg",
        "product_description": "Professional blazer for formal occasions",
        "product_price": 89.99,
        "category_id": 1
    },
    {
        "product_id": 16,
        "product_name": "Swim Shorts",
        "product_img": "src/assets/swim_shorts.jpg",
        "product_description": "Comfortable swim shorts for men",
        "product_price": 49.99,
        "category_id": 2
    },
    {
        "product_id": 17,
        "product_name": "Pendant Necklace",
        "product_img": "src/assets/pendant_necklace.jpg",
        "product_description": "Delicate pendant necklace with gemstone",
        "product_price": 59.99,
        "category_id": 3
    },
    {
        "product_id": 18,
        "product_name": "Eyeshadow Palette",
        "product_img": "src/assets/eyeshadow_palette.jpg",
        "product_description": "Palette with a variety of eyeshadow shades",
        "product_price": 39.99,
        "category_id": 4
    },
    {
        "product_id": 19,
        "product_name": "Sundress",
        "product_img": "src/assets/sundress.jpg",
        "product_description": "Light and breezy sundress for summer",
        "product_price": 69.99,
        "category_id": 1
    },
    {
        "product_id": 20,
        "product_name": "Leather Boots",
        "product_img": "src/assets/leather_boots.jpg",
        "product_description": "Stylish leather boots for a trendy look",
        "product_price": 119.99,
        "category_id": 2
    },
    {
        "product_id": 21,
        "product_name": "Perfume",
        "product_img": "src/assets/perfume.jpg",
        "product_description": "Elegant fragrance for both men and women",
        "product_price": 89.99,
        "category_id": 4
    },
    {
        "product_id": 22,
        "product_name": "Citrus Bliss",
        "product_img": "src/assets/citrus_bliss.jpg",
        "product_description": "Zesty and refreshing citrus fragrance",
        "product_price": 59.99,
        "category_id": 4
    },
    {
        "product_id": 23,
        "product_name": "Gardenia Dream",
        "product_img": "src/assets/gardenia_dream.jpg",
        "product_description": "Captivating gardenia scent with floral notes",
        "product_price": 79.99,
        "category_id": 4
    },
    {
        "product_id": 24,
        "product_name": "Oud Noir",
        "product_img": "src/assets/oud_noir.jpg",
        "product_description": "Exotic and luxurious oud fragrance",
        "product_price": 149.99,
        "category_id": 4
    },
    {
        "product_id": 25,
        "product_name": "Summer Breeze",
        "product_img": "src/assets/summer_breeze.jpg",
        "product_description": "Light and airy fragrance for summer",
        "product_price": 69.99,
        "category_id": 4
    }
]


export default products;