import React, { Component } from 'react'
import './_profile.css'

export default class Profile extends Component {

	constructor() {
		super()
		this.state = {
			pictures : [],
		}
	}

	componentDidMount() {
		fetch('https://randomuser.me/api/?results=500')
		.then(results => {
			return results.json()
		})
		.then(data => {
			let pictures = data.results.map((pic, index) => {
				return (
					<div key={index}>
						<img src={pic.picture.medium} alt="" />
					</div>
				)
			})
			this.setState({
				pictures : pictures
			})
		})
	}

	render() {
		return (
			<div className="page page-profile">
				<div className="img-holder">
					{this.state.pictures}
				</div>
			</div>
		)
	}

}
