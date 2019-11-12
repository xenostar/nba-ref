import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import axios from 'axios'
import * as serviceWorker from './serviceWorker'

axios.defaults.baseURL = 'https://api.mysportsfeeds.com/'
axios.defaults.headers.common['Authorization'] = 'Basic ' + btoa(process.env.REACT_APP_NBA_APIKEY + ':' + process.env.REACT_APP_NBA_APIPASS)

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
