import React, { useState, useEffect, useCallback, useRef } from 'react'
import styled from 'styled-components'
import { useFetch } from 'use-http'
import { Link } from 'react-router-dom'
import { Table } from 'components'

const StyledTeamRoster = styled.div``

export const TeamRoster = ({values}) => {
  const _API_ = '/v2.1/pull/nba/'
  const {data: roster, loading} = useFetch({
    onMount: true,
    data: { players: [] },
    path: `${ _API_ }players.json?season=${ values.season }&team=${ values.team }&rosterstatus=assigned-to-roster&sort=player.lastname.A`,
    onUpdate: [values]
  })
  // const {request, response, loading} = useFetch()
  // const [roster, setRoster] = useState([])
  // const [isLoading, setIsLoading] = useState(true)
  const tableData = {
    '#': '3.125rem',
    'Name': 'auto',
    'Posn': '10%',
    'Age': '10%',
    'Height': '10%',
    'Weight': '10%',
  }

  const formatPlayerName = name => name.toLowerCase().replace(/[^a-zA-Z]/g, "")

  // const handleFetch = useCallback(async () => {
  //   // setIsLoading(true)
  //   const data = await request.get(`${ _API_ }players.json?season=${ values.season }&team=${ values.team }&rosterstatus=assigned-to-roster&sort=player.lastname.A`)
  //   if (response.ok) {
  //     setRoster(data.players)
  //     // setIsLoading(false)
  //   }
  // }, [values])

  // useEffect(() => {
  //   handleFetch()
  // }, [handleFetch])

  // const handleFetch = async () => {
  //   setIsLoading(true)
  //   const data = await request.get(`${ _API_ }players.json?season=${ values.season }&team=${ values.team }&rosterstatus=assigned-to-roster&sort=player.lastname.A`)
  //   if (response.ok) {
  //     setRoster(data.players)
  //     setIsLoading(false)
  //   }
  // }

  // const handleFetch = useCallback(async () => {
  //   setIsLoading(true)
  //   // try {
  //   //   const data = await request.get(`${ _API_ }players.json?season=${ values.season }&team=${ values.team }&rosterstatus=assigned-to-roster&sort=player.lastname.A`)
  //   //   if (response.ok) {
  //   //     setRoster(data.players)
  //   //     setIsLoading(false)
  //   //   }
  //   // } catch (error) {
  //   //   console.log(error)
  //   // }
  //   try {
  //     const response = await fetch(`${ _API_ }players.json?season=${ values.season }&team=${ values.team }&rosterstatus=assigned-to-roster&sort=player.lastname.A`, {
  //       headers: {
  //         'Authorization' : 'Basic ' + btoa(process.env.REACT_APP_NBA_APIKEY + ':' + process.env.REACT_APP_NBA_APIPASS),
  //         'Accept-Encoding' : 'gzip'
  //       },
  //     })
  //     const data = await response.json()
  //     setRoster(data.players)
  //     setIsLoading(false)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }, [values])

  // useEffect(() => {
  //   handleFetch()
  // }, [handleFetch])

  return (
    <StyledTeamRoster>
      <Table tableTitle="Team Roster" tableData={tableData} isLoading={loading}>
        {loading || roster.players.map(({ player }, index) => {
          const urlFirstName = formatPlayerName(player.firstName)
          const urlLasttName = formatPlayerName(player.lastName)
          return (
            <tr key={index}>
              <td>{player.jerseyNumber}</td>
              <td>
                <Link to={`/players/stats/${urlFirstName}-${urlLasttName}/${values.season}`}>
                  {player.firstName} {player.lastName}
                </Link>
              </td>
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
