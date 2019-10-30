import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Link, useHistory, useParams } from 'react-router-dom'
import { Table, Form, Select } from 'components'
import seasons from 'api/seasons'
import teams from 'api/teams'

const StyledTeamRoster = styled.div``

export const TeamRoster = () => {
  const _API_ = 'https://api.mysportsfeeds.com/v2.1/pull/nba/'
  const history = useHistory()
  const {teamNameSlug} = useParams()
  const [values, setValues] = useState({ team: teamNameSlug, season: seasons[0].value })
  const [roster, setRoster] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const tableData = {
    '#': '3.125rem',
    'Name': 'auto',
    'Posn': '10%',
    'Age': '10%',
    'Height': '10%',
    'Weight': '10%',
  }

  const formatPlayerName = (name) => name.toLowerCase().replace(/[^a-zA-Z]/g, "")

  const handleChange = ({ target: { name, value } }) => {
    setValues(prevState => {
      return { ...prevState, [name]: value }
    })
    if (name === "team") {
      history.push(value)
    }
  }

  const handleFetch = useCallback(() => {
    setIsLoaded(false)

    fetch(`${ _API_ }players.json?season=${ values.season }&team=${ values.team }&rosterstatus=assigned-to-roster&sort=player.lastname.A`, {
      headers: {
        'Authorization' : 'Basic ' + btoa(process.env.REACT_APP_NBA_APIKEY + ':' + process.env.REACT_APP_NBA_APIPASS),
        'Accept-Encoding' : 'gzip'
      },
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      setRoster(data.players)
      setIsLoaded(true)
    })
    .catch(error => {
      console.log(error)
    })
  }, [values])

  useEffect(() => {
    handleFetch()
  }, [handleFetch])

  useEffect(() => {
    setValues(prevState => {
      return { ...prevState, team: teamNameSlug }
    })
  }, [teamNameSlug])

  return (
    <StyledTeamRoster>
      <Form>
        <Select label="Team" name="team" value={values.team} onChange={handleChange}>
          {teams.map(data => (
            <option key={data.name} value={data.abbreviation}>{data.city + ' ' + data.name}</option>
          ))}
        </Select>
        <Select label="Season" name="season" value={values.season} onChange={handleChange}>
          {seasons.map(({name, value}) => (
            <option key={value} value={value}>{name}</option>
          ))}
        </Select>
      </Form>
      <Table tableTitle="Team Roster" tableData={tableData} isLoaded={isLoaded}>
        {isLoaded && roster.map(({ player }, index) => {
          const urlFirstName = formatPlayerName(player.firstName)
          const urlLasttName = formatPlayerName(player.lastName)
          return (
            <tr key={index}>
              <td>{player.jerseyNumber}</td>
              <td><Link to={'/players/stats/' + urlFirstName + '-' + urlLasttName}>{player.firstName} {player.lastName}</Link></td>
              <td>{player.primaryPosition || '--'}</td>
              <td>{player.age || '--'}</td>
              <td>{player.height || '--'}</td>
              <td>{player.weight ? player.weight + ' lbs' : '--'}</td>
            </tr>
          )
        })}
      </Table>
    </StyledTeamRoster>
  )
}
