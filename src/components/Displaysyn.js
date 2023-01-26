import React, { Component } from 'react'
import './Display.css'
export default class Displaysyn extends Component {
  render() {
    let { synonyms, antonyms } = this.props

    return (
      <>
        <div className='container ' style={{ marginTop: '5em' }}  >
          <div className="d-flex justify-content-around "  >
            <div className="flip-card my-3 ">
              <div className="flip-card-inner ">
                <div className="flip-card-front ">
                  <p style={{ marginTop: '4rem' }}><strong>Synonyms</strong></p>
                </div>
                <div className="flip-card-back "  >
                  {synonyms.length !== 0 ? <p className=' text-start '>{synonyms.map((e) => {
                    return <span key={e}>{e} , &nbsp;</span>
                  })}</p> : <div> <span style={{ textAlign: 'center' }}><i>No Synonyms Found! </i></span>
                    <span style={{ fontSize: '5em' }}>&#128546;</span>
                  </div>
                  }



                </div>

              </div>
            </div>

            <div className="flip-card my-3">
              <div className="flip-card-inner">
                <div className="flip-card-front"><p style={{ marginTop: '4rem' }}><strong>Antonyms</strong></p>
                </div>
                <div className="flip-card-back">
                  {antonyms.length !== 0 ? <p className=' text-start'>{antonyms.map((e) => {
                    return <span key={e}>{e} , &nbsp;</span>
                  })} </p> : <div><span style={{ textAlign: 'center' }}><i>No Antonyms Found! </i></span>
                    <span style={{ fontSize: '5em' }}>&#128546;</span>
                  </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
