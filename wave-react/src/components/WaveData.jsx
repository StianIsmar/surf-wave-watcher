import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchWaveData } from '../actions/WaveActions'
import { Button } from "react-bootstrap"
import './WaveData.css'

class WaveData extends Component {
    componentDidMount() {
        console.log("Fire getWaveData!")
      }
    render() {
        return (
            <div className="btn">
            <Button variant="primary" size="lg" onClick={() =>
            this.props.getWaveData()
            }>
                Press to get latest forecast
            </Button>
            <div>
                {this.props.items}
            </div>
            </div>
        );
    }
}
function mapStateToProps (state) {
    return ({
      items: state.items,
      //genre: state.genre
    }
    )
  }
  function mapDispatchToProps (dispatch) {
    return (
      {
        getWaveData: () => {
            dispatch(fetchWaveData())
        }
    }
    )
  }
  export default connect(mapStateToProps, mapDispatchToProps)(WaveData)
  