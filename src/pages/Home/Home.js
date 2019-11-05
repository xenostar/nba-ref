import React, { useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Page } from 'components'
import { seasons, teams } from 'api'

const StyledHome = styled(Page)`
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
  @media only screen and (max-width: 87.5rem) { /* 1400px */
    .team-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media only screen and (max-width: 62.5rem) { /* 1000px */
    .team-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .img-wrapper {
    border-radius: 3px;
    overflow: hidden;
    padding-top: 75%;
    position: relative;
    transition: transform 0.2s;
  }
  .img-wrapper:hover {
    box-shadow: 0 2px 5px rgba(0,0,0,0.25);
    transform: scale(1.1) translateZ(0);
  }
  .img-wrapper img {
    backface-visibility: hidden;
    bottom: 0;
    height: 100%;
    position: absolute;
    object-fit: contain;
    opacity: 0;
    transform: scale(1) translateZ(0);
    transition: opacity 1s;
    width: 100%;
  }
  .img-wrapper.loaded img {
    opacity: 1;
  }

  h1 {
    color: #ED5429;
    line-height: 0.975;
  }
  h4 {
    color: #bbb;
    font-weight: 500;
  }
`

export const Home = () => {
  const [isLoaded, setIsLoaded] = useState([])

  const handleImgLoad = teamName => {
    setIsLoaded(prevState => {
      return { ...prevState, [teamName]: true }
    })
  }

  return (
    <StyledHome className="content">
      <div>
        <h1>Welcome</h1>
        <h4>To quite possibly the greatest reference for NBA statistics in the universe.</h4>
      </div>
      <div>
        <div className="team-grid">
          {teams.map(data => {
            const teamColor = { backgroundColor: data.colors[0] }
            return (
              <Link to={`/teams/roster/${data.abbreviation}/${seasons[0].value}`} key={data.name} className={isLoaded[data.name] ? 'img-wrapper loaded' : 'img-wrapper'} style={teamColor} >
                <img src={data.logo} alt={`${data.city} ${data.name}`} onLoad={() => handleImgLoad(data.name)} />
              </Link>
            )
          })}
        </div>
      </div>
    </StyledHome>
  )
}
