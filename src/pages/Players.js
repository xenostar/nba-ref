import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Table, Form, Label, Select } from 'components'

const StyledPlayers = styled.div`
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

export const Players = () => {
  const __API__ = 'https://api.mysportsfeeds.com/v1.2/pull/nba/'
  const [values, setValues] = useState({ season: '2018-2019', seasonType: 'regular' })
  const [stats, setStats] = useState({ points: [], assists: [], rebounds: [] })
  const [isLoaded, setIsLoaded] = useState({ isLoadedPts: false, isLoadedAst: false, isLoadedReb: false })
  const seasons = [
    '2018-2019',
    '2017-2018',
    '2016-2017',
    // '2015-2016',
  ]
  const seasonType = [
    'regular',
    'playoff',
  ]
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

  const handleChange = ({ target: { name, value } }) => {
    setValues(prevState => {
      return { ...prevState, [name]: value }
    })
  }

  const handleFetch = useCallback((url, state_value, load_value) => {
    setIsLoaded(prevState => {
      return { ...prevState, [load_value]: false }
    })

    fetch(`${ __API__ + values.season }-${ values.seasonType }/cumulative_player_stats.json?${ url }`,{
      headers: {
        'Authorization' : 'Basic ' + btoa(process.env.REACT_APP_NBA_USERNAME + ':' + process.env.REACT_APP_NBA_PASSWORD),
        'Accept-Encoding' : 'gzip'
      },
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      setStats(prevState => {
        return { ...prevState, [state_value]: data.cumulativeplayerstats.playerstatsentry }
      })
      setIsLoaded(prevState => {
        return { ...prevState, [load_value]: true }
      })
    })
    .catch(error => {
      console.log(error)
    })
  }, [values])

  useEffect(() => { // componentDidMount
    console.log("Mounting Players...")
    handleFetch('limit=10&sort=stats.Pts.D&playerstats=Pts&force=true', 'points', 'isLoadedPts')
    handleFetch('limit=10&sort=stats.Ast.D&playerstats=Ast&force=true', 'assists', 'isLoadedAst')
    handleFetch('limit=10&sort=stats.Reb.D&playerstats=Reb&force=true', 'rebounds', 'isLoadedReb')
    return () => console.log('Unmounting Players...')
  }, [handleFetch])

  return (
    <StyledPlayers className="page">
      <Form>
        <div>
          <Label>Season</Label>
          <Select name="season" value={values.season} onChange={handleChange}>
            {seasons.map(val => (
              <option key={val} value={val}>{val}</option>
            ))}
          </Select>
        </div>
        <div>
          <Label>Type</Label>
          <Select name="seasonType" value={values.seasonType} onChange={handleChange}>
            {seasonType.map(val => (
              <option key={val} value={val}>{val.charAt(0).toUpperCase() + val.substring(1)}</option>
            ))}
          </Select>
        </div>
      </Form>
      <div className="grid">
        <Table tableTitle="Points Scored" tableData={tableDataPts} loaderHeight="10" isLoaded={isLoaded.isLoadedPts}>
          {stats.points.map((player, index) => {
            const url_firstName = player.player.FirstName.toLowerCase().replace(/[^a-zA-Z]/g, "")
            const url_LasttName = player.player.LastName.toLowerCase().replace(/[^a-zA-Z]/g, "")
            return (
              <tr key={index}>
                <td>{player.stats['Pts']['#text']}</td>
                <td>{player.player.Position}</td>
                <td><Link to={'/player/' + url_firstName + '-' + url_LasttName}>{player.player.FirstName} {player.player.LastName}</Link></td>
              </tr>
            )
          })}
        </Table>
        <Table tableTitle="Assists" tableData={tableDataAst} loaderHeight="10" isLoaded={isLoaded.isLoadedAst}>
          {stats.assists.map((player, index) => {
            const url_firstName = player.player.FirstName.toLowerCase().replace(/[^a-zA-Z]/g, "")
            const url_LasttName = player.player.LastName.toLowerCase().replace(/[^a-zA-Z]/g, "")
            return (
              <tr key={index}>
                <td>{player.stats['Ast']['#text']}</td>
                <td>{player.player.Position}</td>
                <td><Link to={'/player/' + url_firstName + '-' + url_LasttName}>{player.player.FirstName} {player.player.LastName}</Link></td>
              </tr>
            )
          })}
        </Table>
        <Table tableTitle="Rebounds" tableData={tableDataReb} loaderHeight="10" isLoaded={isLoaded.isLoadedReb}>
          {stats.rebounds.map((player, index) => {
            const url_firstName = player.player.FirstName.toLowerCase().replace(/[^a-zA-Z]/g, "")
            const url_LasttName = player.player.LastName.toLowerCase().replace(/[^a-zA-Z]/g, "")
            return (
              <tr key={index}>
                <td>{player.stats['Reb']['#text']}</td>
                <td>{player.player.Position}</td>
                <td><Link to={'/player/' + url_firstName + '-' + url_LasttName}>{player.player.FirstName} {player.player.LastName}</Link></td>
              </tr>
            )
          })}
        </Table>
      </div>
    </StyledPlayers>
  )
}
