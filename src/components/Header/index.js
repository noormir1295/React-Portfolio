import React from "react";
import { Layout, Header, Navigation, Content } from "react-mdl";
import { Link } from "react-router-dom";



function Nav() {

  return (
    <div style={{ height: "300px", position: "relative" }}>
      <Layout
        style={{
          background:
            "url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover",
        }}
      >
        <Header transparent title="Welcome" style={{ color: "white" }}>
          <Navigation>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Content />
      </Layout>
    </div>
  );
}

export default Nav;
