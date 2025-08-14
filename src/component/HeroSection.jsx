import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './HeroSection.css';
import girlImage from "../assets/image (7).png";
import HorizontalCard from './Card';
import web from '../assets/webdev.png'
import mobile from '../assets/mobiledev.png'
import embeded from '../assets/embededdev.png'
import aiml from '../assets/AIMLcard.png'

function HeroSection() {
  const carddetails = [{
    id: 1,
    tittle: 'Web Applications',
    description: 'We build fast, modern, and scalable web apps that drive growth and enhance your digital presence. Let’s transform your vision into a powerful web solution',
    img: web,
  },
  {
    id: 2,
    tittle: 'Mobile Applications',
    description: 'Build user-friendly, high-performing native and cross-platform apps that work flawlessly across devices. From idea to deployment, we turn your vision into a powerful mobile reality',
    img: mobile,
  },
  {
    id: 3,
    tittle: 'Embeded and IOT',
    description: 'We design and develop efficient embedded systems tailored for specific hardware needs Our IoT solutions connect devices intelligently, enabling smart data exchange and automation.',
    img: embeded,
  },
  {
    id: 4,
    tittle: 'AIML',
    description: 'AI & ML enable intelligent systems that learn from data, adapt to changes, and make smarter decisions.They help businesses automate processes, predict outcomes, and deliver personalized experiences.',
    img: aiml,
  },
  ];
  return (
    <div className="hero-section py-5">
      <h1 className="mt-2 mb-5 animated fadeInUp text-center">Transforming ideas into reality with precision and passion</h1>
      <Container>
        <Row className="align-items-center">

          {/* Left Side */}
          <Col md={6} className="text-center">
            <img
              src={girlImage} // Replace with actual image path
              alt="Girl"
              className="img-fluid hero-img animated fadeInLeft"
            />
          </Col>

          {/* Right Side */}
          <Col md={6} className="mt-4">
            {carddetails.map((card) => (
              <HorizontalCard
                key={card.id}
                id={card.id}
                title={card.tittle}
                description={card.description}
                cardimage={card.img}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default HeroSection;