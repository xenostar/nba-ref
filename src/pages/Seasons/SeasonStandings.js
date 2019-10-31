import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Table } from 'components'

const StyledSeasonStandings = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  @media only screen and (max-width: 62.5rem) {
    grid-template-columns: 1fr;
  }
`

export const SeasonStandings = props => {
  const _API_ = 'https://api.mysportsfeeds.com/v1.2/pull/nba/'
  const [standings, setStandings] = useState({ eastern: [], western: [] })
  const [isLoaded, setIsLoaded] = useState(false)
  const tableData = {
    '#': '3.125rem',
    'Wins': '3.75rem',
    'Name': 'auto',
  }

  const handleFetch = useCallback(() => {
    setIsLoaded(false)

    fetch(`${ _API_ + props.values.season }/conference_team_standings.json?teamstats=w`, {
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
  }, [props.values])

  useEffect(() => {
    handleFetch()
  }, [handleFetch])

  return (
    <StyledSeasonStandings>
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
    </StyledSeasonStandings>
  )
}
