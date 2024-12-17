import MyCard from "./Card"
import Container from 'react-bootstrap/Container'

export default function Cards() {
    let products = [
        {
            "id": "001",
            "name": "Fancy Product",
            "firstPrice": 40.00,
            "secondPrice": 80.00,
            "button": "View Options"
        },
        {
            "id": "002",
            "name": "Special Item",
            "stars": "⭐⭐⭐⭐⭐",
            "firstPrice": 18.00,
            "dis": 20.00,
            "button": "Add to cart",
            "sale": true
        },
        {
            "id": "003",
            "name": "Sale Item",
            "firstPrice": 25.00,
            "dis": 50.00,
            "button": "Add to cart",
            "sale": true
        },
        {
            "id": "004",
            "name": "Popular Item",
            "stars": "⭐⭐⭐⭐⭐",
            "firstPrice": 40.00,
            "button": "Add to cart"
        },
        {
            "id": "005",
            "name": "Sale Item",
            "firstPrice": 25.00,
            "dis": 50.00,
            "button": "Add to cart",
            "sale": true
        },
        {
            "id": "006",
            "name": "Fancy Product",
            "firstPrice": 120.00,
            "secondPrice": 280.00,
            "button": "View Options"
        },
        {
            "id": "007",
            "name": "Special Item",
            "stars": "⭐⭐⭐⭐⭐",
            "firstPrice": 18.00,
            "dis": 20.00,
            "button": "Add to cart",
            "sale": true
        },
        {
            "id": "008",
            "name": "Popular Item",
            "stars": "⭐⭐⭐⭐⭐",
            "firstPrice": 40.00,
            "button": "Add to cart"
        }
    ]
    return (
        <>
            <section id="cards">
                <Container>
                    {
                        products.map(product => (
                            <MyCard
                                name={product.name}
                                firstPrice={product.firstPrice}
                                secondPrice={product.secondPrice}
                                button={product.button}
                                dis={product.dis}
                                stars={product.stars}
                                sale={product.sale}
                            />
                        ))
                    }
                </Container>
            </section>
        </>
    )
}