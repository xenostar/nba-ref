import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Link, useHistory, useParams } from 'react-router-dom'
import { Table, Form, Label, Select } from 'components'
import seasons from 'api/seasons'

const StyledTeam = styled.div``

export const Teams = () => {
  const __API__ = 'https://api.mysportsfeeds.com/v2.1/pull/nba/'
  const history = useHistory()
  const {teamNameSlug} = useParams()
  const [values, setValues] = useState({ team: teamNameSlug, season: '2018-2019-regular'})
  const [roster, setRoster] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const teams = {
    atl: 'Atlanta Hawks',
    bos: 'Boston Celtics',
    bro: 'Brooklyn Nets',
    chi: 'Chicago Bulls',
    cle: 'Cleveland Cavaliers',
    cha: 'Charlotte Hornets',
    dal: 'Dallas Mavericks',
    det: 'Detroit Pistons',
    den: 'Denver Nuggets',
    gsw: 'Golden State',
    hou: 'Houston Rockets',
    ind: 'Indiana Pacers',
    lac: 'LA Clippers',
    lal: 'Los Angeles',
    mem: 'Memphis Grizzlies',
    mia: 'Miami Heat',
    mil: 'Milwaukee Bucks',
    min: 'Minnesota Timberwolves',
    nop: 'New Orleans',
    nyk: 'New York',
    okl: 'Oklhahoma City',
    orl: 'Orlando Magic',
    phx: 'Pheonix Suns',
    phi: 'Philadelphia 76ers',
    por: 'Portland Trailblazers',
    sac: 'Sacremento Kings',
    sas: 'San Antonio',
    tor: 'Toronto Raptors',
    uta: 'Utah Jazz',
    was: 'Washington Wizards',
  }
  const tableData = {
    '#': '3.125rem',
    'Name': 'auto',
    'Posn': '10%',
    'Age': '10%',
    'Height': '10%',
    'Weight': '10%',
  }

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

    fetch(`${ __API__ }players.json?season=${ values.season }&team=${ values.team }&rosterstatus=assigned-to-roster&sort=player.lastname.A`, {
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
  }, [teamNameSlug]);

  return (
    <StyledTeam className="page">
      <Form>
        <div>
          <Label>Team</Label>
          <Select name="team" value={values.team} onChange={handleChange}>
            {Object.entries(teams).map(([val, teamName]) => (
              <option key={val} value={val}>{teamName}</option>
            ))}
          </Select>
        </div>
        <div>
          <Label>Season</Label>
          <Select name="season" value={values.season} onChange={handleChange}>
            {seasons.map(({name, value}) => (
              <option key={value} value={value}>{name}</option>
            ))}
          </Select>
        </div>
      </Form>
      <Table tableTitle="Team Roster" tableData={tableData} isLoaded={isLoaded}>
        {isLoaded && roster.map(({ player }, index) => {
          const urlFirstName = player.firstName.toLowerCase().replace(/[^a-zA-Z]/g, "")
          const urlLasttName = player.lastName.toLowerCase().replace(/[^a-zA-Z]/g, "")
          return (
            <tr key={index}>
              <td>{player.jerseyNumber}</td>
              <td><Link to={'/players/' + urlFirstName + '-' + urlLasttName}>{player.firstName} {player.lastName}</Link></td>
              <td>{player.primaryPosition || '--'}</td>
              <td>{player.age || '--'}</td>
              <td>{player.height || '--'}</td>
              <td>{player.weight ? player.weight + ' lbs' : '--'}</td>
            </tr>
          )
        })}
      </Table>
    </StyledTeam>
  )
}
