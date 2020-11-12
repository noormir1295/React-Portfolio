import React from "react";
import { Row, Navbar, NavItem, NavLink, Nav } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./style.css";

function Footer() {
  return (
    <>
      <Row>
        <Navbar expand="md">
          <Nav className="mr-auto navbar fixed-bottom justify-content-center footer">
            <NavItem>
              <NavLink
                className="m-2"
                href="https://github.com/noormir1295"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="m-2"
                href="https://www.linkedin.com/in/noor-mir-2378081b1/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </Row>
    </>
  );
}

export default Footer
