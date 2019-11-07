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

export const SeasonStandings = ({values}) => {
  const _API_ = 'https://api.mysportsfeeds.com/v1.2/pull/nba/'
  const [standings, setStandings] = useState({ eastern: [], western: [] })
  const [isLoading, setIsLoading] = useState(true)
  const tableData = {
    '#': '3.125rem',
    'W/L': '4.375rem',
    'Name': 'auto',
  }

  const handleFetch = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`${ _API_ + values.season }/conference_team_standings.json?teamstats=w`, {
        headers: {
          'Authorization' : 'Basic ' + btoa(process.env.REACT_APP_NBA_USERNAME + ':' + process.env.REACT_APP_NBA_PASSWORD),
          'Accept-Encoding' : 'gzip'
        },
      })
      const data = await response.json()
      setStandings({
        eastern: data.conferenceteamstandings.conference[0].teamentry,
        western: data.conferenceteamstandings.conference[1].teamentry
      })
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }, [values])

  useEffect(() => {
    handleFetch()
  }, [handleFetch])

  return (
    <StyledSeasonStandings>
      <Table tableTitle="Western Standings" tableData={tableData} loaderHeight="15" isLoading={isLoading}>
        {isLoading || standings.western.map(data => (
          <tr key={data.team.Name}>
            <td>{data.rank}</td>
            <td>{data.stats.Wins['#text']} - {data.stats.GamesPlayed['#text'] - data.stats.Wins['#text']}</td>
            <td>
              <Link to={`/teams/roster/${data.team.Abbreviation.toLowerCase()}/${values.season}`}>
                {data.team.City} {data.team.Name}
              </Link>
            </td>
          </tr>
        ))}
      </Table>
      <Table tableTitle="Eastern Standings" tableData={tableData} loaderHeight="15" isLoading={isLoading}>
        {isLoading || standings.eastern.map(data => (
          <tr key={data.team.Name}>
            <td>{data.rank}</td>
            <td>{data.stats.Wins['#text']} - {data.stats.GamesPlayed['#text'] - data.stats.Wins['#text']}</td>
            <td>
              <Link to={`/teams/roster/${data.team.Abbreviation.toLowerCase()}/${values.season}`}>
                {data.team.City} {data.team.Name}
              </Link>
            </td>
          </tr>
        ))}
      </Table>
    </StyledSeasonStandings>
  )
}
