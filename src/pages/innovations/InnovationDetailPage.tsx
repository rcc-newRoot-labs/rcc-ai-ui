import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReadmeViewer from "./ReadmeViewer";
//import ReadmeViewer from "./ReadMeViewer";

const InnovationDetailPage: React.FC = () => {
  return (
   
    <Container fluid className="vh-100 d-flex align-items-center">
  
      <Row className="w-100">
        <Col md={5} className="p-4 border-end ">
          <h3 className="card-title">Readme Viewer Section</h3>
          <Container className="readmeViewer-content border border-dark border-3   d-flex justify-content-center align-items-center min-vh-50 overflow-auto">
            <ReadmeViewer />
          </Container>   
        </Col>
        <Col md={7} className="p-4 ">
          <h3 className="card-title">Widget Viewer Section</h3>
           <Container className="widgetViewer-content d-flex border border-dark border-3 justify-content-center align-items-center min-vh-50 overflow-auto">
            <div>This is place holder for the widget interaction...</div>
          </Container> 
        </Col>
      </Row>
    </Container>
  
  );
};

export default InnovationDetailPage;
