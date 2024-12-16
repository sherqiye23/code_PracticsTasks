import 'bootstrap/dist/css/bootstrap.min.css'
import Element from './Element'

function Elements() {
  let products = [
    {
      "id": "001",
      "name": "Wireless Headphones",
      "description": "High-quality wireless headphones with noise cancellation and 20-hour battery life.",
      "price": 89.99,
      "button" : "View Options",
      "isDis": true,
      "dis":"50"
    },
    {
      "id": "002",
      "name": "Smartwatch",
      "description": "A sleek smartwatch with fitness tracking, heart rate monitor, and customizable watch faces.",
      "price": 199.99,
      "button" : "Add to Card",
      "isDis": false

    },
    {
      "id": "003",
      "name": "Portable Charger",
      "description": "Compact portable charger with 10,000mAh capacity, perfect for on-the-go charging.",
      "price": 29.99,
      "button" : "Add to Card",
      "isDis": false

    },
    {
      "id": "004",
      "name": "Bluetooth Speaker",
      "description": "Waterproof Bluetooth speaker with 360-degree sound and 12-hour battery life.",
      "price": 49.99,
      "button" : "Add to Card",
       "isDis": true,
      "dis":"50"

    },
    {
      "id": "005",
      "name": "Laptop Stand",
      "description": "Adjustable laptop stand for ergonomic use, made from durable aluminum.",
      "price": 39.99,
      "button" : "Add to Card",
      "isDis": false

    },
    {
      "id": "006",
      "name": "Gaming Mouse",
      "description": "Ergonomic gaming mouse with customizable RGB lighting and high precision sensor.",
      "price": 59.99,
      "button" : "Add to Card",
       "isDis": true,
      "dis":"50"

    },
    {
      "id": "007",
      "name": "4K Monitor",
      "description": "27-inch 4K UHD monitor with HDR support and ultra-thin bezels.",
      "price": 399.99,
      "button" : "Add to Card",
       "isDis": false

    },
    {
      "id": "008",
      "name": "Mechanical Keyboard",
      "description": "RGB mechanical keyboard with customizable keys and tactile feedback.",
      "price": 79.99,
      "button" : "Add to Card",
       "isDis": true,
      "dis":"50"

    }
  ]
  console.log(products);
  
  return (
    <>
      <div className="my-cards">
        {
          products.map(product => (
            <Element
              name = {product.name}
              price = {product.price}
              description = {product.description}
              button = {product.button}
              isDis = {product.isDis}
              dis = {product.dis}
            />
          ))
        }
      </div>
    </>
  )
}

export default Elements
