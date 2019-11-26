import React from 'react'
import styled from 'styled-components'

const GameCard = styled(Link)`
  background:
    url('${props => props.awaylogo}'),
    url('${props => props.homelogo}'),
    linear-gradient(110deg, ${props => props.awaycolor || "#eee"} 50%, ${props => props.homecolor || "#eee"} 50%);
  background-repeat: no-repeat;
  background-position: left 10px center,right 10px center, 0;
  background-size: 25%, 25%, auto;
  padding: 30px 20px;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
  :hover {
    box-shadow: 0 2px 5px rgba(0,0,0,0.25);
    transform: scale(1.1) translateZ(0);
  }

  .location {
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
    text-shadow: 0 1px 2px rgba(0,0,0,0.75);
  }
  .score {
    font-size: 2.75em;
    font-weight: 700;
    line-height: 1.2;
    text-shadow: 0 2px 2px rgba(0,0,0,0.75);
  }
  .time {
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
    text-shadow: 0 1px 2px rgba(0,0,0,0.75);
  }
`

export const GameCard = props => (
  <GameCard>Hello World</GameCard>
)
