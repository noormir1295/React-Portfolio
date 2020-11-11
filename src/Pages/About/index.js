import React from "react";
import { Grid, Cell } from "react-mdl";
import "./style.css";
import Nav from "../../components/Header";

function About() {
  return (
    <div>
      <div style={{ width: "100%", margin: "auto" }}>
        <Nav />
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h1>About Me</h1>

              <p>
                I am a content developer for the interweb and a forever student
                of programming. My hobbies consist of building computers and
                learning new projects that can help me become a better
                developer. I graduated from Florida International University in
                a degree in International Relations, but even after four years,
                I realized that my true passion was with the tech field. At
                first I thought it was too late and my degree was a waste, but I
                slowly came to the conclusion that it is never to late to chase
                your passion. I decided to take a Web Programming course at the
                Univerisity of Miami to learn more about what my passion could
                really be. Here I am today, creating web development for whoever
                is in need of it. Down below are the libraries and frameworks I
                have used throughout my experience so far with links to my Github and LinkedIn profiles.
              </p>

              <hr />

              <p>
                HTML/CSS | Bootstrap | JavaScript | React | React Native |
                Sequel | NodeJS | Express | MongoDB
              </p>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    </div>
  );
}

export default About;
