import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { BlockLoader, GameCard } from 'components'

const StyledTeamGames = styled.div`
  .grid {
    display: grid;
    grid-gap: 2.5rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
  @media only screen and (max-width: 87.5rem) { /* 1400px */
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media only screen and (max-width: 62.5rem) { /* 1000px */
    .grid {
      grid-template-columns: 1fr;
    }
  }
`

export const TeamGames = ({values}) => {
  const _URL_ = 'v2.1/pull/nba/'
  const [games, setGames] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const loaders = []

  for (let i = 0; i < 12; i++) {
    loaders.push(<BlockLoader key={i} height="143.533" />)
  }

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
      {isLoading ? (
        loaders
      ) : (
        (games.length > 0) ? (
          <div className="grid">
            {games.map(data => <GameCard key={data.schedule.id} data={data} />)}
          </div>
        ) : (
          <>
            <h1>No games found!</h1>
            <p>Team did not make playoffs.</p>
          </>
        )
      )}
    </StyledTeamGames>
  )
}
