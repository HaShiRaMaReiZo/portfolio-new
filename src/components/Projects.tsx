'use client';

import { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Modal } from 'react-bootstrap';
import Image from 'next/image';
import { projects, categories, type Project } from '@/data/projects';
import { useScrollTransition } from '@/hooks/useScrollTransition';

export default function Projects() {
  const { sectionRef, isVisible } = useScrollTransition({ sectionId: 'projects', previousSectionId: 'skills' });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedComponentIndex, setSelectedComponentIndex] = useState<number | null>(null);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className={`section-padding scroll-section ${isVisible ? 'visible' : ''}`}
      style={{ 
        backgroundColor: '#000000',
        minHeight: '100vh'
      }}
    >
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-5 fw-bold text-white mb-3">
              My <span className="text-danger">Projects</span>
            </h2>
            <p className="lead text-light">
              Here are some of my recent work own by me.
            </p>
            <p className="lead text-light">
              A lot of project are not listed here because they are own by company and client.
            </p>
          </Col>
        </Row>

        {/* Category Filter - Only show if there are multiple categories */}
        {categories.length > 1 && (
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
        )}

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
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-100"
                    style={{ 
                      height: '250px', 
                      objectFit: 'cover',
                      cursor: 'pointer'
                    }}
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
                    {project.liveUrl && (
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
                    )}
                    {project.githubUrl && (
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
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Project Modal */}
        <Modal 
          show={selectedProject !== null} 
          onHide={() => {
            setSelectedProject(null);
            setSelectedImageIndex(0);
            setSelectedComponentIndex(null);
          }}
          size="lg"
          centered
        >
          {selectedProject && (() => {
            // Determine which screenshots to show
            const hasComponentScreenshots = selectedProject.components?.some(c => c.screenshots && c.screenshots.length > 0);
            let currentScreenshots: string[] = [];
            
            if (hasComponentScreenshots && selectedComponentIndex !== null && selectedProject.components?.[selectedComponentIndex]?.screenshots) {
              // Show screenshots for selected component
              currentScreenshots = selectedProject.components[selectedComponentIndex].screenshots || [];
            } else if (hasComponentScreenshots && selectedComponentIndex === null) {
              // Show all screenshots from all components
              currentScreenshots = selectedProject.components?.flatMap(c => c.screenshots || []) || [];
            } else {
              // Fallback to main screenshots array or main image
              currentScreenshots = selectedProject.screenshots || [selectedProject.image];
            }
            
            return (
              <>
                <Modal.Header closeButton className="bg-dark text-white">
                  <Modal.Title>{selectedProject.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark">
                  {/* Component Tabs - Show if components have screenshots */}
                  {hasComponentScreenshots && selectedProject.components && (
                    <div className="mb-4">
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        <Button
                          variant={selectedComponentIndex === null ? 'danger' : 'outline-danger'}
                          size="sm"
                          onClick={() => {
                            setSelectedComponentIndex(null);
                            setSelectedImageIndex(0);
                          }}
                          className="rounded-pill"
                        >
                          All Screenshots
                        </Button>
                        {selectedProject.components.map((component, index) => (
                          component.screenshots && component.screenshots.length > 0 && (
                            <Button
                              key={index}
                              variant={selectedComponentIndex === index ? 'danger' : 'outline-danger'}
                              size="sm"
                              onClick={() => {
                                setSelectedComponentIndex(index);
                                setSelectedImageIndex(0);
                              }}
                              className="rounded-pill"
                            >
                              {component.name}
                            </Button>
                          )
                        ))}
                      </div>
                      {selectedComponentIndex !== null && selectedProject.components[selectedComponentIndex] && (
                        <div className="mb-3 p-2 bg-secondary bg-opacity-10 rounded">
                          <small className="text-white">
                            <strong className="text-danger">{selectedProject.components[selectedComponentIndex].name}:</strong>{' '}
                            {selectedProject.components[selectedComponentIndex].description}
                          </small>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Image Gallery */}
                  {currentScreenshots && currentScreenshots.length > 0 ? (
                    <div className="mb-4">
                      <div className="position-relative mb-3" style={{ height: '400px', overflow: 'hidden', borderRadius: '8px', backgroundColor: '#0f0f0f' }}>
                        <Image
                          src={currentScreenshots[selectedImageIndex] || currentScreenshots[0]}
                          alt={`${selectedProject.title} - Screenshot ${selectedImageIndex + 1}`}
                          fill
                          className="object-contain"
                          style={{ borderRadius: '8px' }}
                        />
                        
                        {/* Navigation Buttons */}
                        {currentScreenshots.length > 1 && (
                          <>
                            <Button
                              variant="danger"
                              className="position-absolute start-0 top-50 translate-middle-y"
                              style={{
                                left: '10px',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10,
                                opacity: selectedImageIndex === 0 ? 0.5 : 1,
                                cursor: selectedImageIndex === 0 ? 'not-allowed' : 'pointer'
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                if (selectedImageIndex > 0) {
                                  setSelectedImageIndex(selectedImageIndex - 1);
                                }
                              }}
                              disabled={selectedImageIndex === 0}
                            >
                              <i className="fas fa-chevron-left"></i>
                            </Button>
                            <Button
                              variant="danger"
                              className="position-absolute end-0 top-50 translate-middle-y"
                              style={{
                                right: '10px',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10,
                                opacity: selectedImageIndex === currentScreenshots.length - 1 ? 0.5 : 1,
                                cursor: selectedImageIndex === currentScreenshots.length - 1 ? 'not-allowed' : 'pointer'
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                if (selectedImageIndex < currentScreenshots.length - 1) {
                                  setSelectedImageIndex(selectedImageIndex + 1);
                                }
                              }}
                              disabled={selectedImageIndex === currentScreenshots.length - 1}
                            >
                              <i className="fas fa-chevron-right"></i>
                            </Button>
                          </>
                        )}
                      </div>
                      {currentScreenshots.length > 1 && (
                        <div className="d-flex gap-2 overflow-auto pb-2" style={{ maxWidth: '100%' }}>
                          {currentScreenshots.map((screenshot, index) => (
                            <div
                              key={index}
                              onClick={() => setSelectedImageIndex(index)}
                              className="position-relative"
                              style={{
                                minWidth: '100px',
                                height: '80px',
                                cursor: 'pointer',
                                border: selectedImageIndex === index ? '3px solid #ff0000' : '2px solid transparent',
                                borderRadius: '4px',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                backgroundColor: '#0f0f0f'
                              }}
                            >
                              <Image
                                src={screenshot}
                                alt={`Thumbnail ${index + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="position-relative mb-3" style={{ height: '400px', overflow: 'hidden', borderRadius: '8px', backgroundColor: '#0f0f0f' }}>
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        className="object-contain"
                        style={{ borderRadius: '8px' }}
                      />
                    </div>
                  )}
                
                <p className="text-white mb-3">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>
                
                {/* Components */}
                {selectedProject.components && selectedProject.components.length > 0 && (
                  <div className="mb-3">
                    <strong className="text-white">Components:</strong>
                    {selectedProject.components.map((component, index) => (
                      <Card key={index} className="mt-2 bg-secondary bg-opacity-10 border-0">
                        <Card.Body className="p-3">
                          <h6 className="text-danger mb-2">{component.name}</h6>
                          <p className="text-white small mb-2">{component.description}</p>
                          <div>
                            {component.technologies.map((tech) => (
                              <Badge key={tech} bg="dark" className="me-1 mb-1" style={{ fontSize: '0.7rem' }}>
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                )}
                
                <div className="mb-3">
                  <strong className="text-white">Technologies Used:</strong>
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
              <Modal.Footer className="bg-dark">
                <Button 
                  variant="outline-secondary" 
                  onClick={() => {
                    setSelectedProject(null);
                    setSelectedImageIndex(0);
                    setSelectedComponentIndex(null);
                  }}
                >
                  Close
                </Button>
                {selectedProject.liveUrl && (
                  <Button 
                    variant="danger"
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Project
                  </Button>
                )}
              </Modal.Footer>
              </>
            );
          })()}
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
