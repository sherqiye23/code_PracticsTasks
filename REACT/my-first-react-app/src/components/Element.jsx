
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Element({name, description, price, button,isDis,dis}) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                <Card.Body>
                    <Card.Title>{name} </Card.Title>
                    <Card.Text>{isDis && <span> <del> {dis}$ </del> - </span>} {price} $</Card.Text>
                    <Card.Text>{description}</Card.Text>
                  
                    
                    <Button variant="light" style={{ border: '1px solid #1e1e1e' }} >{button} </Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Element
