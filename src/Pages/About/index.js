import React from "react";
import { Container } from "reactstrap";

import Header from "../../components/Header";
import AboutCard from "../../components/AboutCard";

function About() {
    return (
        <Container>
            <Header />
            <h1>About</h1>
            <AboutCard />
        </Container>
    )
}
export default About;
