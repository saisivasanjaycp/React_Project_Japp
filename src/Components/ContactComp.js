import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactComp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        feedback: '',
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    // Form validation function
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.contact) {
            newErrors.contact = 'Contact number is required';
        } else if (!/^\d{10}$/.test(formData.contact)) {
            newErrors.contact = 'Contact number should be 10 digits';
        }
        if (!formData.feedback) newErrors.feedback = 'Feedback is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setSuccessMessage('Your message has been sent successfully!');
            setFormData({
                name: '',
                email: '',
                contact: '',
                feedback: '',
            });
            setErrors({});
        }
    };

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <section id="contact" style={{ padding: '60px 0', backgroundColor: '#f9f9f9' }}>
            <Container>
                <Row className="mb-5">
                    {/* Contact Form Section */}
                    <Col md={6}>
                        <h2 className="mb-4">Get in Touch</h2>

                        {successMessage && (
                            <Alert variant="success">{successMessage}</Alert>
                        )}

                        <Form onSubmit={handleSubmit}>
                            {/* Name Field */}
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    isInvalid={!!errors.name}
                                    placeholder="Enter your name"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.name}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* Email Field */}
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                    placeholder="Enter your email"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* Contact Number Field */}
                            <Form.Group controlId="contact">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    isInvalid={!!errors.contact}
                                    placeholder="Enter your contact number"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.contact}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* Feedback Field */}
                            <Form.Group controlId="feedback">
                                <Form.Label>Feedback</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    name="feedback"
                                    value={formData.feedback}
                                    onChange={handleChange}
                                    isInvalid={!!errors.feedback}
                                    placeholder="Enter your feedback"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.feedback}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* Submit Button */}
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>

                    {/* Contact Details Section */}
                    <Col md={6}>
                        <h2 className="mb-4">Our Location</h2>
                        <div>
                            <div className="mb-4">
                                <FaMapMarkerAlt size={30} style={{ color: '#333' }} />
                                <p>123, Jewelry Street, New York, USA</p>
                            </div>
                            <div className="mb-4">
                                <FaPhoneAlt size={30} style={{ color: '#333' }} />
                                <p>+1 (234) 567-890</p>
                            </div>
                            <div className="mb-4">
                                <FaEnvelope size={30} style={{ color: '#333' }} />
                                <p>contact@jewelryshop.com</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Google Maps Location */}
                <Row>
                    <Col>
                        <div className="google-map" style={{ height: '400px', overflow: 'hidden' }}>
                            <iframe
                                title="Google Map Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7372642328326!2d-74.00601538459487!3d40.7127767793309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3d378d3e6b%3A0x5bba290a1e87c8e9!2sNew+York%2C+NY!5e0!3m2!1sen!2sus!4v1612511433255!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{
                                    border: '0',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactComp;
