import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Container,
} from "reactstrap";

import data from "../../data/credData.json";
import "./style.css";

function CredCard() {
return (
  <Container>
    <Row>
      <Col>
        <CardTitle>
          <h4>Credentials</h4>
        </CardTitle>
      </Col>
    </Row>
  </Container>
);


}

export default CredCard;