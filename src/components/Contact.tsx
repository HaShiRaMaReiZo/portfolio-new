'use client';

import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'zwemannhtet65@gmail.com',
      link: 'mailto:zwemannhtet65@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+95 9792627041',
      link: 'tel:+959792627041'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Yangon, Myanmar',
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      url: 'https://linkedin.com',
      color: '#0077b5'
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      url: 'https://twitter.com',
      color: '#1da1f2'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://instagram.com',
      color: '#e4405f'
    }
  ];

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: '#000000' }}>
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-5 fw-bold text-white mb-3">
              Get In <span className="text-danger">Touch</span>
            </h2>
            <p className="lead text-white">
              Ready to start your next project? Let's work together!
            </p>
          </Col>
        </Row>

        <Row>
          {/* Contact Form */}
          <Col lg={8} className="mb-5 mb-lg-0">
            <Card className="border-0 shadow-lg">
              <Card.Body className="p-5">
                <h3 className="h4 text-white mb-4">Send me a message</h3>
                
                {submitStatus === 'success' && (
                  <Alert variant="success" className="mb-4">
                    <i className="fas fa-check-circle me-2"></i>
                    Thank you! Your message has been sent successfully.
                  </Alert>
                )}

                {submitStatus === 'error' && (
                  <Alert variant="danger" className="mb-4">
                    <i className="fas fa-exclamation-circle me-2"></i>
                    Sorry, there was an error sending your message. Please try again.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label className="fw-medium text-white">Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="border-2"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label className="fw-medium text-white">Email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                          className="border-2"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium text-white">Subject *</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                      className="border-2"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-medium text-white">Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project..."
                      className="border-2"
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="danger"
                    size="lg"
                    disabled={isSubmitting}
                    className="btn-custom px-5 py-3"
                    style={{
                      backgroundColor: '#ff0000',
                      borderColor: '#ff0000',
                      color: 'white',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (!e.currentTarget.disabled) {
                        e.currentTarget.style.backgroundColor = 'white';
                        e.currentTarget.style.color = '#ff0000';
                        e.currentTarget.style.borderColor = '#ff0000';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!e.currentTarget.disabled) {
                        e.currentTarget.style.backgroundColor = '#ff0000';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.borderColor = '#ff0000';
                      }
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane me-2"></i>
                        Send Message
                      </>
                    )}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Info */}
          <Col lg={4}>
            <div className="sticky-top" style={{ top: '100px' }}>
              <Card className="border-0 shadow-lg mb-4">
                <Card.Body className="p-4">
                  <h4 className="h5 text-white mb-4">Contact Information</h4>
                  {contactInfo.map((info, index) => (
                    <div key={index} className="d-flex align-items-center mb-3">
                      <div 
                        className="bg-danger bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{ width: '45px', height: '45px' }}
                      >
                        <i className={`${info.icon} text-danger`}></i>
                      </div>
                      <div>
                        <h6 className="mb-0 text-white">{info.title}</h6>
                        <a 
                          href={info.link}
                          className="text-white text-decoration-none"
                          style={{ fontSize: '0.9rem' }}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </Card.Body>
              </Card>

              <Card className="border-0 shadow-lg">
                <Card.Body className="p-4">
                  <h4 className="h5 text-white mb-4">Follow Me</h4>
                  <div className="d-flex flex-wrap gap-2">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        style={{ 
                          backgroundColor: social.color,
                          width: '45px',
                          height: '45px',
                          fontSize: '1.2rem'
                        }}
                        title={social.name}
                      >
                        <i className={social.icon}></i>
                      </a>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>

        {/* Additional Info */}
        <Row className="mt-5">
          <Col md={4} className="mb-4">
            <Card className="border-0 shadow-sm card-hover h-100">
              <Card.Body className="text-center p-4">
                <div 
                  className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: '60px', height: '60px' }}
                >
                  <i className="fas fa-clock text-danger fs-4"></i>
                </div>
                <h5 className="text-white mb-3">Quick Response</h5>
                <p className="text-white small">
                  I typically respond to messages within 24 hours during business days.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="border-0 shadow-sm card-hover h-100">
              <Card.Body className="text-center p-4">
                <div 
                  className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: '60px', height: '60px' }}
                >
                  <i className="fas fa-handshake text-success fs-4"></i>
                </div>
                <h5 className="text-white mb-3">Collaboration</h5>
                <p className="text-white small">
                  I love working with teams and individuals to bring ideas to life.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="border-0 shadow-sm card-hover h-100">
              <Card.Body className="text-center p-4">
                <div 
                  className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: '60px', height: '60px' }}
                >
                  <i className="fas fa-lightbulb text-warning fs-4"></i>
                </div>
                <h5 className="text-white mb-3">Innovation</h5>
                <p className="text-white small">
                  Always looking for new challenges and innovative solutions.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
