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
  const [info, setInfo] = useState({ info: [] })
  const [isLoaded, setIsLoaded] = useState(false)
  const seasons = [
    '2018-2019',
    '2017-2018',
    '2016-2017',
    '2015-2016'
  ]
  const tableData = [
    [ 'Pts', '5vw' ],
    [ 'Position', '5vw' ],
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
      const values = data.playerStatsTotals.map(({ player, team, stats }, index) => {
        // const url_firstName = player.firstName.toLowerCase().replace(/[^a-zA-Z]/g, "")
        // const url_LasttName = player.lastName.toLowerCase().replace(/[^a-zA-Z]/g, "")
        return (
          <tr key={index}>
            <td>{player.firstName} {player.lastName}</td>
            <td>{team.abbreviation}</td>
            <td>{stats.gamesPlayed}</td>
          </tr>
        )
      })
      setInfo(prevState => {
        return { ...prevState, info: values }
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
        <h1>{props.match.params.playername}</h1>
      </div>
      <div className="grid">
        <Table tableTitle="Offensive Stats" tableData={tableData} isLoaded={isLoaded}>{info.info}</Table>
        <div>Player page for {props.match.params.playername}</div>
        <div>Player page for {props.match.params.playername}</div>
      </div>
    </StyledPlayer>
  )
}
