// This class maps the json file from the reducer
//into the bootstrap card

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchWaveData } from '../actions/WaveActions'
// import { Button,CardGroup } from "react-bootstrap"
import './WaveData.css'
import WaveCardComp from './WaveCardComp'
import './WaveCard.css'
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody ,CardColumns} from 'reactstrap';

class WaveCard extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
    }
    componentDidMount() {
        console.log("Fire getWaveData!")
        this.props.getWaveData()
      }
    

      /*createListItems(){
        console.log("OKKKK:",this.props.items)  
        return this.props.items.map((it) => {
              return (
                  <li keyParams = {it.timestamp}> {it.swell.absMinBreakingHeight} {it.wind.speed}</li>
              )
          })
      }*/
      //<div className="btn">
      //<Button variant="primary" size="lg" onClick={() =>
      //this.props.getWaveData()
      //}>
       //   Press to get latest forecast
      //</Button>
      // CardGroup Col sm="4"

    
    render() {
      return (
        <div className="container">
           <div className= "row">
           {this.props.items && this.props.items.map((it)=>
             {
                return (
                   <div className="col-md-4">
                      <WaveCardComp
              key = {it.timestamp}
              minbreaking={it.swell.absMinBreakingHeight}
              swellimg = {it.charts.swell}
              windDir = {it.wind.compassDirection}
              windSpeed = {it.wind.speed}
              count = {it.timestamp}
              swellDir = {it.swell.components.combined.compassDirection}/>
                   </div>
                 )
             })}
           </div>
        </div>
      )
    }
  }


    

function mapStateToProps (state) {
    return ({
      items: state.WaveReducer.items
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
  export default connect(mapStateToProps, mapDispatchToProps)(WaveCard)
  

  