import React, { Component } from 'react'
import './Display.css'
export default class DisplayMean extends Component {

  render() {
    let { definition, example } = this.props
    return (
      <>





        <div className='d-block w-75' style={{ textAlign: 'center', margin: 'auto', backgroundColor: 'rgb(3 25 62)', borderRadius: '10px', padding: '5px 5px', color: '#e1e1e1' }}>
          <h5>{definition}</h5>
          <p> {example && <strong>Example : </strong>}{example} </p>
        </div>






      </>
    )
  }
}
