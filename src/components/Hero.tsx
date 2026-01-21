'use client';

import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';

export default function Hero() {
  const texts = ['Full Stack Developer', 'Mobile App Developer', 'UI/UX Designer', 'Problem Solver'];
  
  const [currentText, setCurrentText] = useState(texts[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(texts[0].length);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < texts[textIndex].length) {
        setCurrentText(texts[textIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(texts[textIndex].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === texts[textIndex].length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, isMounted]);

  // Use currentText directly to prevent hydration mismatch
  const displayText = currentText;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-vh-100 d-flex align-items-center"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <div 
        className="position-absolute w-100 h-100"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.3
        }}
      />
      
      <Container className="position-relative z-1">
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="text-white">
            <div className="fade-in-up">
              <h1 className="display-4 fw-bold mb-4">
                Hi, I'm <span className="text-danger">Zwe Mhan Htet</span>
              </h1>
              
              <div className="mb-4">
                <h2 className="h3 mb-0">
                  I'm a{' '}
                  <span 
                    className="text-danger fw-bold"
                    style={{
                      borderRight: '2px solid #ff0000',
                      paddingRight: '5px',
                      animation: 'blink 1s infinite'
                    }}
                  >
                    {displayText}
                  </span>
                </h2>
              </div>
              
              <p className="lead mb-4 opacity-90">
                Passionate about creating exceptional digital experiences through 
                innovative web development and thoughtful design. I specialize in 
                building scalable applications that make a difference.
              </p>
              
              <div className="d-flex flex-wrap gap-3 mb-4">
                <Button 
                  variant="danger" 
                  size="lg" 
                  className="btn-custom px-4 py-3"
                  onClick={() => scrollToSection('projects')}
                  style={{
                    backgroundColor: '#ff0000',
                    borderColor: '#ff0000',
                    color: 'white',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.color = '#ff0000';
                    e.currentTarget.style.borderColor = '#ff0000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ff0000';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.borderColor = '#ff0000';
                  }}
                >
                  View My Work
                </Button>
                <Button 
                  variant="danger" 
                  size="lg" 
                  className="px-4 py-3"
                  onClick={() => scrollToSection('contact')}
                  style={{
                    borderRadius: '25px',
                    transition: 'all 0.3s ease',
                    backgroundColor: 'transparent',
                    borderColor: '#ff0000',
                    color: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.color = '#ff0000';
                    e.currentTarget.style.borderColor = '#ff0000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.borderColor = '#ff0000';
                  }}
                >
                  Get In Touch
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="d-flex gap-3">
                <a 
                  href="https://github.com/HaShiRaMaReiZo" 
                  className="social-icon github"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a 
                  href="https://www.linkedin.com/in/zwe-mann-htet" 
                  className="social-icon linkedin"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a 
                    href="https://t.me/erickboyle" 
                  className="social-icon telegram"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-telegram"></i>
                </a>
                <a 
                  href="https://www.instagram.com/zwe_mann_htet/" 
                  className="social-icon instagram"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a 
                  href="viber://chat?number=+959792627041" 
                  className="social-icon viber"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-viber"></i>
                </a>
              </div>
            </div>
          </Col>
          
          <Col lg={6} className="text-center">
            <div className="fade-in-up">
              <div 
                className="position-relative d-inline-block"
                style={{
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  animation: 'float 6s ease-in-out infinite'
                }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Profile Picture"
                  width={400}
                  height={400}
                  className="img-fluid"
                  style={{
                    objectFit: 'cover',
                    borderRadius: '50%'
                  }}
                  priority
                />
                {/* Floating elements */}
                <div 
                  className="position-absolute"
                  style={{
                    top: '10%',
                    right: '10%',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    animation: 'float 3s ease-in-out infinite reverse'
                  }}
                />
                <div 
                  className="position-absolute"
                  style={{
                    bottom: '20%',
                    left: '5%',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    animation: 'float 4s ease-in-out infinite'
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* Scroll indicator */}
      <div 
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
        style={{ animation: 'bounce 2s infinite' }}
      >
        <div 
          className="text-white"
          style={{ cursor: 'pointer' }}
          onClick={() => scrollToSection('about')}
        >
          <i className="fas fa-chevron-down fs-4"></i>
        </div>
      </div>
      
    </section>
  );
}
