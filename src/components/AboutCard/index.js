import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Col,
} from "reactstrap";

import image from "../../assets/images/cover-photo.png";
import "./style.css";

function AboutCard() {
  return (
    <>
      <Container>
        <Card className="mx-auto">
          <Row>
            <Col md="2">
              <CardImg
                className="image m-2"
                top
                width="100%"
                src={image}
                alt="Image of Noor Smiling"
              />
            </Col>
            <Col md="10">
              <CardBody>
                <CardTitle className="text-success font-weight-bold">
                  <Link to="/contact" className="link-color">
                    <h1 className="link-color">Noor Mir</h1>
                  </Link>
                  <CardSubtitle className="text-monospace">
                    Developer
                  </CardSubtitle>
                  <CardText className="mt-3">
                    {" "}
                    Univerity of Miami Web Programming gradute who is well
                    knowledged in libraries and frameworks such as Node.js,
                    Sequel, React, and MongoDb using javascript. I am currently
                    seeking for a professional environment in where I can
                    cooperate with well constructed technogolies to help improve
                    society.
                  </CardText>
                  <Link to="/portfolio" className="btn m-2 btn-success">
                    View Portfolio
                  </Link>
                  <Link to="/resume" className="btn m-2 btn-success">
                    View Resume
                  </Link>
                </CardTitle>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}

export default AboutCard;
