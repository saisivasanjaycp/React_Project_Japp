import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import aboutimage from '../Assets/aboutimage.jpg'; // Ensure the image path is correct

const AboutComp = () => {
    return (
        <section id="about" style={{ padding: '60px 0', backgroundColor: '#f9f9f9' }}>
            <Container>
                <Row className="align-items-center">
                    {/* Image Section */}
                    <Col md={6} className="order-md-1 mb-4 mb-md-0">
                        <img 
                            src={aboutimage} 
                            alt="About Us"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '10px',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease-in-out',
                            }}
                        />
                    </Col>

                    {/* Text Section */}
                    <Col md={6} className="order-md-2 text-md-start text-center">
                        <h2 className="display-4 mb-4" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: '600', color: '#333' }}>
                            Welcome to Our Jewelry World
                        </h2>
                        <p className="lead mb-4" style={{ fontFamily: '"Roboto", sans-serif', fontSize: '1.1rem', color: '#555' }}>
                            At <strong>[Brand Name]</strong>, we specialize in crafting beautiful, high-quality jewelry that celebrates life’s most cherished moments. 
                            Our designs are timeless, elegant, and customizable, allowing you to express yourself with pieces that hold personal significance.
                        </p>
                        
                        <div className="about-section">
                            <h3 style={{ fontFamily: '"Poppins", sans-serif', fontWeight: '500', color: '#333' }}>Our Story</h3>
                            <p style={{ fontFamily: '"Roboto", sans-serif', color: '#555' }}>
                                Founded with the vision to bring elegance and meaning to every piece, <strong>[Brand Name]</strong> started as a small, family-owned business. 
                                Over the years, we’ve expanded our reach globally, but our commitment to quality and customer satisfaction remains the same.
                            </p>

                            <h3 style={{ fontFamily: '"Poppins", sans-serif', fontWeight: '500', color: '#333' }}>Our Mission</h3>
                            <p style={{ fontFamily: '"Roboto", sans-serif', color: '#555' }}>
                                Our mission is simple: to create jewelry that not only enhances your style but also tells a story. Whether it's a special gift for a loved one or a personal treat, we are here to provide you with exceptional pieces that hold emotional value.
                            </p>

                            <h3 style={{ fontFamily: '"Poppins", sans-serif', fontWeight: '500', color: '#333' }}>Our Values</h3>
                            <ul style={{ fontFamily: '"Roboto", sans-serif', color: '#555' }}>
                                <li><strong>Quality:</strong> We believe in offering only the best craftsmanship, using high-quality materials to ensure lasting beauty.</li>
                                <li><strong>Customer Satisfaction:</strong> Your happiness is our priority. We strive to exceed expectations at every touchpoint.</li>
                                <li><strong>Creativity:</strong> Our designs reflect the uniqueness of every individual. We encourage personal expression through our customizable options.</li>
                                <li><strong>Ethical Practices:</strong> We are committed to sustainable practices and ensuring ethical sourcing in everything we do.</li>
                            </ul>
                        </div>

                        <Button 
                            variant="primary" 
                            href="/contact" 
                            size="lg" 
                            className="mt-4"
                            style={{
                                backgroundColor: '#333',
                                borderColor: '#333',
                                fontFamily: '"Poppins", sans-serif',
                                fontWeight: '500',
                            }}
                        >
                            Get In Touch
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutComp;
