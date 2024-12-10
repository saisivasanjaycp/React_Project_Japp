import React, { useState } from 'react';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';
import Goldnecklace from '../Assets/Goldnecklace.jpg';
import silverbracelet from '../Assets/silverbracelet.jpg';
import diamondring from '../Assets/diamondring.jpg';
import goldearings from '../Assets/goldearings.jpg';
import Engravedneck from '../Assets/Engravedneck.jpg';
import pendants from '../Assets/pendants.jpg';


const ProductComp = () => {
    const products = [
        {
            id: 1,
            name: 'Elegant Gold Necklace',
            price: 99.99,
            description: 'A beautifully crafted necklace with intricate designs.',
            image: Goldnecklace,
        },
        {
            id: 2,
            name: 'Silver Bracelet',
            price: 79.99,
            description: 'A stunning bracelet made from sterling silver.',
            image: silverbracelet,
        },
        {
            id: 3,
            name: 'Diamond Ring',
            price: 199.99,
            description: 'A dazzling diamond ring with a timeless design.',
            image: diamondring,
        },
        {
            id: 4,
            name: 'Gold Earrings',
            price: 89.99,
            description: 'Elegant gold earrings with a modern touch.',
            image: goldearings,
        },
        {
            id: 5,
            name: 'Engraved Chain',
            price: 299.99,
            description: 'A luxurious platinum engraved chain  with intricate craftsmanship.',
            image: Engravedneck,
        },
        {
            id: 6,
            name: 'Gold Hearted Pendant',
            price: 149.99,
            description: 'A delicate double hearted pendantthat shines bright.',
            image: pendants,
        },
    ];

    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <Container style={{ padding: '50px 0' }}>
            <Row xs={1} sm={2} md={3} lg={3} xl={3} className="g-4">
                {products.map((product) => (
                    <Col key={product.id}>
                        <Card>
                            <Card.Img variant="top" src={product.image} alt={product.name} style={{ height: '250px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <h5>${product.price.toFixed(2)}</h5>

                                {/* Quantity and Add to Cart */}
                                <div style={{ marginTop: '20px' }}>
                                    <Button variant="outline-dark" onClick={handleDecrease} disabled={quantity <= 1}>
                                        -
                                    </Button>
                                    <span style={{ margin: '0 10px' }}>{quantity}</span>
                                    <Button variant="outline-dark" onClick={handleIncrease}>
                                        +
                                    </Button>
                                </div>

                                <div style={{ marginTop: '20px' }}>
                                    <Button variant="primary" size="lg" style={{ width: '100%' }}>
                                        Add to Cart
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductComp;
