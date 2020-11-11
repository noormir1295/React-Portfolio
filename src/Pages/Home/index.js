import React from "react";
import { Container, Row } from 'reactstrap';

import './style.css'
import Header from '../../components/Header';


const Home = () => {
    return (
      <div>
        <Container>
          <Header />
          <Row className="m-5">
            <section id="home" className="flex height-fix">
              <div id="pt" className="canvas"></div>

              <div className="flex">
                <div className="text">
                  Hello, I'm <span className="highlight">Noor Mir</span>
                  <br />
                  I am a persistent learning programmer looking to be a Web
                  Developer
                  <br />
                  <br />
                  <p>Thank you for visiting my Website.</p>
                </div>
              </div>
            </section>
          </Row>
        </Container>
      </div>
    );
}

export default Home;