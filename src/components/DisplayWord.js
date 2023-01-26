import React, { Component } from 'react'
import './Display.css'
import sound from '../sound.png'
export default class Display extends Component {

  render() {
    let { word, audio } = this.props
    const click = () => {
      if (audio === '.') {
        speechSynthesis.speak(new SpeechSynthesisUtterance(word))
      }
      else {
        var a = new Audio(audio);
        a.play()
      }
    }
    return (
      <>

        <div className='container' >

          <h1 style={{
            textAlign: 'center', textShadow: ' #FC0 1px 0 10px'
          }}>{word}
            <img src={sound} alt="voice" style={{ width: '2em', cursor: 'pointer' }} onClick={click}></img>
          </h1>




        </div>

      </>

    )
  }
}
