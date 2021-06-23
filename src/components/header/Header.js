import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import Register from "../register/Register";
import Login from "../login/Login";

function Header() {
  const [registerFlag, setRegisterFlag] = useState(false);
  const [loginFlag, setLoginFlag] = useState(false);

  const handleOpenRegister = () => {
    setRegisterFlag(!registerFlag);
  };

  const handleCloseRegister = () => {
    setRegisterFlag(!registerFlag);
  };

  const handleOpenLogin = () => {
    setLoginFlag(!loginFlag);
  };

  const handleCloseLogin = () => {
    setLoginFlag(!loginFlag);
  };


  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#">SUPOSHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Features</Nav.Link>
          
            <Button variant="dark" onClick={() => handleOpenLogin()}>
              Login
            </Button>
            <Button variant="dark" onClick={() => handleOpenRegister()}>
              Register
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {registerFlag && <Register show={registerFlag} handleClose={handleCloseRegister}/>}
      {loginFlag && <Login show={loginFlag} handleClose={handleCloseLogin}/>}
    </div>
  );
}

export default Header;
