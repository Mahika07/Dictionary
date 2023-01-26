import wordicon from '../wordicon.jpg';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar " style={{ backgroundColor: 'rgb(3 25 62)' }}>
          <div className="container-fluid">

            <a className="navbar-brand" >
              <img src={wordicon} alt="" width="50" height="50" className="d-inline-block align-text-center" />
              <strong style={{ fontFamily: 'cursive', cursor: 'pointer', color: '#e1e1e1' }} onClick={() => { window.location.reload() }} > Play With Words</strong>
            </a>

          </div>
        </nav>
      </>
    )
  }
}

export default Navbar
