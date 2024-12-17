import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default function MyCard({name, stars, firstPrice, secondPrice, dis, button, sale}) {  
      
    return (
        <>
            <Card className='card'>
                <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                <Card.Body>
                    {/* title */}
                    <Card.Title className='card-title'><h4>{name}name</h4></Card.Title>
                    {/* stars */}
                    <Card.Text className='card-stars'>{stars ? <span>{stars}</span> : ""}</Card.Text>
                    {/* prices */}
                    <Card.Text className='card-prices'>
                        { secondPrice ? <span>${firstPrice} - ${secondPrice}</span>
                        : dis ? <span><del>${dis}</del> ${firstPrice}</span> 
                        : <span>${firstPrice}</span> }
                    </Card.Text>
                    {/* sale */}
                    <Card.Text className='card-sale-text'>{sale ? "Sale" : ""}</Card.Text>
                     {/*button */}
                    <Button variant="light">{button} </Button>
                </Card.Body>
            </Card>
        </>
    )
}

