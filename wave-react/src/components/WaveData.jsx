import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchWaveData } from '../actions/WaveActions'
import { Button } from "react-bootstrap"
import './WaveData.css'
import WaveCardComp from './WaveCardComp'

class WaveData extends Component {
    componentDidMount() {
        console.log("Fire getWaveData!")
        this.props.getWaveData()
      }

      createListItems(){  
        return this.props.items.map((it) => {
              return (
                  <li keyParams = {it.timestamp}> {it.swell.absMinBreakingHeight} {it.wind.speed}</li>
              )
          })
      }
  
    render() {
        return (
          <div>
              <WaveCardComp />
                <ul>
                {this.createListItems()}
                </ul>
                
                </div>
        );
    }
}
function mapStateToProps (state) {
    return ({
      items: state.WaveReducer.items
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
  