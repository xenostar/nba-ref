import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
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
  const _API_ = 'https://api.mysportsfeeds.com/v1.2/pull/nba/'
  const [values, setValues] = useState({ season: seasons[0].value })
  const [standings, setStandings] = useState({ eastern: [], western: [] })
  const [isLoaded, setIsLoaded] = useState(false)
  const tableData = {
    '#': '3.125rem',
    'Wins': '3.75rem',
    'Name': 'auto',
  }

  const handleChange = ({ target: { name, value } }) => {
    setValues(prevState => {
      return { ...prevState, [name]: value }
    })
  }

  const handleFetch = useCallback(() => {
    setIsLoaded(false)

    fetch(`${ _API_ + values.season }/conference_team_standings.json?teamstats=w`, {
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
  }, [values])

  useEffect(() => {
    handleFetch()
  }, [handleFetch])

  return (
    <StyledStandings>
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
        <Table tableTitle="Western Standings" tableData={tableData} loaderHeight="15" isLoaded={isLoaded}>
          {isLoaded && standings.western.map(data => (
            <tr key={data.team.Name}>
              <td>{data.rank}</td>
              <td>{data.stats.Wins['#text']}</td>
              <td><Link to={'/teams/roster/' + data.team.Abbreviation.toLowerCase()}>{data.team.City} {data.team.Name}</Link></td>
            </tr>
          ))}
        </Table>
        <Table tableTitle="Eastern Standings" tableData={tableData} loaderHeight="15" isLoaded={isLoaded}>
          {isLoaded && standings.eastern.map(data => (
            <tr key={data.team.Name}>
              <td>{data.rank}</td>
              <td>{data.stats.Wins['#text']}</td>
              <td><Link to={'/teams/roster/' + data.team.Abbreviation.toLowerCase()}>{data.team.City} {data.team.Name}</Link></td>
            </tr>
          ))}
        </Table>
      </div>
    </StyledStandings>
  )
}
