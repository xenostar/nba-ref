import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Page, PlayerCard, Form, Label, Select } from 'components'
import seasons from 'api/seasons'

import { RadarChart } from 'react-vis'
import 'react-vis/dist/style.css'

const StyledPlayersCharts = styled(Page)`
  .grid {
    display: grid;
    grid-gap: 2.5rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
  @media only screen and (max-width: 87.5rem) { /* 1400px */
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media only screen and (max-width: 62.5rem) { /* 1000px */
    .grid {
      grid-template-columns: 1fr;
    }
  }
`

export const PlayersCharts = () => {
  const _API_ = 'https://api.mysportsfeeds.com/v2.1/pull/nba/'
  const {playerNameSlug} = useParams()
  const [values, setValues] = useState({ season: seasons[0].value })
  const [playerInfo, setPlayerInfo] = useState({})
  const [playerStats, setPlayerStats] = useState(null)
  const [playerReferences, setPlayerReferences] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)

  const powerGridDomains = [
    {name: '2PT %', domain: [0, 100], getValue: d => d.fg2PtPct},
    {name: '3PT %', domain: [0, 100], getValue: d => d.fg3PtPct},
    {name: 'FG %', domain: [0, 100], getValue: d => d.fgPct},
    {name: 'FT %', domain: [0, 100], getValue: d => d.ftPct}
  ]

  const powerGridData = !playerStats ? [] : [
    {
      fg2PtPct: playerStats.fieldGoals.fg2PtPct,
      fg3PtPct: playerStats.fieldGoals.fg3PtPct,
      fgPct: playerStats.fieldGoals.fgPct,
      ftPct: playerStats.freeThrows.ftPct
    }
  ]

  const handleChange = ({ target: { name, value } }) => {
    setValues(prevState => {
      return { ...prevState, [name]: value }
    })
  }

  const handleFetch = useCallback(() => {
    setIsLoaded(false)

    fetch(`${ _API_ + values.season }/player_stats_totals.json?player=${ playerNameSlug }`, {
      headers: {
        'Authorization' : 'Basic ' + btoa(process.env.REACT_APP_NBA_APIKEY + ':' + process.env.REACT_APP_NBA_APIPASS),
        'Accept-Encoding' : 'gzip'
      },
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      setPlayerInfo(data.playerStatsTotals[0].player)
      setPlayerStats(data.playerStatsTotals[0].stats)
      setPlayerReferences(data.references.teamReferences[0])
      setIsLoaded(true)
    })
    .catch(error => {
      console.log(error)
    })
  }, [values, playerNameSlug])

  useEffect(() => { // componentDidMount
    console.log("Mounting Player...")
    handleFetch()
    return () => console.log('Unmounting Player...')
  }, [handleFetch])

  return (
    <StyledPlayersCharts>
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
      <div className="powerGrid">
        <RadarChart
          data={powerGridData}
          domains={powerGridDomains}
          width={400}
          height={400}
          margin={{ left: 75, right: 75, top: 75, bottom: 75 }}
          style={{
            labels: {
              fill: "#444",
              fontSize: 12,
              fontWeight: 700
            },
            polygons: {
              strokeWidth: 2,
              strokeOpacity: 1,
              stroke: "#ED5429",
              strokeLinejoin: "round",
              fillOpacity: 0.1,
              fill: "#ED5429"
            }
          }}
        />
      </div>
      <PlayerCard playerInfo={playerInfo} playerReferences={playerReferences} isLoaded={isLoaded} />
    </StyledPlayersCharts>
  )
}
