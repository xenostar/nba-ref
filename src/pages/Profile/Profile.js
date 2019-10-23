import React from 'react'
import styled from 'styled-components'

const StyledProfile = styled.div`
  .img-holder {
    display: block;
    overflow: hidden;
  }
  img {
    float: left;
  }
`

export const Profile = () => {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     pictures : [],
  //   }
  // }

  // componentDidMount() {
    // fetch('https://randomuser.me/api/?results=500')
    // .then(response => {
    //   return response.json()
    // })
    // .then(data => {
    //   let pictures = data.results.map((pic, index) => {
    //     return (
    //       <div key={index}>
    //         <img src={pic.picture.medium} alt="" />
    //       </div>
    //     )
    //   })
    //   this.setState({
    //     pictures : pictures
    //   })
    // })
    // .catch(error => {
    //   console.log('Request failed: ', error)
    // })
  // }

  return (
    <StyledProfile className="page">
      <div className="img-holder">
        {/* {this.state.pictures} */}
      </div>
    </StyledProfile>
  )
}
