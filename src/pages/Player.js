import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Table, Form, Label, Select } from 'components'

const StyledPlayer = styled.div`
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
  .player-card {
    margin-bottom: 40px;
  }
`

export const Player = props => {
  const routePlayerName = props.match.params.playername
  const [season, setSeason] = useState('2018-2019')
  const [info, setInfo] = useState({ playerInfo: [], playerStatsFieldGoals: [] })
  const [isLoaded, setIsLoaded] = useState(false)
  const seasons = [
    '2018-2019',
    '2017-2018',
    '2016-2017',
    '2015-2016'
  ]
  const tableData = [
    [ 'Stat', '50%' ],
    [ 'Name', 'auto' ]
  ]

  const handleChange = ({ target: { value } }) => setSeason(value)

  const handleFetch = useCallback(() => {
    setIsLoaded(false)

    fetch(`https://api.mysportsfeeds.com/v2.1/pull/nba/${ season }-regular/player_stats_totals.json?player=${ routePlayerName }`, {
      headers: {
        'Authorization' : 'Basic ' + btoa(process.env.REACT_APP_NBA_APIKEY + ':' + process.env.REACT_APP_NBA_APIPASS),
        'Cache-Control' : 'no-cache, no-store, must-revalidate',
        'Accept-Encoding' : 'gzip'
      },
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data.playerStatsTotals)
      const playerInfoData = data.playerStatsTotals.map(({ player }, index) => {
        return (
          <div key={index}>
            <img src={player.officialImageSrc} alt="Player" />
            <h1>{player.firstName} {player.lastName}</h1>
            <div>Team: {player.currentTeam.abbreviation}</div>
            <div>Position: {player.primaryPosition}</div>
            <div>Jersey Number: {player.jerseyNumber}</div>
            <div>Current Roster Status: {player.currentRosterStatus}</div>
            <div>Height: {player.height}</div>
            <div>Weight: {player.weight}</div>
            <div>Age: {player.age} ({player.birthDate})</div>
          </div>
        )
      })
      const playerStatsFieldGoalsData = data.playerStatsTotals.map(({ stats }, index) => {
        return (
          <tr key={index}>
            <td>FG2PtAtt</td>
            <td>{stats.fieldGoals.fg2PtAtt}</td>
          </tr>
        )
      })
      setInfo(prevState => {
        return {
          ...prevState,
          playerInfo: playerInfoData,
          playerStatsFieldGoals: playerStatsFieldGoalsData
        }
      })
      setIsLoaded(true)
    })
    .catch(error => {
      console.log(error)
    })
  }, [season, routePlayerName])

  useEffect(() => { // componentDidMount
    console.log("Mounting Player...")
    handleFetch()
    return () => console.log('Unmounting Player...')
  }, [handleFetch])

  return (
    <StyledPlayer className="page">
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
      <div className="player-card">
        {info.playerInfo}
      </div>
      <div className="grid">
        <Table tableTitle="Field Goals" tableData={tableData} isLoaded={isLoaded}>{info.playerStatsFieldGoals}</Table>
        <div>Player page for {props.match.params.playername}</div>
        <div>Player page for {props.match.params.playername}</div>
      </div>
    </StyledPlayer>
  )
}
