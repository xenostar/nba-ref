import React, { useState, useEffect, useCallback } from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { Table, Form, Label, Select } from 'components'

const StyledTeam = styled.div``

export const Teams = () => {
  const [values, setValues] = useState({ season: '2018-2019', team: 'ind' })
  const [roster, setRoster] = useState({ roster: [] })
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
    was: 'Washington Wizards'
  }
  const seasons = [
    '2018-2019',
    '2017-2018',
    '2016-2017',
    '2015-2016'
  ]
  const tableData = [
    [ '#', '5vw' ],
    [ 'Name', 'auto' ],
    [ 'Position', '10vw' ],
    [ 'Age', '10vw' ],
    [ 'Height', '10vw' ],
    [ 'Weight', '10vw' ]
  ]

  const handleChange = ({ target: { name, value } }) => {
    setValues(prevState => {
      return { ...prevState, [name]: value }
    })
  }

  const handleFetch = useCallback(() => {
    setIsLoaded(false)

    fetch(`https://api.mysportsfeeds.com/v2.1/pull/nba/players.json?season=${ values.season }-regular&team=${ values.team }&rosterstatus=assigned-to-roster&sort=player.lastname.A`, {
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
      console.log(data.players)
      const values = data.players.map(({ player }, index) => {
        const url_firstName = player.firstName.toLowerCase().replace(/[^a-zA-Z]/g, "")
        const url_LasttName = player.lastName.toLowerCase().replace(/[^a-zA-Z]/g, "")
        return (
          <tr key={index}>
            <td>{player.jerseyNumber}</td>
            <td><Link exact to={'/player/' + url_firstName + '-' + url_LasttName} activeClassName="active">{player.firstName} {player.lastName}</Link></td>
            <td>{player.primaryPosition || '--'}</td>
            <td>{player.age || '--'}</td>
            <td>{player.height || '--'}</td>
            <td>{player.weight ? player.weight + ' lbs' : '--'}</td>
          </tr>
        )
      })
      setRoster(prevState => {
        return { ...prevState, roster: values }
      })
      setIsLoaded(true)
    })
    .catch(error => {
      console.log(error)
    })
  }, [values])

  useEffect(() => { // componentDidMount
    handleFetch()
    return () => console.log('Unmounting...')
  }, [handleFetch])

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
            {seasons.map(val => (
              <option value={val}>{val}</option>
            ))}
          </Select>
        </div>
      </Form>
      <Table tableTitle="Team Roster" tableData={tableData} isLoaded={isLoaded}>{roster.roster}</Table>
    </StyledTeam>
  )
}
