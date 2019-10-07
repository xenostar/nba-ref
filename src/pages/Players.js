import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Table, Form, Label, Select } from 'components'

const StyledPlayers = styled.div`
  .grid {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
  @media only screen and (max-width: 1000px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`

export const Players = () => {
  const [season, setSeason] = useState('2018-2019')
  const [stats, setStats] = useState({ points: [], assists: [], rebounds: [] })
  const [isLoaded, setIsLoaded] = useState({ isLoadedPts: false, isLoadedAst: false, isLoadedReb: false })
  const seasons = [
    '2018-2019',
    '2017-2018',
    '2016-2017',
    '2015-2016'
  ]
  const tableDataPts = [
    [ 'Pts', '5vw' ],
    [ 'Position', '5vw' ],
    [ 'Name', 'auto' ]
  ]
  const tableDataAst = [
    [ 'Ast', '5vw' ],
    [ 'Position', '5vw' ],
    [ 'Name', 'auto' ]
  ]
  const tableDataReb = [
    [ 'Reb', '5vw' ],
    [ 'Position', '5vw' ],
    [ 'Name', 'auto' ]
  ]

  const handleChange = ({ target: { value } }) => setSeason(value)

  const handleFetch = useCallback((url, stat_type, state_value, load_value) => {
    setIsLoaded(prevState => {
      return { ...prevState, [load_value]: false }
    })

    fetch(`https://api.mysportsfeeds.com/v1.2/pull/nba/${ season }-regular/cumulative_player_stats.json?${ url }`,{
      headers: {
        'Authorization' : 'Basic ' + btoa(process.env.REACT_APP_NBA_USERNAME + ':' + process.env.REACT_APP_NBA_PASSWORD),
        'Cache-Control' : 'no-cache, no-store, must-revalidate',
        'Accept-Encoding' : 'gzip'
      },
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      const values = data.cumulativeplayerstats.playerstatsentry.map((player, index) => (
        <tr key={index}>
          <td>{player.stats[stat_type]['#text']}</td>
          <td>{player.player.Position}</td>
          <td>{player.player.FirstName} {player.player.LastName}</td>
        </tr>
      ))
      setStats(prevState => {
        return { ...prevState, [state_value]: values }
      })
      setIsLoaded(prevState => {
        return { ...prevState, [load_value]: true }
      })
    })
    .catch(error => {
      console.log(error)
    })
  }, [season])

  useEffect(() => { // componentDidMount
    console.log("Running...")
    handleFetch('limit=10&sort=stats.Pts.D&playerstats=Pts&force=true', 'Pts', 'points', 'isLoadedPts')
    handleFetch('limit=10&sort=stats.Ast.D&playerstats=Ast&force=true', 'Ast', 'assists', 'isLoadedAst')
    handleFetch('limit=10&sort=stats.Reb.D&playerstats=Reb&force=true', 'Reb', 'rebounds', 'isLoadedReb')
    return () => console.log('Unmounting...')
  }, [handleFetch])

  return (
    <StyledPlayers className="page">
      <Form>
        <div>
          <Label>Season</Label>
          <Select name="season" value={season} onChange={handleChange}>
            {seasons.map(val => (
              <option value={val}>{val}</option>
            ))}
          </Select>
        </div>
      </Form>
      <div className="grid">
        <Table tableTitle="Points Scored" tableData={tableDataPts} isLoaded={isLoaded.isLoadedPts}>{stats.points}</Table>
        <Table tableTitle="Assists" tableData={tableDataAst} isLoaded={isLoaded.isLoadedAst}>{stats.assists}</Table>
        <Table tableTitle="Rebounds" tableData={tableDataReb} isLoaded={isLoaded.isLoadedReb}>{stats.rebounds}</Table>
      </div>
    </StyledPlayers>
  )
}