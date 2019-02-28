import React, { Component } from 'react';
import {Container,Grid, Col, Image,Row} from 'react-bootstrap';
import './About.css';

class About extends Component {
    render() {
        return (
            <div>
             <Image src = "assets/header_image.jpeg" className = "header-image"/>
             <Container>
                 <Row>
                 <Col xs = {12} sm = {8} smOffeset = {2}>
                 <Image src = "assets/maxresdefault.jpg" className = "about-profile-pic" />

                 </Col>
                 </Row>
            </Container>
            </div>
        );
    }
}

export default About;