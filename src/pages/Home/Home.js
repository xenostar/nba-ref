import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { seasons, teams } from 'api'
import { Page, Image } from 'components'

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

  h1 {
    color: #ED5429;
    line-height: 0.975;
  }
  h4 {
    color: #bbb;
    font-weight: 500;
  }
`

const TeamLink = styled(Link)`
  background-color: ${props => props.bgcolor || "#eee"};
  border-radius: 3px;
  box-shadow: 0 0 0 rgba(0,0,0,0);
  padding-top: 75%;
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;
  :hover {
    box-shadow: 0 2px 5px rgba(0,0,0,0.25);
    transform: scale(1.1) translateZ(0);
  }
`
const TeamImage = styled(Image)`
  height: 100%;
  position: absolute;
  object-fit: contain;
  top: 0;
  transform: scale(1) translateZ(0);
  width: 100%;
`

export const Home = () => (
  <StyledHome className="content">
    <div>
      <h1>Welcome</h1>
      <h4>To quite possibly the greatest reference for NBA statistics in the universe.</h4>
    </div>
    <div>
      <div className="team-grid">
        {Object.entries(teams).map(([key, value]) => (
          <TeamLink
            key={key}
            to={`/teams/roster/${key}/${seasons[0].value}`}
            bgcolor={value.colors[0]}>
              <TeamImage src={value.logo} alt={`${value.city} ${value.name}`} />
          </TeamLink>
        ))}
      </div>
    </div>
  </StyledHome>
)
