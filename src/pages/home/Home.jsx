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
				<div className="hero">
					<h1>Welcome</h1>
					<h2>To quite possibly the greatest reference for NBA statistics in the universe.</h2>
				</div>
				<div>
					<h2>What is the purpose of your project and why did you choose that?</h2>
					<p>The purpose of this project is to provide a variety of ways to view stats regarding the NBA.</p>
					<p>I chose this project to learn more about how to use React while combining it with my love of the NBA.</p>
				</div>
				<div>
					<h2>What were some challenges with building your project?</h2>
					<p>The main challenge of this project was learning React in more detail. I had used it before, but took it further this time.</p>
					<p>Also, the <a href="https://www.mysportsfeeds.com/" target="_blank" rel="noopener noreferrer">API</a> I chose turned out to be very problematic. It is slow to respond, and sometimes serves cached responses, making it hard to query the same endpoints repeatedly.</p>
				</div>
				<div>
					<h2>How did you overcome those challenges?</h2>
					<p>Apparently the caching problem is a <a href="/img/known_issue.png" target="_blank" rel="noopener noreferrer">known issue</a>.</p>
					<p>Essentially, fetching from the same endpoint while only changing url parameters can serve the wrong (cached) data back.</p>
					<p>It forced me to make more resilient components that would handle failure gracefully. The Table component, as well as the accompanying fetch requests, will retry until they eventually load the correct data. They will also show a loading animation while waiting for the data to arrive.</p>
				</div>
				<div>
					<h2>If you had more time, where would you like to take this / what would you change?</h2>
					<p>I tried to show a variety of different skills in this project including:</p>
					<ul>
						<li>Advanced Javascript usage using React and ES6 language features.</li>
						<li>A variety of CSS layout features including basic floats, css grid, flexbox, transitions, css animations, animated SVGs, and full responsiveness.</li>
					</ul>
					<p>The main priority going forward would be to move to a more stable and reliable API. I also want to add many more filters to each page so you can choose season, post-season, individual team stats, and individual player stats (including shot charts).</p>
				</div>
			</div>
		)
	}

}
