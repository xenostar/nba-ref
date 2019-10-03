import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'

// Components
import Table from '../../components/table/Table'

const StyledTeam = styled.div`
  form {
    margin-bottom: 2.5rem;
    overflow: hidden;
  }
  form label {
    background: rgba(0,0,0,0.05);
    border: 1px solid #ddd;
    border-right: 0;
    border-radius: 3px 0 0 3px;
    color: #aaa;
    float: left;
    font-size: 12px;
    font-weight: 700;
    line-height: 38px;
    padding: 0 10px;
    text-transform: uppercase;
  }
  form select {
    border: 1px solid #ddd;
    border-radius: 0 3px 3px 0;
    color: #444;
    cursor: pointer;
    font-size: 1.125em;
    font-weight: 500;
    height: 2.5rem;
    line-height: 2.5rem;
    padding: 0 10px;
    -webkit-appearance: none;
  }
  form select:-moz-focusring {
    outline: 0;
  }
  form div {
    float: left;
    margin-left: 20px;
  }
  form div:first-child {
    margin-left: 0;
  }
`

export default function Teams() {
  const [values, setValues] = useState({ season: '2018-2019', team: 'ind' })
  const [roster, setRoster] = useState({ roster: [] })
  const [isLoaded, setIsLoaded] = useState(false)
  const tableData = {
    cols: [
      [ '#', '5vw' ],
      [ 'Name', 'auto' ],
      [ 'Position', '10vw' ],
      [ 'Age', '10vw' ],
      [ 'Height', '10vw' ],
      [ 'Weight', '10vw' ]
    ]
  }

  const handleChange = ({ target: { name, value } }) => {
    setValues(prevState => {
      return { ...prevState, [name]: value }
    })
  }

  const handleFetch = useCallback(() => {
    setIsLoaded(false)

    fetch(`https://api.mysportsfeeds.com/v1.2/pull/nba/${ values.season }-regular/roster_players.json?team=${ values.team }&rosterstatus=assigned-to-roster`, {
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
      const values = data.rosterplayers.playerentry.map((player, index) => {
        return (
          <tr key={index}>
            <td>{player.player.JerseyNumber}</td>
            <td>{player.player.FirstName} {player.player.LastName}</td>
            <td>{player.player.Position ? player.player.Position : '--'}</td>
            <td>{player.player.Age ? player.player.Age : '--'}</td>
            <td>{player.player.Height ? player.player.Height : '--'}</td>
            <td>{player.player.Weight ? player.player.Weight + ' lbs' : '--'}</td>
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
    console.log("Running...")
    handleFetch()
    return () => console.log('Unmounting...')
  }, [handleFetch])

  return (
    <StyledTeam className="page">
      <form>
        <div>
          <label>Team</label>
          <select name="team" value={values.team} onChange={handleChange}>
            <option value="atl">Atlanta Hawks</option>
            <option value="bos">Boston Celtics</option>
            <option value="bro">Brooklyn Nets</option>
            <option value="chi">Chicago Bulls</option>
            <option value="cle">Cleveland Cavaliers</option>
            <option value="cha">Charlotte Hornets</option>
            <option value="dal">Dallas Mavericks</option>
            <option value="det">Detroit Pistons</option>
            <option value="den">Denver Nuggets</option>
            <option value="gsw">Golden State Warriors</option>
            <option value="hou">Houston Rockets</option>
            <option value="ind">Indiana Pacers</option>
            <option value="lac">LA Clippers</option>
            <option value="lal">Los Angeles Lakers</option>
            <option value="mem">Memphis Grizzlies</option>
            <option value="mia">Miami Heat</option>
            <option value="mil">Milwaukee Bucks</option>
            <option value="min">Minnesota Timberwolves</option>
            <option value="nop">New Orleans Pelicans</option>
            <option value="nyk">New York Knicks</option>
            <option value="okl">Oklhahoma City</option>
            <option value="orl">Orlando Magic</option>
            <option value="phx">Pheonix Suns</option>
            <option value="phi">Philadelphia 76ers</option>
            <option value="por">Portland Trailblazers</option>
            <option value="sac">Sacremento Kings</option>
            <option value="sas">San Antonio Spurs</option>
            <option value="tor">Toronto Raptors</option>
            <option value="uta">Utah Jazz</option>
            <option value="was">Washington Wizards</option>
          </select>
        </div>
        <div>
          <label>Season</label>
          <select name="season" value={values.season} onChange={handleChange}>
          <option value="2018-2019">2018-2019</option>
          <option value="2017-2018">2017-2018</option>
          <option value="2016-2017">2016-2017</option>
          <option value="2015-2016">2015-2016</option>
          </select>
        </div>
      </form>
      <Table tableTitle="Team Roster" tableData={tableData} isLoaded={isLoaded}>{roster.roster}</Table>
    </StyledTeam>
  )
}
