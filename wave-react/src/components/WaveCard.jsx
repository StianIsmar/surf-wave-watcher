import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchWaveData } from '../actions/WaveActions'
// import { Button,CardGroup } from "react-bootstrap"
import './WaveData.css'
import WaveCardComp from './WaveCardComp'
import './WaveCard.css'
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody ,CardColumns,CardRows} from 'reactstrap';
import { CardDeck } from 'react-bootstrap';

class WaveCard extends Component {
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
      mapping(){
        let counter = 0;
        return this.props.items.map(item => 
        <CardDeck>
    {
        this.props.items && this.props.items.map((it,counter) =>
      <WaveCardComp
      key = {it.timestamp}
      minbreaking={it.swell.absMinBreakingHeight}
      swellimg = {it.charts.swell}
      count = {counter = counter + 1}
      />
    )}

    </CardDeck>
           )

    }
    render() {
        
        return (
            <div>
       {this.mapping()}
            </div>
        );
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
  

  