import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <p className="mb-0">
              © {currentYear} <span className="text-danger fw-bold">Zwe Mhan Htet</span>. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-0 text-white">
              Built with <span className="text-danger">❤</span> using Next.js & Bootstrap
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
