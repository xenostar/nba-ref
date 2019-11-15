import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import axios from 'axios'

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
        return (
          <div key={data.schedule.id}>
            <div>Game ID: {data.schedule.id}</div>
            <div>Start Time: {data.schedule.startTime}</div>
            <div>Home Team: {data.schedule.homeTeam.abbreviation} (ID: {data.schedule.homeTeam.id})</div>
            <div>Away Team: {data.schedule.awayTeam.abbreviation} (ID: {data.schedule.awayTeam.id})</div>
            <div>Venue: {data.schedule.venue.name} (ID: {data.schedule.venue.id})</div>
            <div>Game Type: {data.schedule.venueAllegiance}</div>
            <div>---</div>
          </div>
        )
      })}
    </StyledTeamGames>
  )
}
