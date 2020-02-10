import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Table } from 'components'
import { formatPlayerName } from 'utils'

export const SeasonLeaders = ({values}) => {
  const _URL_ = 'v1.2/pull/nba/'
  const [leaders, setLeaders] = useState({ points: [], assists: [], rebounds: [] })
  const [isLoading, setIsLoading] = useState({ isLoadingPts: true, isLoadingAst: true, isLoadingReb: true })
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

  useEffect(() => {
    const source = axios.CancelToken.source()
    const handleFetch = async (url, stateValue, loadValue) => {
      setIsLoading(prevState => {
        return { ...prevState, [loadValue]: true }
      })
      try {
        const res = await axios.get(`${ _URL_ + values.season }/cumulative_player_stats.json?${ url }`,{
          auth: {
            username: process.env.REACT_APP_NBA_USERNAME,
            password: process.env.REACT_APP_NBA_PASSWORD
          },
          cancelToken: source.token
        })
        setLeaders(prevState => {
          return { ...prevState, [stateValue]: res.data.cumulativeplayerstats.playerstatsentry }
        })
        setIsLoading(prevState => {
          return { ...prevState, [loadValue]: false }
        })
      } catch (error) {
        console.log(error)
      }
    }
    handleFetch('limit=10&sort=stats.Pts.D&playerstats=Pts&force=true', 'points', 'isLoadingPts')
    handleFetch('limit=10&sort=stats.Ast.D&playerstats=Ast&force=true', 'assists', 'isLoadingAst')
    handleFetch('limit=10&sort=stats.Reb.D&playerstats=Reb&force=true', 'rebounds', 'isLoadingReb')
    return () => source.cancel("Cancelling SeasonLeaders requests")
  }, [values])

  return (
    <StyledSeasonLeaders>
      <Table tableTitle="Points Scored" tableData={tableDataPts} loaderHeight="10" isLoading={isLoading.isLoadingPts}>
        {leaders.points.map((player, index) => {
          const urlFirstName = formatPlayerName(player.player.FirstName)
          const urlLasttName = formatPlayerName(player.player.LastName)
          return (
            <tr key={index}>
              <td>{player.stats['Pts']['#text']}</td>
              <td>{player.player.Position}</td>
              <td>
                <Link to={`/players/stats/${urlFirstName}-${urlLasttName}/${values.season}`}>
                  {player.player.FirstName} {player.player.LastName}
                </Link>
              </td>
            </tr>
          )
        })}
      </Table>
      <Table tableTitle="Assists" tableData={tableDataAst} loaderHeight="10" isLoading={isLoading.isLoadingAst}>
        {leaders.assists.map((player, index) => {
          const urlFirstName = formatPlayerName(player.player.FirstName)
          const urlLasttName = formatPlayerName(player.player.LastName)
          return (
            <tr key={index}>
              <td>{player.stats['Ast']['#text']}</td>
              <td>{player.player.Position}</td>
              <td>
                <Link to={`/players/stats/${urlFirstName}-${urlLasttName}/${values.season}`}>
                  {player.player.FirstName} {player.player.LastName}
                </Link>
              </td>
            </tr>
          )
        })}
      </Table>
      <Table tableTitle="Rebounds" tableData={tableDataReb} loaderHeight="10" isLoading={isLoading.isLoadingReb}>
        {leaders.rebounds.map((player, index) => {
          const urlFirstName = formatPlayerName(player.player.FirstName)
          const urlLasttName = formatPlayerName(player.player.LastName)
          return (
            <tr key={index}>
              <td>{player.stats['Reb']['#text']}</td>
              <td>{player.player.Position}</td>
              <td>
                <Link to={`/players/stats/${urlFirstName}-${urlLasttName}/${values.season}`}>
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

const StyledSeasonLeaders = styled.div`
  display: grid;
  grid-gap: 1.875rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  @media (max-width: 87.5rem) { /* 1400px */
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 62.5rem) { /* 1000px */
    grid-template-columns: 1fr;
  }
`
