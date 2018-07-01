import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';

// CSS
import './_styles.css';

// Components

// Pages

// Vars
var pull_url = 'https://api.mysportsfeeds.com/v1.2/pull/nba/latest/roster_players.json'
var username = 'xenostar'
var password = 'testpass123'

// App Container
class App extends Component {
	componentDidMount() {

		// fetch(pull_url, {
		// 	headers: {
		// 		'Authorization': 'Basic ' + btoa(username + ':' + password)
		// 	},
		// })
		// .then(function(response) {
		// 	return response.json();
		// })
		// .then(function(myJson) {
		// 	console.log(myJson);
		// })

	}
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );

  }
}

export default App;
