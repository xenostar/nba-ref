import React, { useState} from 'react'
import styled from 'styled-components'
import teams from 'api/teams.js'

const StyledHome = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: 1fr 2fr;
  @media only screen and (max-width: 62.5rem) {
    grid-template-columns: 1fr;
  }

  .team-grid {
    display: grid;
    grid-gap: 1.25rem;
    grid-template-columns: repeat(5, 1fr);
  }
  .team-grid div {
    border-radius: 5px;
  }
  .team-grid img {
    margin: 0 auto;
  }

  .img-wrapper {
    position: relative;
    padding-top: 75%;
    overflow: hidden;
  }
  .img-wrapper.loaded img {
    opacity: 1;
  }
  .img-wrapper img {
    position: absolute;
    bottom: 0;
    height: 100%;
    object-fit: contain;
    opacity: 0;
    transition: opacity 1s;
    width: 100%;
  }

  h1 {
    color: #ED5429;
    font-size: 4.25em;
    line-height: 0.975;
  }
`

export const Home = () => {
  const [isLoaded, setIsLoaded] = useState([])

  const handleImgLoad = (teamName) => {
    setIsLoaded(prevState => {
      return { ...prevState, [teamName]: true }
    })
  }

  return (
    <StyledHome className="page content">
      <div>
        <h1>Welcome</h1>
        <h2>To quite possibly the greatest reference for NBA statistics in the universe.</h2>
      </div>
      <div>
        <div className="team-grid">
          {teams.map((data, index) => {
            const teamColor = {
              backgroundColor: data.color[0],
            }
            return (
              <div key={index} className={isLoaded[data.name] ? 'img-wrapper loaded' : 'img-wrapper'} style={teamColor}>
                <img src={data.logo} alt={data.city + ' ' + data.name} onLoad={() => handleImgLoad(data.name)} />
              </div>
            )
          })}
        </div>
      </div>
    </StyledHome>
  )
}
