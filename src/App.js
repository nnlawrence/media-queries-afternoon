import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import 'reset-css'

export default class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar />
        <div className="txtbx">
          <div className="text">Welcome To Our Studio!</div>
          <div className="text1">IT'S NICE TO MEET YOU</div>
          <div className="textbtn">TELL ME MORE</div>
        </div>

      </div>
    )
  }
}
