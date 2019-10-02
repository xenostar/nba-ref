import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'

// Components
import Table from '../../components/table/Table'

const StyledPlayers = styled.div`
  .grid {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
  @media only screen and (max-width: 1000px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }

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
  form div {
    float: left;
    margin-left: 20px;
  }
  form div:first-child {
    margin-left: 0;
  }
`

// Vars
let username = 'xenostar'
let password = 'testpass123'

export default function Players() {
  const [season, setSeason] = useState('2018-2019')
  const [stats, setStats] = useState({ points: [], assists: [], rebounds: [] })
  const [isLoaded, setIsLoaded] = useState({ isLoadedPts: false, isLoadedAst: false, isLoadedReb: false })
  // Make this a stateful thing? Do we even continue to use this?
  // let timeouts = []

  // Configuring tables
  let tableDataPts = {
    cols: [
      [ 'Pts', '5vw' ],
      [ 'Position', '5vw' ],
      [ 'Name', 'auto' ]
    ]
  }
  let tableDataAst = {
    cols: [
      [ 'Ast', '5vw' ],
      [ 'Position', '5vw' ],
      [ 'Name', 'auto' ]
    ]
  }
  let tableDataReb = {
    cols: [
      [ 'Reb', '5vw' ],
      [ 'Position', '5vw' ],
      [ 'Name', 'auto' ]
    ]
  }

  // const stopTracked = () => {
  //   for(var i=0; i<timeouts.length; i++) {
  //     clearTimeout(timeouts[i])
  //   }
  //   timeouts = []
  // }

  const handleChange = event => {
    setSeason(event.target.value)
  }

  const handleFetch = useCallback((url, stat_type, state_value, load_value) => {
    setIsLoaded(prevState => {
      return { ...prevState, [load_value]: false }
    })

    fetch(`https://api.mysportsfeeds.com/v1.2/pull/nba/${ season }-regular/cumulative_player_stats.json?${ url }`, {
      headers: {
        'Authorization' : 'Basic ' + btoa(username + ':' + password),
        'Cache-Control' : 'no-cache, no-store, must-revalidate'
      },
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      let values = data.cumulativeplayerstats.playerstatsentry.map((player, index) => {
        return (
          <tr key={index}>
            <td>{player.stats[stat_type]['#text']}</td>
            <td>{player.player.Position}</td>
            <td>{player.player.FirstName} {player.player.LastName}</td>
          </tr>
        )
      })

      // console.log(values)
      setStats(prevState => {
        return { ...prevState, [state_value]: values }
      })
      setIsLoaded(prevState => {
        return { ...prevState, [load_value]: true }
      })
    })
    .catch(error => {
      console.log(error)
      // timeouts.push(setTimeout(_ => handleFetch(url, stat_type, state_value, load_value), 4000))
    })
  }, [season])

  useEffect(() => { // componentDidMount
    console.log("Running...")
    handleFetch('limit=10&sort=stats.Pts.D&playerstats=Pts&force=true', 'Pts', 'points', 'isLoadedPts')
    handleFetch('limit=10&sort=stats.Ast.D&playerstats=Ast&force=true', 'Ast', 'assists', 'isLoadedAst')
    handleFetch('limit=10&sort=stats.Reb.D&playerstats=Reb&force=true', 'Reb', 'rebounds', 'isLoadedReb')
    return () => console.log('Unmounting...');
  }, [handleFetch])

  return (
    <StyledPlayers className="page">
      <form>
        <div>
          <label>Season</label>
          <select name="season" value={season} onChange={handleChange}>
            <option value="2018-2019">2018-2019</option>
            <option value="2017-2018">2017-2018</option>
            <option value="2016-2017">2016-2017</option>
            <option value="2015-2016">2015-2016</option>
          </select>
        </div>
      </form>
      <div className="grid">
        <Table tableTitle="Points Scored" tableData={tableDataPts} isLoaded={isLoaded.isLoadedPts}>{stats.points}</Table>
        <Table tableTitle="Assists" tableData={tableDataAst} isLoaded={isLoaded.isLoadedAst}>{stats.assists}</Table>
        <Table tableTitle="Rebounds" tableData={tableDataReb} isLoaded={isLoaded.isLoadedReb}>{stats.rebounds}</Table>
      </div>
    </StyledPlayers>
  )
}