import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Link, useHistory, useParams } from 'react-router-dom'
import { Table, Form, Label, Select } from 'components'
import seasons from 'api/seasons'

const StyledSeasonLeaders = styled.div`
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

export const SeasonLeaders = () => {
  const _API_ = 'https://api.mysportsfeeds.com/v1.2/pull/nba/'
  const history = useHistory()
  const {seasonSlug} = useParams()
  const [values, setValues] = useState({ season: seasonSlug })
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

  const handleChange = ({ target: { name, value } }) => {
    setValues(prevState => {
      return { ...prevState, [name]: value }
    })
    if (name === "season") {
      history.push(value)
    }
  }

  const handleFetch = useCallback((url, stateValue, loadValue) => {
    setIsLoaded(prevState => {
      return { ...prevState, [loadValue]: false }
    })

    fetch(`${ _API_ + values.season }/cumulative_player_stats.json?${ url }`,{
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
  }, [values])

  useEffect(() => {
    handleFetch('limit=10&sort=stats.Pts.D&playerstats=Pts&force=true', 'points', 'isLoadedPts')
    handleFetch('limit=10&sort=stats.Ast.D&playerstats=Ast&force=true', 'assists', 'isLoadedAst')
    handleFetch('limit=10&sort=stats.Reb.D&playerstats=Reb&force=true', 'rebounds', 'isLoadedReb')
  }, [handleFetch])

  useEffect(() => {
    setValues(prevState => {
      return { ...prevState, team: seasonSlug }
    })
  }, [seasonSlug])

  return (
    <StyledSeasonLeaders>
      <Form>
        <div>
          <Label>Season</Label>
          <Select name="season" value={values.season} onChange={handleChange}>
            {seasons.map(({name, value}) => (
              <option key={value} value={value}>{name}</option>
            ))}
          </Select>
        </div>
      </Form>
      <div className="grid">
        <Table tableTitle="Points Scored" tableData={tableDataPts} loaderHeight="10" isLoaded={isLoaded.isLoadedPts}>
          {leaders.points.map((player, index) => {
            const urlFirstName = player.player.FirstName.toLowerCase().replace(/[^a-zA-Z]/g, "")
            const urlLasttName = player.player.LastName.toLowerCase().replace(/[^a-zA-Z]/g, "")
            return (
              <tr key={index}>
                <td>{player.stats['Pts']['#text']}</td>
                <td>{player.player.Position}</td>
                <td><Link to={'/players/stats/' + urlFirstName + '-' + urlLasttName}>{player.player.FirstName} {player.player.LastName}</Link></td>
              </tr>
            )
          })}
        </Table>
        <Table tableTitle="Assists" tableData={tableDataAst} loaderHeight="10" isLoaded={isLoaded.isLoadedAst}>
          {leaders.assists.map((player, index) => {
            const urlFirstName = player.player.FirstName.toLowerCase().replace(/[^a-zA-Z]/g, "")
            const urlLasttName = player.player.LastName.toLowerCase().replace(/[^a-zA-Z]/g, "")
            return (
              <tr key={index}>
                <td>{player.stats['Ast']['#text']}</td>
                <td>{player.player.Position}</td>
                <td><Link to={'/players/stats/' + urlFirstName + '-' + urlLasttName}>{player.player.FirstName} {player.player.LastName}</Link></td>
              </tr>
            )
          })}
        </Table>
        <Table tableTitle="Rebounds" tableData={tableDataReb} loaderHeight="10" isLoaded={isLoaded.isLoadedReb}>
          {leaders.rebounds.map((player, index) => {
            const urlFirstName = player.player.FirstName.toLowerCase().replace(/[^a-zA-Z]/g, "")
            const urlLasttName = player.player.LastName.toLowerCase().replace(/[^a-zA-Z]/g, "")
            return (
              <tr key={index}>
                <td>{player.stats['Reb']['#text']}</td>
                <td>{player.player.Position}</td>
                <td><Link to={'/players/stats/' + urlFirstName + '-' + urlLasttName}>{player.player.FirstName} {player.player.LastName}</Link></td>
              </tr>
            )
          })}
        </Table>
      </div>
    </StyledSeasonLeaders>
  )
}
