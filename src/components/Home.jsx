import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap'
import './Home.css'
import { zip } from 'rxjs';
import WaveData from './WaveData'
import WaveCard from './WaveCard';
import {MDBIcon } from 'mdbreact';


export default class Home extends Component{
    render(){
        return(
            <div>
                 <div className = "top-part">
                 <p> <div className= "h22">
                 </div>
                 </p>
                </div>
            <Container className = "container">
            <Jumbotron>
                    <p className = "JumboTron">Scroll down to see what the waves are like at Hustadvika right now</p>
                    <p className = "JumboTron">A wave icon {                <img className = "waveiconJumbo" src="http://www.clker.com/cliparts/E/b/C/u/2/k/wave-white-hi.png" ></img>
} indicates that the wave height is > 0.8 meters</p>
                    <MDBIcon icon="angle-double-down" />
                </Jumbotron>
            <WaveCard />
            </Container>
            </div>
        )
    }
}