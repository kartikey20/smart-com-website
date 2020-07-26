import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
const Navigation = () => {
  return (
    <>
      {" "}
      <Navbar bg="light" expand="lg">
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
            <Nav.Link to={"/"}>Home</Nav.Link>
            <Nav.Link to={"/Committee"}>Committee</Nav.Link>
            <NavDropdown title="Papers" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Call for papers
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Call for special session
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Accepted papers
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Registered papers
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">
                Smart Com schedule
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link to={"/Paper-submission-guidelines"}>Paper submission guidelines</Nav.Link>
            <Nav.Link to={"/Registration"}>Registration</Nav.Link>
            <Nav.Link to={"/Contact-us"}>Contact us</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Navigation;
