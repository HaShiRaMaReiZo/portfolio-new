'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <Navbar 
        expand="lg" 
        fixed="top" 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'shadow-lg' 
            : 'bg-transparent'
        }`}
        style={{ 
          transition: 'all 0.3s ease',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          backgroundColor: isScrolled ? '#0f0f0f' : 'transparent'
        }}
      >
        <Container>
          <Navbar.Brand 
            as={Link} 
            href="#home"
            className="fw-bold fs-3 text-danger"
            style={{ textShadow: '0 0 10px rgba(255, 0, 0, 0.3)' }}
          >
            Portfolio
          </Navbar.Brand>
          
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav"
            onClick={() => setShowOffcanvas(true)}
            className="border-0"
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navItems.map((item) => (
                <Nav.Link
                  key={item.href}
                  href={item.href}
                  className="mx-2 fw-medium text-white"
                  style={{
                    position: 'relative',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#dc3545';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'white';
                  }}
                >
                  {item.label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile Offcanvas */}
      <Offcanvas 
        show={showOffcanvas} 
        onHide={() => setShowOffcanvas(false)}
        placement="end"
        className="w-75"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold text-danger">
            Portfolio
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {navItems.map((item) => (
              <Nav.Link
                key={item.href}
                href={item.href}
                className="py-3 fw-medium text-dark"
                onClick={() => setShowOffcanvas(false)}
                style={{
                  borderBottom: '1px solid rgb(0, 0, 0)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f8f9fa';
                  e.currentTarget.style.color = '#dc3545';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#212529';
                }}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <main>{children}</main>
      <Footer />
    </>
  );
}
