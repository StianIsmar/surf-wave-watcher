import React, { Component } from 'react'
import { Navbar, Nav, NavItem,Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <div>



<Navbar bg="light" variant="dark" expand="lg">
<Navbar.Brand href="/" to="/" componentClass ={Link} >   
<img src="http://www.clker.com/cliparts/E/b/C/u/2/k/wave-white-hi.png" ></img>
<h className = "headertxt">wavewatcher</h>

    </Navbar.Brand>
  </Navbar>
      </div>


    )
  }
}