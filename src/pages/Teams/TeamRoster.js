import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Table } from 'components'
import { formatPlayerName } from 'utils'

const StyledTeamRoster = styled.div``

export const TeamRoster = ({values}) => {
  const _URL_ = 'v2.1/pull/nba/'
  const [roster, setRoster] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const tableData = {
    '#': '3.125rem',
    'Name': 'auto',
    'Posn': '10%',
    'Age': '10%',
    'Height': '10%',
    'Weight': '10%',
  }

  useEffect(() => {
    const source = axios.CancelToken.source()

    const handleFetch = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get(`${ _URL_ }players.json?season=${ values.season }&team=${ values.team }&rosterstatus=assigned-to-roster&sort=player.lastname.A`,{
          cancelToken: source.token
        })
        setRoster(res.data.players)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    handleFetch()

    return () => source.cancel("Cancelling TeamRoster request")
  }, [values])

  return (
    <StyledTeamRoster>
      <Table tableTitle="Team Roster" tableData={tableData} isLoading={isLoading}>
        {isLoading || roster.map(({ player }, index) => {
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
