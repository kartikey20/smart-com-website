import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <Box>
        <Navbar bg={"light"} expand="lg" variant="light">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/src/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Smart Com
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/committee">Committee</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/special-session">Special Session</Link>
              </Nav.Link>
              <NavDropdown title="Papers" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to={"/call-for-papers"}>Call for papers</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={"/call-for-special-session"}>
                    Call for special session
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to={"/accepted-papers"}>Accepted papers</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  {" "}
                  <Link to={"/registered-papers"}>Registered papers</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item>
                  <Link to={"/smart-com-schedule"}>Smart Com schedule</Link>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link>
                <Link to={"/paper-submission-guidelines"}>
                  Paper submission guidelines
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to={"/registration"}>Registration</Link>
              </Nav.Link>

              <Nav.Link>
                <Link to={"/contact-us"}>Contact us</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Box>
    </>
  );
};
export default Navigation;
