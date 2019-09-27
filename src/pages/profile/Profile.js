import React, { Component } from 'react'
import './Profile.css'

export default class Profile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pictures : [],
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=500')
    .then(response => {
      return response.json()
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
    .catch(error => {
      console.log('Request failed: ', error)
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
