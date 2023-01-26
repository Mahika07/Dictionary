
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';

import Show from './components/Show';
import Alert from './components/Alert';



export default class App extends Component {

  state = {
    alert: false,
    msg: ''
  }
  showAlert = (msg) => {
    this.setState({ alert: true, msg: msg })
    setTimeout(() => {
      this.setState({ alert: false })
    }, 3000);

  }
  render() {


    return (

      <>
        <Navbar />
        <Alert alert={this.state.alert} msg={this.state.msg} />
        <Show showalert={this.showAlert} />

      </>

    )
  }

}
