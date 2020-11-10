import React from "react";
import { Container } from "reactstrap";

import "./style.css";
import Header from "../../components/Header";


const Home = () => {
    return (
        <div>
            <Container>
                <Header/>
                <section id='home' className="flex height-fix">
                    <div id='pt' className='canvas'></div>
                    <div className="flex">
                        <div className="text">
                            Hello, I am <span className="highlight">Noor Mir</span>
                            <br/>
                            I am a graduated student from the University of Miami and is looking to be a Web Developer.
                            <br/>
                            <br/>
                            <p>Thank you for taking the time out to visit my Website</p>
                        </div>
                    </div>
                    {/* Footer goes here */}
                </section>
            </Container>
        </div>
    )
}
export default Home