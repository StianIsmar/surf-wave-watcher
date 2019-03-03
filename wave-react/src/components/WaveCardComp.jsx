import React, { Component } from 'react';
import {Card, Button } from "react-bootstrap"
import PropTypes from 'prop-types'
import './WaveCard.css'

class WaveCardComp extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img className = "swellimage" variant="top" src={this.props.swellimg} />
            <Card.Body>
              <Card.Title>TITLE</Card.Title>
              <Card.Text>
              {this.props.minbreaking}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
    }
}
WaveCardComp.propTypes = {
    minbreaking: PropTypes.number,
    swellimg: PropTypes.string,
    key:PropTypes.number
  }

export default WaveCardComp;