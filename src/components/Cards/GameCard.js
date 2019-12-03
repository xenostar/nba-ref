import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { teams } from 'api'

const StyledGameCard = styled(Link)`
  background:
    url('${props => props.awaylogo}'),
    url('${props => props.homelogo}'),
    linear-gradient(110deg, ${props => props.awaycolor || "#eee"} 50%, ${props => props.homecolor || "#eee"} 50%);
  background-repeat: no-repeat;
  background-position: left 10px center,right 10px center, 0;
  background-size: 25%, 25%, auto;
  border-radius: 5px;
  color: #fff;
  padding: 30px 20px;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
  :hover {
    box-shadow: 0 2px 10px rgba(0,0,0,0.25);
    transform: scale(1.05) translateZ(0);
  }

  .location {
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
    text-shadow: 0 1px 2px rgba(0,0,0,0.75);
  }
  .score {
    font-size: 2.75em;
    font-weight: 700;
    line-height: 1.2;
    text-shadow: 0 2px 2px rgba(0,0,0,0.75);
  }
  .time {
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
    text-shadow: 0 1px 2px rgba(0,0,0,0.75);
  }
`

export const GameCard = ({data}) => {
  const abbrvHome = data.schedule.homeTeam.abbreviation.toLowerCase()
  const abbrvAway = data.schedule.awayTeam.abbreviation.toLowerCase()
  const date = new Date(data.schedule.startTime)
  const fDay = date.toLocaleString('en-US', { weekday: 'short' })
  const fDate = date.toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  const fTime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  return (
    <StyledGameCard
      to={`/game/${data.schedule.id}`}
      awaycolor={teams[abbrvAway].colors[0]}
      awaylogo={teams[abbrvAway].logo}
      homecolor={teams[abbrvHome].colors[0]}
      homelogo={teams[abbrvHome].logo}>
      <div className="location">{data.schedule.venue.name}</div>
      <div className="score">{data.score.awayScoreTotal} - {data.score.homeScoreTotal}</div>
      <div className="time">{`${fDay} ${fDate} @ ${fTime}`}</div>
    </StyledGameCard>
  )
}
