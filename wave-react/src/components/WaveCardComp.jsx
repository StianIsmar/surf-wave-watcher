import React, { Component } from 'react';
//import {Card, Button } from "react-bootstrap"
import PropTypes from 'prop-types'
import './WaveCard.css'
import { Container, Row,Col, Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody } from 'reactstrap';
  import "./WaveCardComp.css"

/*<Card style={{ width: '18rem' }}>
            <Card.Img className = "swellimage" variant="top" src={this.props.swellimg} />
            <Card.Body>
              <Card.Title>TITLE</Card.Title>
              <Card.Text>
              {this.props.minbreaking}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>*/
class WaveCardComp extends Component {
    render() {
        return (
          <div>

          {this.props.minbreaking > 0.8 ?(
          <Card className="text-center" body inverse style={{ backgroundColor: '#333', borderColor: '#333', padding: 0}}>
            <CardImg top width="100%" src={this.props.swellimg} alt="Card image cap" />
            <CardBody>
            <Container>
                <Row>
                <Col>
                  <img className = "waveicon" src="http://www.clker.com/cliparts/E/b/C/u/2/k/wave-white-hi.png" ></img>
                </Col>
                <Col>
                Wave Height [m]:
              {" "}             
              <div className= "waveheight">{this.props.minbreaking} {this.props.swellDir}</div>
              <div> Wind: {this.props.windSpeed} {this.props.windDir}</div>
                </Col>
                </Row>
              <Row>
              <CardText> 
              {console.log(this.props.swellDir)}
             
            </CardText>
            {/*<Button >{this.props.count}</Button>*/}
              </Row>
          </Container>

            {/*<CardTitle>Card title</CardTitle>*/}
              
          </CardBody>
        </Card>
          ) : (
            <Card className="text-center" body inverse style={{ backgroundColor: '#333', borderColor: '#333', padding: 0}}>
            <CardImg top width="100%" src={this.props.swellimg} alt="Card image cap" />
            <CardBody>
            {/*<CardTitle>Card title</CardTitle>*/}
              <CardText> 
              {console.log(this.props.swellDir)}
              Wave Height [m]:
              {" "}             
              <div className= "waveheight">{this.props.minbreaking} {this.props.swellDir}</div>
              <div> Wind: {this.props.windSpeed} {this.props.windDir}</div>
            </CardText>
            {/*<Button >{this.props.count}</Button>*/}
          </CardBody>
        </Card>

          )}
        </div>

        );
    }
}
WaveCardComp.propTypes = {
    minbreaking: PropTypes.number,
    swellimg: PropTypes.string,
    key:PropTypes.number,
    count: PropTypes.number,
    windSpeed: PropTypes.number,
    windDir: PropTypes.string,
    swellDir: PropTypes.string
  }

export default WaveCardComp;