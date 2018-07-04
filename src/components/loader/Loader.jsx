import React, { Component } from 'react'
import './Loader.css'
import loader from './img/Basketball-1s-200px.svg'

export default class Loader extends Component {

	render() {
		return (
			<div className="app-loader">
				<div className="holder">
					<img src={loader} alt="Loading..." />
					<p>Loading</p>
				</div>
			</div>
		)
	}

}
