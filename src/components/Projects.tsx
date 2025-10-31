'use client';

import { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Modal } from 'react-bootstrap';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  featured: boolean;
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      image: '/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'web',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: '/project2.jpg',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'web',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts and interactive maps.',
      image: '/project3.jpg',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Bootstrap'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'web',
      featured: false
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication and transaction management.',
      image: '/project4.jpg',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'mobile',
      featured: true
    },
    {
      id: 5,
      title: 'Data Visualization Tool',
      description: 'An interactive data visualization platform for business analytics and reporting.',
      image: '/project5.jpg',
      technologies: ['D3.js', 'Python', 'Flask', 'MySQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'data',
      featured: false
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media management dashboard with analytics and scheduling features.',
      image: '/project6.jpg',
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Chart.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'web',
      featured: false
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'data', label: 'Data Science' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: '#000000' }}>
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-5 fw-bold text-white mb-3">
              My <span className="text-danger">Projects</span>
            </h2>
            <p className="lead text-light">
              Here are some of my recent work and side projects
            </p>
          </Col>
        </Row>

        {/* Category Filter */}
        <Row className="mb-5">
          <Col className="text-center">
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.key}
                  variant={selectedCategory === category.key ? 'light' : 'danger'}
                  onClick={() => setSelectedCategory(category.key)}
                  className="px-4 py-2 rounded-pill"
                  style={{
                    transition: 'all 0.3s ease',
                    backgroundColor: selectedCategory === category.key ? 'white' : '#ff0000',
                    color: selectedCategory === category.key ? '#ff0000' : 'white',
                    border: selectedCategory === category.key ? '2px solid #ff0000' : 'none'
                  }}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Projects Grid */}
        <Row>
          {filteredProjects.map((project) => (
            <Col lg={4} md={6} className="mb-4" key={project.id}>
              <Card 
                className="border-0 shadow-lg card-hover h-100"
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="position-relative overflow-hidden">
                  <Card.Img 
                    variant="top" 
                    src={project.image}
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  {project.featured && (
                    <Badge 
                      bg="warning" 
                      className="position-absolute top-0 end-0 m-3"
                      style={{ fontSize: '0.8rem' }}
                    >
                      Featured
                    </Badge>
                  )}
                  <div 
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{
                      background: 'rgba(220, 53, 69, 0.9)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '0';
                    }}
                  >
                    <Button 
                      variant="danger" 
                      size="lg"
                      style={{
                        backgroundColor: '#ff0000',
                        borderColor: '#ff0000',
                        color: 'white'
                      }}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                
                <Card.Body className="p-4">
                  <h5 className="text-white mb-3">{project.title}</h5>
                  <p className="text-white mb-3">{project.description}</p>
                  
                  <div className="mb-3">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        bg="dark" 
                        text="light"
                        className="me-2 mb-1"
                        style={{ fontSize: '0.75rem' }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="d-flex gap-2">
                    <Button 
                      variant="outline-danger" 
                      size="sm"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fas fa-external-link-alt me-1"></i>
                      Live
                    </Button>
                    <Button 
                      variant="outline-secondary" 
                      size="sm"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fab fa-github me-1"></i>
                      Code
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Project Modal */}
        <Modal 
          show={selectedProject !== null} 
          onHide={() => setSelectedProject(null)}
          size="lg"
          centered
        >
          {selectedProject && (
            <>
              <Modal.Header closeButton>
                <Modal.Title>{selectedProject.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="img-fluid rounded mb-3"
                />
                <p className="text-light mb-3">{selectedProject.description}</p>
                <div className="mb-3">
                  <strong>Technologies Used:</strong>
                  <div className="mt-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        bg="danger" 
                        className="me-2 mb-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button 
                  variant="outline-secondary" 
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </Button>
                <Button 
                  variant="danger"
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live Project
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal>

        {/* Call to Action */}
        <Row className="mt-5">
          <Col className="text-center">
            <Card className="border-0 bg-danger text-white">
              <Card.Body className="p-5">
                <h3 className="mb-3">Interested in Working Together?</h3>
                <p className="mb-4 opacity-90">
                  I'm always open to discussing new opportunities and interesting projects.
                </p>
                <Button 
                  variant="light" 
                  size="lg"
                  href="#contact"
                  className="px-4 py-2"
                >
                  Let's Talk
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
