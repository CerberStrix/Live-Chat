import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import React from 'react';

const NavBar = () => (
  <Navbar variant="light" className="shadow-sm">
    <Container>
      <Navbar.Brand href="/">Hexlet Chat</Navbar.Brand>
    </Container>
  </Navbar>
);

export default NavBar;
