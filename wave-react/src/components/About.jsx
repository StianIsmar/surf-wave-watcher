import React, { Component } from 'react';
import {Container,Grid, Col, Image,Row} from 'react-bootstrap';
import './About.css';

class About extends Component {
    render() {
        return (
            <div>
                <Container>
                <Row>
             <Image src = "assets/header_image.jpeg" className = "header-image" />
             </Row>
                 <Row>
                 <Image src = "assets/maxresdefault.jpg" className = "about-profile-pic" />
                 </Row>
            </Container>
            </div>
        );
    }
}
//<Col xs = {12} sm = {8} smOffeset = {2}>

export default About;