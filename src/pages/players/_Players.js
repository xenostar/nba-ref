import React, { Component } from 'react'
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

export default class Players extends Component {

  constructor(props) {
    super(props)
    this.state = {
      points : [],
      assists : [],
      rebounds : [],
      season : '2018-2019',
      isLoaded : false,
      isLoadedPts : false,
      isLoadedAst : false,
      isLoadedReb : false,
    }
  }

  timeouts = []

  stopTracked = () => {
    for(var i=0; i<this.timeouts.length; i++) {
      clearTimeout(this.timeouts[i])
    }
    this.timeouts = []
  }

  handleChange = (event) => {
    this.setState({
      season : event.target.value,
    }, _ => {
      this.handleFetch('limit=10&sort=stats.Pts.D&playerstats=Pts&force=true', 'Pts', 'points', 'isLoadedPts')
      this.handleFetch('limit=10&sort=stats.Ast.D&playerstats=Ast&force=true', 'Ast', 'assists', 'isLoadedAst')
      this.handleFetch('limit=10&sort=stats.Reb.D&playerstats=Reb&force=true', 'Reb', 'rebounds', 'isLoadedReb')
    })
  }

  handleFetch = (url, stat_type, state_value, load_value) => {
    this.setState({
      [load_value] : false,
    }, _ => {
      fetch(`https://api.mysportsfeeds.com/v1.2/pull/nba/${ this.state.season }-regular/cumulative_player_stats.json?${ url }`, {
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
        this.setState({
          [state_value] : values,
          [load_value] : true,
        })
      })
      .catch(error => {
        console.log(`${ state_value } result is cached. Retrying...`)
        // setTimeout(_ => this.handleFetch(url, stat_type, state_value), 4000)
        this.timeouts.push(setTimeout(_ => this.handleFetch(url, stat_type, state_value, load_value), 4000))
      })
    })
  }

  componentDidMount() {
    this.handleFetch('limit=10&sort=stats.Pts.D&playerstats=Pts&force=true', 'Pts', 'points', 'isLoadedPts')
    this.handleFetch('limit=10&sort=stats.Ast.D&playerstats=Ast&force=true', 'Ast', 'assists', 'isLoadedAst')
    this.handleFetch('limit=10&sort=stats.Reb.D&playerstats=Reb&force=true', 'Reb', 'rebounds', 'isLoadedReb')

    // Attempting to return more reliable results by spacing out requests. Extremely hacky and not a permanent solution.
    // this.timeouts.push(setTimeout(_ => this.handleFetch('limit=10&sort=stats.Pts.D&playerstats=Pts&force=true', 'Pts', 'points', 'isLoadedPts'), 0))
    // this.timeouts.push(setTimeout(_ => this.handleFetch('limit=10&sort=stats.Ast.D&playerstats=Ast&force=true', 'Ast', 'assists', 'isLoadedAst'), 2000))
    // this.timeouts.push(setTimeout(_ => this.handleFetch('limit=10&sort=stats.Reb.D&playerstats=Reb&force=true', 'Reb', 'rebounds', 'isLoadedReb'), 4000))
  }

  componentDidUpdate() {
    // console.log(this.state)
  }

  componentWillUnmount() {
    this.stopTracked()
  }

  render() {
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

    return (
      <StyledPlayers className="page">
        <form>
          <div>
            <label>Season</label>
            <select name="season" value={this.state.season} onChange={this.handleChange}>
            <option value="2018-2019">2018-2019</option>
            <option value="2017-2018">2017-2018</option>
            <option value="2016-2017">2016-2017</option>
            <option value="2015-2016">2015-2016</option>
            </select>
          </div>
        </form>
        <div className="grid">
          <Table tableTitle="Points Scored" tableData={tableDataPts} isLoaded={this.state.isLoadedPts}>{this.state.points}</Table>
          <Table tableTitle="Assists" tableData={tableDataAst} isLoaded={this.state.isLoadedAst}>{this.state.assists}</Table>
          <Table tableTitle="Rebounds" tableData={tableDataReb} isLoaded={this.state.isLoadedReb}>{this.state.rebounds}</Table>
        </div>
      </StyledPlayers>
    )
  }

}