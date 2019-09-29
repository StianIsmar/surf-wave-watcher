import React, { Component } from 'react';
import {Container,Grid, Col, Image, Row} from 'react-bootstrap';
import './News.css'
class News extends Component {
    render() {
        return (
                <div>
            <Container fluid className = "no-padding">
                <Row className = "row-margin">
               <Image src="assets/surfer_header.jpg" className = "top-image" fluid />
               </Row >
               </Container> 
               <Container>
                   <h2>News</h2>
                   <Row>
                       <Col cs ={12} sm = {8} className = "main-section">
                       Some radom text
                       </Col>
                       <Col cs ={12} sm = {4} className = "sidebar-section">
                       <Image src="assets/header_image.jpeg" className = "header-image" />
                       </Col>
                   </Row>
        </Container> 
            </div>

        );
    }
}

export default News;