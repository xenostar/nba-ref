import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Table, Form, Label, Select } from 'components'

const StyledStandings = styled.div`
  .grid {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
  @media only screen and (max-width: 1000px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`

export const Standings = () => {
  const [season, setSeason] = useState('2018-2019')
  const [standings, setStandings] = useState({ eastern: [], western: [] })
  const [isLoaded, setIsLoaded] = useState(false)
  const seasons = [
    '2018-2019',
    '2017-2018',
    '2016-2017',
    '2015-2016'
  ]
  const tableData = [
    [ '#', '10%' ],
    [ 'Wins', '10%' ],
    [ 'Name', 'auto' ]
  ]

  const handleChange = ({ target: { value } }) => setSeason(value)

  const handleFetch = useCallback(() => {
    setIsLoaded(false)

    fetch(`https://api.mysportsfeeds.com/v1.2/pull/nba/${ season }-regular/conference_team_standings.json?teamstats=w`, {
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
      const eastern_standings = data.conferenceteamstandings.conference[0].teamentry.map((team, index) => (
        <tr key={index}>
          <td>{team.rank}</td>
          <td>{team.stats.Wins['#text']}</td>
          <td>{team.team.City} {team.team.Name}</td>
        </tr>
      ))
      const western_standings = data.conferenceteamstandings.conference[1].teamentry.map((team, index) => (
        <tr key={index}>
          <td>{team.rank}</td>
          <td>{team.stats.Wins['#text']}</td>
          <td>{team.team.City} {team.team.Name}</td>
        </tr>
      ))
      setStandings(prevState => {
        return { ...prevState, eastern: eastern_standings, western: western_standings }
      })
      setIsLoaded(true)
    })
    .catch(error => {
      console.log(error)
    })
  }, [season])

  useEffect(() => { // componentDidMount
    console.log("Running...")
    handleFetch()
    return () => console.log('Unmounting...')
  }, [handleFetch])

  return (
    <StyledStandings className="page">
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
      <div className="grid">
        <Table tableTitle="Western Standings" tableData={tableData} isLoaded={isLoaded}>{standings.western}</Table>
        <Table tableTitle="Eastern Standings" tableData={tableData} isLoaded={isLoaded}>{standings.eastern}</Table>
      </div>
    </StyledStandings>
  )
}
