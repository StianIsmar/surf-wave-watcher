import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap'
import './Home.css'
import { zip } from 'rxjs';
import WaveData from './WaveData'
export default class Home extends Component{
    render(){
        return(
            <div>
                 <div className = "top-part">
                    <p>This is what the waves are doing at Hustadvika right now:</p>
                    <Image className = "picture1" src="https://charts-s3.msw.ms/archive/wave/750/7-1551312000-1.gif" />
                    <WaveData />
                </div>
            <Container className = "container">
                <Jumbotron>
                    <h2>Welcome to wave watcher</h2>
                    <p>This is how to build a website with react, react router and bootstrap</p>
                    <Link to ="about">
                <Button  bsStyle="primary"> About</Button>
                </Link>
                </Jumbotron>
                <Image src="assets/surfer_header.jpg" className = "top-image1"  />
                <Row className = "show-grid text-center">
                    <Col xs = {12} sm= {4} className = "person-wrapper">
                    <Image src = "assets/maxresdefault.jpg" circle className = "profile-pic" />
                        <h3>Hustadvika</h3>
                        <p> A picture from Hustadvika</p>
                    </Col>
                    <Col xs = {12} sm= {4} className = "person-wrapper">
                    <Image src = "assets/maxresdefault.jpg" circle className = "profile-pic" />
                        <h3>Hustadvika</h3>
                        <p> A picture from Hustadvika</p>
                    </Col>
                    <Col xs = {12} sm= {4} className = "person-wrapper">
                    <Image src = "assets/maxresdefault.jpg" circle className = "profile-pic" />
                        <h3>Hustadvika</h3>
                        <p> A picture from Hustadvika</p>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}