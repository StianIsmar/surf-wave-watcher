import React, { Component } from 'react'
import { Navbar, Nav, NavItem,Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
<Navbar bg="light" variant="dark" expand="lg">

  <Navbar.Brand href="/" to="/" componentClass ={Link} >   
  <img src="http://www.clker.com/cliparts/E/b/C/u/2/k/wave-white-hi.png" ></img>
  <h className = "headertxt">1wavewatcher</h>

</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav pullRight className="mr-auto">
        <NavItem >
        </NavItem>
        <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
                About
        </NavItem>
        <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
                News
        </NavItem>
    </Nav>
    <Form inline>
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
  }
}