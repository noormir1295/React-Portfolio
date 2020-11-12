import React from 'react';
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
import data from "../../data/skills.json"

function SkillsCard() {
    return (
        <Container>
            <Row>
                {data.map((type) => {
                    return(
                        <Col>
                        <CardTitle>
                    <h4>{type.category}</h4>
                        </CardTitle>
                        <ListGroup>
                            <CardText>
                            {type.skills.map((item)=> {
                                return(
                                    <ListGroupItem key={item}>
                                        {item}
                                    </ListGroupItem>
                                )
                            })}
                            </CardText>
                        </ListGroup>
                        </Col>
                    )
                })}
             </Row>  
        </Container>
    )
}

export default  SkillsCard;
