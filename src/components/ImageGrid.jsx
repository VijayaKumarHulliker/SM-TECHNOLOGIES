import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "./ImageGrid.css"; // We’ll add the hover effect here
import image1 from "../assets/FinanceBank.png";
import image2 from "../assets/GoodsManage.png";
import image3 from "../assets/Textile.png";
import image4 from "../assets/FoodIndus.png";
import image5 from "../assets/Medical.png";
import image6 from "../assets/PublicSector.png";
import image7 from "../assets/E-Commerce.png";
import image8 from "../assets/Logistics.png";


// Example data
const imageData = [
  { src: image1, title: "Bank-Finance" },
  { src: image2, title: "Goods Management" },
  { src: image3, title: "Textile Industries" },
  { src: image4, title: "Food Industries" },
  { src: image5, title: "Medical-Pharma" },
  { src: image6, title: "Public Sector" },
  { src: image7, title: "E-Commerce" },
  { src: image8, title: "Logistics Expertise" },
];

function ShapeExample() {
  return (<>
    <h2 className="text-center mb-5 fw-bold display-5">
      We <span style={{ color: '#B88E2F' }}>Expertise  </span>
      <span style={{ color: '#4B9CD3' }}>In</span>
    </h2>

    <Container className="py-5">
      <Row className="g-4">
        {imageData.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={3}>
            <div className="image-wrapper">
              <Image src={item.src} style={{ height: '200px' }} fluid />
              <div className="image-title">{item.title}</div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </>
  );
}
export default ShapeExample;