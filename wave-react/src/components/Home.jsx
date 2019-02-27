import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap'
import './Home.css'

export default class Home extends Component{
    render(){
        return(
            <Container>
                <Jumbotron>
                    <h2>Welcome to wave watcher</h2>
                    <p>This is how to build a website with react, react router and bootstrap</p>
                    <Link to ="about">
                <Button  bsStyle="primary"> About</Button>
                </Link>
                </Jumbotron>
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
        )
    }
}