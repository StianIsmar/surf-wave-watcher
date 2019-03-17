import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap'
import './Home.css'
import { zip } from 'rxjs';
import WaveData from './WaveData'
import WaveCard from './WaveCard';
export default class Home extends Component{
    render(){
        return(
            <div>
                 <div className = "top-part">
                 <p> <div className= "h22">Scroll to see what the waves are like at Hustadvika
                 </div>
                 </p>
                </div>
            <Container className = "container">
            <WaveCard />
                <Jumbotron>
                    <h2>Welcome to wave watcher</h2>
                    <Link to ="More pictures">
                    <p></p>
                        <Button  bsStyle="primary"> More images</Button>
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