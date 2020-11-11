import React from "react";
import { Container } from "reactstrap";
import Nav from "../../components/Header";
import "./style.css";

function Home() {
  return (
    <div>
      <Container>
        <Nav />
        <section id="home" className="intro">
          <div id="pt" className="canvas"></div>
          <div className="flex">
            <div className="text">
              <h3>
                Hello, I am <span className="highlight">Noor Mir</span>
              </h3>
              <br />
              <h4>
                I am a graduated student from the University of Miami and is
                excited to be a Web Developer.
              </h4>
              <br />
              <br />
              <h5>
                Thank you for taking the time out to visit my Website.
              </h5>
            </div>
          </div>
          {/* Footer goes here */}
        </section>
      </Container>
    </div>
  );
}
export default Home;
