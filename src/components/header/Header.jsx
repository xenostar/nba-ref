import React, { Component } from 'react'
import './Header.css'
import logo from './img/nba-logo--orange.svg'

export default class Header extends Component {

  render() {
    return (
      <header className="app-header">
        <img src={logo} alt="NBA REF" />
        <h1>nba<span>ref</span></h1>
      </header>
    )
  }

}
