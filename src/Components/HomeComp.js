import React from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import carousel1 from '../Assets/carousel1.jpg';
import carousel2 from '../Assets/carousel2.jpg';
import carousel3 from '../Assets/carousel3.jpg';
import momentCollection from '../Assets/momentcollection.jpg';
import meCollection from '../Assets/mecollection.jpg';
import jewelery1 from '../Assets/jewelery1.jpg';
import jewelery2 from '../Assets/jewelery2.jpg';
import jewelery3 from '../Assets/jewelery2.jpg';

const HomeComp = () => {
    
    const imageStyle = {
        width: '100%',
        height: '500px',
        objectFit: 'cover', 
    };
    const carouselContainerStyle = {
        marginTop: '50px', // Space above the carousel
    };

    const carouselCaptionStyle = {
        position: 'absolute',
        bottom: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        color: 'white',
        background: 'rgba(0, 0, 0, 0.4)', // Transparent background for readability
        padding: '20px',
        borderRadius: '15px',
    };

    const carouselHeadingStyle = {
        fontSize: '48px',
        fontWeight: 'bold',
        marginBottom: '15px',
        textTransform: 'uppercase',
        letterSpacing: '2px',
    };

    const carouselSubheadingStyle = {
        fontSize: '24px',
        fontWeight: 'lighter',
        marginBottom: '20px',
    };

    const carouselItemStyle = {
        transition: 'opacity 1s ease-in-out',
    };

    return (
        <div>
        <Carousel>
        <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carousel1} // Change to your image path
                    alt="First slide"
                    style={imageStyle} 
                />
                <Carousel.Caption className="carousel-caption-custom">
                    <h1>MARK IT WITH LOVE</h1>
                    
                    <p>Engravable Jewelry</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={imageStyle}
                    className="d-block w-100"
                    src={carousel2}
                    alt="bracelets"
                />
                <Carousel.Caption>
                <h1>UNIQUE DESIGNS</h1>
                    <h3>Crafted withprecision and care.</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carousel3}
                    alt="chain"
                />
                <Carousel.Caption>
                    <h1>Unmatched Quality</h1>
                    <h3>Jewelry that stands the test of time.</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

                <Container className="mt-5">
                    <Row className="align-items-center">
                        <Col md={6} className="text-center">
                            <img
                                src={momentCollection}
                                alt="Pandora Moments Collection"
                                style={{ width: '100%', borderRadius: '10px' }}
                            />
                            <h3 className="mt-3">Moments Collection</h3>
                            <p>
                                A personal reminder of the people, passions, memories, and dreams
                                that drive you forward. Celebrate modern storytelling with this collection.
                            </p>
                            <Button variant="dark">Shop Now</Button>
                        </Col>
                        <Col md={6} className="text-center">
                            <img
                                src={meCollection}
                                alt="Pandora ME Collection"
                                style={{ width: '100%', borderRadius: '10px' }}
                            />
                            <h3 className="mt-3">Bracelets ME Collection</h3>
                            <p>
                                Be unapologetic, be bold, be free. Express your creativity and curate your
                                look with jewelry that says something about every side of you.
                            </p>
                            <Button variant="dark">Shop Now</Button>
                        </Col>
                    </Row>
                   
                </Container>

                <div style={carouselContainerStyle}>
            <Carousel>
                {/* Carousel Item 1 */}
                <Carousel.Item style={carouselItemStyle}>
                    <img
                        className="d-block w-100"
                        src={jewelery1} // Update path
                        alt="First slide"
                        style={{ objectFit: 'cover', height: '500px' }} // Image styling
                    />
                    <Carousel.Caption style={carouselCaptionStyle}>
                        <h2 style={carouselHeadingStyle}>Go For Gold</h2>
                        <p style={carouselSubheadingStyle}>Elegance that lasts forever</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Carousel Item 2 */}
                <Carousel.Item style={carouselItemStyle}>
                    <img
                        className="d-block w-100"
                        src={jewelery2} // Update path
                        alt="Second slide"
                        style={{ objectFit: 'cover', height: '500px' }} // Image styling
                    />
                    <Carousel.Caption style={carouselCaptionStyle}>
                        <h2 style={carouselHeadingStyle}>Shine Bright</h2>
                        <p style={carouselSubheadingStyle}>Beautiful jewelry for your most precious moments</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Carousel Item 3 */}
                <Carousel.Item style={carouselItemStyle}>
                    <img
                        className="d-block w-100"
                        src={jewelery3} // Update path
                        alt="Third slide"
                        style={{ objectFit: 'cover', height: '500px' }} // Image styling
                    />
                    <Carousel.Caption style={carouselCaptionStyle}>
                        <h2 style={carouselHeadingStyle}>Be Bold</h2>
                        <p style={carouselSubheadingStyle}>Unveil the power of statement pieces</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </div>
    );
};

export default HomeComp;
