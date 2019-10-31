import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Table } from 'components'

const StyledSeasonLeaders = styled.div`
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

export const SeasonLeaders = props => {
  const _API_ = 'https://api.mysportsfeeds.com/v1.2/pull/nba/'
  const [leaders, setLeaders] = useState({ points: [], assists: [], rebounds: [] })
  const [isLoaded, setIsLoaded] = useState({ isLoadedPts: false, isLoadedAst: false, isLoadedReb: false })
  const tableDataPts = {
    'Pts': '3.75rem',
    'Posn': '10%',
    'Name': 'auto',
  }
  const tableDataAst = {
    'Ast': '3.75rem',
    'Posn': '10%',
    'Name': 'auto',
  }
  const tableDataReb = {
    'Reb': '3.75rem',
    'Posn': '10%',
    'Name': 'auto',
  }

  const formatPlayerName = name => name.toLowerCase().replace(/[^a-zA-Z]/g, "")

  const handleFetch = useCallback((url, stateValue, loadValue) => {
    setIsLoaded(prevState => {
      return { ...prevState, [loadValue]: false }
    })

    fetch(`${ _API_ + props.values.season }/cumulative_player_stats.json?${ url }`,{
      headers: {
        'Authorization' : 'Basic ' + btoa(process.env.REACT_APP_NBA_USERNAME + ':' + process.env.REACT_APP_NBA_PASSWORD),
        'Accept-Encoding' : 'gzip'
      },
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      setLeaders(prevState => {
        return { ...prevState, [stateValue]: data.cumulativeplayerstats.playerstatsentry }
      })
      setIsLoaded(prevState => {
        return { ...prevState, [loadValue]: true }
      })
    })
    .catch(error => {
      console.log(error)
    })
  }, [props.values])

  useEffect(() => {
    handleFetch('limit=10&sort=stats.Pts.D&playerstats=Pts&force=true', 'points', 'isLoadedPts')
    handleFetch('limit=10&sort=stats.Ast.D&playerstats=Ast&force=true', 'assists', 'isLoadedAst')
    handleFetch('limit=10&sort=stats.Reb.D&playerstats=Reb&force=true', 'rebounds', 'isLoadedReb')
  }, [handleFetch])

  return (
    <StyledSeasonLeaders>
      <Table tableTitle="Points Scored" tableData={tableDataPts} loaderHeight="10" isLoaded={isLoaded.isLoadedPts}>
        {leaders.points.map((player, index) => {
          const urlFirstName = formatPlayerName(player.player.FirstName)
          const urlLasttName = formatPlayerName(player.player.LastName)
          return (
            <tr key={index}>
              <td>{player.stats['Pts']['#text']}</td>
              <td>{player.player.Position}</td>
              <td>
                <Link to={`/players/stats/${urlFirstName}-${urlLasttName}/${props.values.season}`}>
                  {player.player.FirstName} {player.player.LastName}
                </Link>
              </td>
            </tr>
          )
        })}
      </Table>
      <Table tableTitle="Assists" tableData={tableDataAst} loaderHeight="10" isLoaded={isLoaded.isLoadedAst}>
        {leaders.assists.map((player, index) => {
          const urlFirstName = formatPlayerName(player.player.FirstName)
          const urlLasttName = formatPlayerName(player.player.LastName)
          return (
            <tr key={index}>
              <td>{player.stats['Ast']['#text']}</td>
              <td>{player.player.Position}</td>
              <td>
                <Link to={`/players/stats/${urlFirstName}-${urlLasttName}/${props.values.season}`}>
                  {player.player.FirstName} {player.player.LastName}
                </Link>
              </td>
            </tr>
          )
        })}
      </Table>
      <Table tableTitle="Rebounds" tableData={tableDataReb} loaderHeight="10" isLoaded={isLoaded.isLoadedReb}>
        {leaders.rebounds.map((player, index) => {
          const urlFirstName = formatPlayerName(player.player.FirstName)
          const urlLasttName = formatPlayerName(player.player.LastName)
          return (
            <tr key={index}>
              <td>{player.stats['Reb']['#text']}</td>
              <td>{player.player.Position}</td>
              <td>
                <Link to={`/players/stats/${urlFirstName}-${urlLasttName}/${props.values.season}`}>
                  {player.player.FirstName} {player.player.LastName}
                </Link>
              </td>
            </tr>
          )
        })}
      </Table>
    </StyledSeasonLeaders>
  )
}
