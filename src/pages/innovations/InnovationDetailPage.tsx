import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const InnovationDetailPage: React.FC = () => {
  return (
   
    <Container fluid className="vh-100 d-flex align-items-center">
      <Row className="w-100">
        <Col md={6} className="p-4 border-end">
          <h3>Left Section</h3>
          
        </Col>
        <Col md={6} className="p-4">
          <h3>Right Section</h3>
          
        </Col>
      </Row>
    </Container>
  
  );
};

export default InnovationDetailPage;
