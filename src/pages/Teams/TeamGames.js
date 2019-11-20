import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import { teams } from 'api'

const StyledTeamGames = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  @media only screen and (max-width: 87.5rem) { /* 1400px */
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 62.5rem) { /* 1000px */
    grid-template-columns: 1fr;
  }
`

const GameCard = styled.div`
  background:
    url('${props => props.homelogo}'),
    url('${props => props.awaylogo}'),
    linear-gradient(110deg, ${props => props.homecolor || "#eee"} 50%, ${props => props.awaycolor || "#eee"} 50%);
  background-repeat: no-repeat;
  background-position: left 10px center,right 10px center, 0;
  background-size: 25%, 25%, auto;
  padding: 20px;
  border-radius: 5px;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0,0,0,0.25);
`

export const TeamGames = ({values}) => {
  const _URL_ = 'v2.1/pull/nba/'
  const [games, setGames] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const source = axios.CancelToken.source()

    const handleFetch = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get(`${ _URL_ + values.season }/games.json?team=${ values.team }&status=final&sort=game.starttime.D`,{
          cancelToken: source.token
        })
        setGames(res.data.games)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    handleFetch()

    return () => source.cancel("Cancelling TeamGames request")
  }, [values])

  return (
    <StyledTeamGames>
      {isLoading || games.map((data, index) => {
        const abbrv_home = data.schedule.homeTeam.abbreviation.toLowerCase();
        const abbrv_away = data.schedule.awayTeam.abbreviation.toLowerCase();
        // console.log(test);
        return (
          <GameCard key={data.schedule.id}
            homecolor={teams[abbrv_home].colors[0]}
            homelogo={teams[abbrv_home].logo}
            awaycolor={teams[abbrv_away].colors[0]}
            awaylogo={teams[abbrv_away].logo}>
            <div>Game ID: {data.schedule.id}</div>
            <div>Game Type: {data.schedule.venueAllegiance}</div>
            <div>Start Time: {data.schedule.startTime}</div>
            <div>Venue: {data.schedule.venue.name} (ID: {data.schedule.venue.id})</div>
            <div>---</div>
            <div>Home Team: {data.schedule.homeTeam.abbreviation} (ID: {data.schedule.homeTeam.id})</div>
            <div>Home Score Total: {data.score.homeScoreTotal}</div>
            <div>---</div>
            <div>Away Team: {data.schedule.awayTeam.abbreviation} (ID: {data.schedule.awayTeam.id})</div>
            <div>Away Score Total: {data.score.awayScoreTotal}</div>
          </GameCard>
        )
      })}
    </StyledTeamGames>
  )
}