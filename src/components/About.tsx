'use client';

import { useState, useEffect, useRef, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useScrollTransition } from '@/hooks/useScrollTransition';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

export default function About() {
  const [visibleSkills, setVisibleSkills] = useState<boolean[]>([]);
  const { sectionRef, isVisible } = useScrollTransition({ sectionId: 'about', previousSectionId: 'home' });
  const { sectionRef: skillsSectionRef, isVisible: skillsVisible } = useScrollTransition({ sectionId: 'skills', previousSectionId: 'about' });

  const skills: Skill[] = [
    { name: 'JavaScript/TypeScript', percentage: 70, color: '#ff0000' },
    { name: 'React/Next.js', percentage: 65, color: '#ff0000' },
    { name: 'Node.js', percentage: 65, color: '#ff0000' },
    { name: 'HTML/CSS', percentage: 70, color: '#ff0000' },
    { name: 'Bootstrap/Tailwind', percentage: 65, color: '#ff0000' },
    { name: 'Flutter', percentage: 80, color: '#ff0000' },
    { name: 'PHP / Laravel', percentage: 65, color: '#ff0000' },
    { name: 'MySQL', percentage: 60, color: '#ff0000' },
    { name: 'PostgreSQL', percentage: 60, color: '#ff0000' },
  ];

  useEffect(() => {
    // Observer for individual skill items (only when Skills section is visible)
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && skillsVisible) {
            const skillIndex = parseInt(entry.target.getAttribute('data-skill-index') || '0');
            setVisibleSkills(prev => {
              const newVisible = [...prev];
              newVisible[skillIndex] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillElements = document.querySelectorAll('.skill-item');
    skillElements.forEach((element) => skillObserver.observe(element));

    return () => {
      skillObserver.disconnect();
    };
  }, [skillsVisible]);

  return (
    <Fragment>
    <section 
      ref={sectionRef}
      id="about" 
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
              About <span className="text-danger">Me</span>
            </h2>
            <p className="lead text-light">
              Get to know more about my background and expertise
            </p>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <Card className="border-0 shadow-lg card-hover">
              <Card.Body className="p-4">
                <h3 className="h4 text-white mb-3">My Story</h3>
                <p className="text-white mb-3">
                  I'm a passionate full-stack developer with over 2 years of experience 
                  in creating digital solutions that make a difference. My journey began 
                  with a curiosity about how websites work, and it has evolved into a 
                  deep passion for crafting exceptional user experiences.
                </p>
                <p className="text-white mb-3">
                  I specialize in modern web technologies and have a strong foundation 
                  in both frontend and backend development. I love turning complex 
                  problems into simple, beautiful, and intuitive solutions.
                </p>
                <div className="row g-3">
                  <div className="col-6">
                    <div className="text-center">
                      <h4 className="text-danger mb-0">20+</h4>
                      <small className="text-light">Projects Completed</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center">
                      <h4 className="text-danger mb-0">2+</h4>
                      <small className="text-light">Years Experience</small>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <div className="position-relative">
              <div 
                className="bg-danger rounded-circle position-absolute"
                style={{
                  width: '200px',
                  height: '200px',
                  top: '20px',
                  left: '20px',
                  opacity: 0.1,
                  zIndex: 1
                }}
              />
              <div 
                className="bg-warning rounded-circle position-absolute"
                style={{
                  width: '150px',
                  height: '150px',
                  bottom: '20px',
                  right: '20px',
                  opacity: 0.1,
                  zIndex: 1
                }}
              />
              <div className="position-relative z-2">
                <img
                  src="/about-image.jpg"
                  alt="About Me"
                  className="img-fluid rounded shadow-lg"
                  style={{ borderRadius: '20px' }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Skills Section - Separate section for scroll transitions */}
    <section 
      id="skills" 
      ref={skillsSectionRef}
      className={`section-padding scroll-section ${skillsVisible ? 'visible' : ''}`}
      style={{ 
        backgroundColor: '#000000',
        minHeight: '100vh'
      }}
    >
      <Container>
        <Row>
          <Col>
            <Card className="border-0 shadow-lg">
              <Card.Body className="p-5">
                <h3 className="h4 text-center text-white mb-4">
                  Technical <span className="text-danger">Skills</span>
                </h3>
                <Row>
                  {skills.map((skill, index) => (
                    <Col md={6} lg={4} key={skill.name} className="mb-4">
                      <div 
                        className="skill-item"
                        data-skill-index={index}
                      >
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="fw-medium text-white">{skill.name}</span>
                          <span className="text-white">{skill.percentage}%</span>
                        </div>
                        <div className="skill-bar">
                          <div
                            className="skill-progress"
                            style={{
                              width: visibleSkills[index] ? `${skill.percentage}%` : '0%',
                              background: `linear-gradient(45deg, ${skill.color}, ${skill.color}dd)`
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Additional Info Cards */}
        <Row className="mt-5">
          <Col md={4} className="mb-4">
            <Card className="border-0 shadow-sm card-hover h-100">
              <Card.Body className="text-center p-4">
                <div 
                  className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: '60px', height: '60px' }}
                >
                  <i className="fas fa-code text-danger fs-4"></i>
                </div>
                <h5 className="text-white mb-3">Clean Code</h5>
                <p className="text-white small">
                  I write maintainable, scalable, and well-documented code 
                  following industry best practices.
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
                  <i className="fas fa-mobile-alt text-warning fs-4"></i>
                </div>
                <h5 className="text-white mb-3">Responsive Design</h5>
                <p className="text-white small">
                  Creating beautiful, responsive interfaces that work 
                  perfectly across all devices and screen sizes.
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
                  <i className="fas fa-rocket text-success fs-4"></i>
                </div>
                <h5 className="text-white mb-3">Performance</h5>
                <p className="text-white small">
                  Optimizing applications for speed and efficiency 
                  to deliver the best user experience possible.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    </Fragment>
  );
}
