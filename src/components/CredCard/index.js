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
            <h4> Credentials </h4>
          </CardTitle>
          <ListGroup>
            <CardText>
              {data.map((cred, index) => {
                return (
                  <ListGroupItem key={index} value={cred}>
                    <p>
                      {cred.type}
                      <br />
                      <a href={cred.link} className="link-color">
                        {" "}
                        {cred.cred}
                      </a>
                    </p>
                  </ListGroupItem>
                );
              })}
            </CardText>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default CredCard;
