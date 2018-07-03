import React, { Component } from 'react'
import './Home.css'

export default class Footer extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="page page-home">
				<p>Home page Content.</p>
				<ul>
					<li>Test</li>
					<li>Test</li>
					<li>Test</li>
				</ul>
				<p>Home page Content.</p>
			</div>
		)
	}

}
