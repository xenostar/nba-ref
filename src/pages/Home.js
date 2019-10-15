import React from 'react'
import styled from 'styled-components'

const StyledHome = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  @media only screen and (max-width: 62.5rem) {
    grid-template-columns: 1fr;
  }

  .hero {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
  h1 {
    color: #ED5429;
    font-size: 4.25em;
    line-height: 0.975;
  }
`

export const Home = () => {
  return (
    <StyledHome className="page content">
      <div className="hero">
        <h1>Welcome</h1>
        <h2>To quite possibly the greatest reference for NBA statistics in the universe.</h2>
      </div>
      <div>
        <h2>What is the purpose of your project and why did you choose that?</h2>
        <p>The purpose of this project is to provide a variety of ways to view stats regarding the NBA.</p>
        <p>I chose this project to learn more about how to use React while combining it with my love of the NBA.</p>
      </div>
      <div>
        <h2>What were some challenges with building your project?</h2>
        <p>The main challenge of this project was learning React in more detail. I had used it before, but took it further this time.</p>
        <p>Also, the <a href="https://www.mysportsfeeds.com/" target="_blank" rel="noopener noreferrer">API</a> I chose turned out to be very problematic. It is slow to respond, and sometimes serves cached responses, making it hard to query the same endpoints repeatedly.</p>
      </div>
      <div>
        <h2>How did you overcome those challenges?</h2>
        <p>Apparently the caching problem is a <a href="/img/known_issue.png" target="_blank" rel="noopener noreferrer">known issue</a>.</p>
        <p>Essentially, fetching from the same endpoint while only changing url parameters can serve the wrong (cached) data back.</p>
        <p>It forced me to make more resilient components that would handle failure gracefully. The Table component, as well as the accompanying fetch requests, will retry until they eventually load the correct data. They will also show a loading animation while waiting for the data to arrive.</p>
      </div>
      <div>
        <h2>If you had more time, where would you like to take this / what would you change?</h2>
        <p>I tried to show a variety of different skills in this project including:</p>
        <ul>
          <li>Advanced Javascript usage using React and ES6 language features.</li>
          <li>A variety of CSS layout features including basic floats, css grid, flexbox, transitions, css animations, animated SVGs, and full responsiveness.</li>
        </ul>
        <p>The main priority going forward would be to move to a more stable and reliable API. It doesn't even support API keys, so currently I have the credentials stored right in the code (no financial data is on the account). This is obviously a massive security risk, but for the interest of time I made due.</p>
        <p>I also want to add many more filters to each page so you can choose season, post-season, individual team stats, and individual player stats (including shot charts).</p>
      </div>
    </StyledHome>
  )
}
