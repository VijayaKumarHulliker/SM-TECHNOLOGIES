import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './card.css';

function HorizontalCard({ id, title, description, cardimage }) {
  const navigate = useNavigate();
  const handleViewMore = () => {
    navigate(`/services/${id}`);
  };

  return (
    <Card className="mb-3 horizontal-card">
      <Row className="gx-5">
        <Col md={4}>
          <Card.Img src={cardimage} alt={title} className="horizontal-card-img" />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title><strong>{title}</strong></Card.Title>
            <Card.Text>{description}</Card.Text>

            {/* Only one button for this card */}
            <Button
              variant="primary"
              onClick={handleViewMore}
            >
              View More <FaArrowRight size={20} color="#fff" />
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
export default HorizontalCard;