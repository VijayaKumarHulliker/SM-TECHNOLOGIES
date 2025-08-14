import React from 'react';
import { useParams } from 'react-router-dom';
import servicesData from '../Data/ServicesData';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaStar, } from 'react-icons/fa';
import './Webdevpage.css'
import Float from './Float';

function ServiceDetailPage() {
  const { id } = useParams();
  console.log(id);
  const service = servicesData.find(s => s.id.toString() === id);

  if (!service) {
    return <h2 style={{ textAlign: "center", margin: "50px 0" }}>Service not found</h2>;
  }

  return (
    <div>
      <Float />
      {/* Hero Section */}
      <div className="Webdevpage">
        <img className="img" src={service.heroImage} alt={service.title} />
        <div className="overlay"></div>
        <div className="center-text">{service.title.toUpperCase()}</div>
      </div>

      {/* Content Section */}
      <div style={{ backgroundColor: "#fff", padding: "40px 0" }}>
        <Container fluid>
          <Row>
            {/* Left Image with overlay */}
            <Col md={6} className="p-0 position-relative">
              <img
                src={service.icon}
                alt={service.title}
                className="w-100 h-100"
                style={{ objectFit: "cover", height: "100%" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.4)",
                }}
              ></div>
              <div className='serviceonlogo'
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(5px)",
                  padding: "30px",
                  borderRadius: "12px",
                  textAlign: "center",
                  color: "#fff",
                  width: "70%",
                }}
              >
                <div className="serviceonlogo-icon"
                  style={{
                    backgroundColor: "#00bcd4",
                    borderRadius: "50%",
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 15px auto",
                  }}
                >
                  <span style={{ fontSize: "2rem", fontWeight: "bold" }}>SM</span>
                </div>
                <h4 style={{ fontWeight: "bold" }}>BUILDING INNOVATION</h4>
                <p>Delivering scalable and high-performance applications</p>
              </div>
            </Col>

            {/* Right Text */}
            <Col md={6} className="d-flex flex-column justify-content-center p-5">
              <h6 style={{ color: "#007bff", fontWeight: "bold" }}>{service.heading}</h6>
              <h2>{service.subheading}</h2>
              <p>{service.description}</p>

              <Row className="mt-3">
                {service.features.map((feature, index) => (
                  <Col xs={6} key={index}>
                    <p>
                      {index === 0 && <FaStar color="#00bcd4" />}
                      {index === 1 && <FaStar color="#00bcd4" />}
                      {index === 2 && <FaStar color="#00bcd4" />}
                      {index === 3 && <FaStar color="#00bcd4" />}
                      {" "}{feature}
                    </p>
                  </Col>
                ))}
              </Row>

              {/* Contact */}
              <div className="mt-4 d-flex align-items-center gap-3">
                <Button variant="dark" className="px-4" as="a" href="https://docs.google.com/forms/d/e/1FAIpQLSeiAejWb32vx2XL3bu65yoSToiarwsqaaMBJKgWoO7ARfpe6Q/viewform" target="_blank" rel="noopener noreferrer">Contact Us →</Button>
                <div className="d-flex align-items-center">
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default ServiceDetailPage;