import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import manImage from '../assets/man.png';
import womanImage from '../assets/women.png';

const MissionVisionSection = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #FDFBFB, #EBEDEE)',
        padding: '60px 0',
      }}
    >
      <Container>
        {/* Title */}
        <h2 className="text-center mb-5 fw-bold display-5">
          Our <span style={{ color: '#B88E2F' }}>Mission</span> &{' '}
          <span style={{ color: '#4B9CD3' }}>Vision</span>
        </h2>

        <Row className="g-4 justify-content-center">
          {/* Mission */}
          <Col xs={12} md={6}>
            <div
              className="d-flex flex-column flex-md-row align-items-center p-4 rounded-4 shadow-lg"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(6px)',
                minHeight: '380px',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              {/* Text */}
              <div className="flex-grow-1 pe-md-4">
                <h3
                  className="fw-bold mb-3"
                  style={{ fontSize: '1.9rem', color: '#1A1A1A', letterSpacing: '0.5px' }}
                >
                  {/* 🎯 Our Mission */}
                  🎯 Our Mission to Top Success
                </h3>
                <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: '1.7' }}>
                  "At SM Technologies, our mission is to deliver innovative, high-quality technology solutions that bridge the gap between ideas and execution. We are committed to fostering creativity, driving digital transformation, and empowering our clients with practical, future-ready solutions that lead to lasting success."
                </p>
              </div>

              {/* Image */}
              <div className="text-center">
                <img
                  src={manImage}
                  alt="Man"
                  style={{
                    width: '230px',
                    height: 'auto',
                    borderRadius: '12px',
                    objectFit: 'cover',
                    filter: 'drop-shadow(5px 5px 15px rgba(0,0,0,0.4))',
                    animation: 'float 3s ease-in-out infinite',
                  }}
                />
              </div>
            </div>
          </Col>

          {/* Vision */}
          <Col xs={12} md={6}>
            <div
              className="d-flex flex-column flex-md-row align-items-center p-4 rounded-4 shadow-lg"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(6px)',
                minHeight: '380px',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              {/* Text */}
              <div className="flex-grow-1 pe-md-4">
                <h3
                  className="fw-bold mb-3"
                  style={{ fontSize: '1.9rem', color: '#1A1A1A', letterSpacing: '0.5px' }}
                >
                  🚀 Our Vision to Complete Goal
                </h3>
                <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: '1.7' }}>
                  "To be the leading academic project partner recognized for delivering creativity, quality, and technical expertise, fostering innovation, empowering problem-solvers, and inspiring technology leaders who drive positive change and sustainable growth across the globe."
                </p>
              </div>

              {/* Image */}
              <div className="text-center">
                <img
                  src={womanImage}
                  alt="Woman"
                  style={{
                    width: '230px',
                    height: 'auto',
                    borderRadius: '12px',
                    objectFit: 'cover',
                    filter: 'drop-shadow(5px 5px 15px rgba(0,0,0,0.4))',
                    animation: 'float 3s ease-in-out infinite',
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>

        {/* Floating animation */}
        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
              100% { transform: translateY(0px); }
            }
          `}
        </style>
      </Container>
    </div>
  );
};
export default MissionVisionSection;