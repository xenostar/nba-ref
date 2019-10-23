import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Table, Form, Label, Select } from 'components'
import seasons from 'api/seasons'

const StyledStandings = styled.div`
  .grid {
    display: grid;
    grid-gap: 2.5rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
  @media only screen and (max-width: 62.5rem) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`

export const TeamsStandings = () => {
  const __API__ = 'https://api.mysportsfeeds.com/v1.2/pull/nba/'
  const [season, setSeason] = useState('2018-2019-regular')
  const [standings, setStandings] = useState({ eastern: [], western: [] })
  const [isLoaded, setIsLoaded] = useState(false)
  const tableData = {
    '#': '3.125rem',
    'Wins': '3.75rem',
    'Name': 'auto',
  }

  const handleChange = ({ target: { value } }) => setSeason(value)

  const handleFetch = useCallback(() => {
    setIsLoaded(false)

    fetch(`${ __API__ + season }/conference_team_standings.json?teamstats=w`, {
      headers: {
        'Authorization' : 'Basic ' + btoa(process.env.REACT_APP_NBA_USERNAME + ':' + process.env.REACT_APP_NBA_PASSWORD),
        'Accept-Encoding' : 'gzip'
      },
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      setStandings(prevState => {
        return {
          ...prevState,
          eastern: data.conferenceteamstandings.conference[0].teamentry,
          western: data.conferenceteamstandings.conference[1].teamentry
        }
      })
      setIsLoaded(true)
    })
    .catch(error => {
      console.log(error)
    })
  }, [season])

  useEffect(() => {
    handleFetch()
  }, [handleFetch])

  return (
    <StyledStandings className="page">
      <Form>
        <div>
          <Label>Season</Label>
          <Select name="season" value={season} onChange={handleChange}>
          {seasons.map(({name, value}) => (
              <option key={value} value={value}>{name}</option>
            ))}
          </Select>
        </div>
      </Form>
      <div className="grid">
        <Table tableTitle="Western Standings" tableData={tableData} loaderHeight="15" isLoaded={isLoaded}>
          {isLoaded && standings.western.map((team, index) => (
            <tr key={index}>
              <td>{team.rank}</td>
              <td>{team.stats.Wins['#text']}</td>
              <td>{team.team.City} {team.team.Name}</td>
            </tr>
          ))}
        </Table>
        <Table tableTitle="Eastern Standings" tableData={tableData} loaderHeight="15" isLoaded={isLoaded}>
          {isLoaded && standings.eastern.map((team, index) => (
            <tr key={index}>
              <td>{team.rank}</td>
              <td>{team.stats.Wins['#text']}</td>
              <td>{team.team.City} {team.team.Name}</td>
            </tr>
          ))}
        </Table>
      </div>
    </StyledStandings>
  )
}
