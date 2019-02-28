import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchWaveData } from '../actions/WaveActions'
import { Button } from "react-bootstrap"

class WaveData extends Component {
    componentDidMount() {
        console.log("Fire getWaveData!")
      }


    render() {
        return (
            <div>
            <Button onClick = {this.props.getWaveData}>

            </Button>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return ({
      // title: state.title,
      //genre: state.genre
    }
    )
  }
  function mapDispatchToProps (dispatch) {
    return (
      {
        getWaveData:
            dispatch(fetchWaveData())
        }
    )
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(WaveData)
  