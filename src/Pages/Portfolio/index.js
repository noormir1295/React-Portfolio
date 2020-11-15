import React from "react";
import { Container, Row } from "reactstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardContainer from "../../components/CardContainer";

import db from "../../data/portfolioDB.json";

function Portfolio() {
  return (
    <>
      <Header />
      <Container>
        <h1> Portfolio </h1>
        <h3 className="mt-4"> Current Work </h3>
        <Row>
          {db.map((data) => {
              console.log(data);
            return (
              <CardContainer
                key={data.id}
                title={data.title}
                img={data.img}
                website={data.website}
                repo={data.repo}
                desc={data.description}
              />
            );
          })}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Portfolio;
