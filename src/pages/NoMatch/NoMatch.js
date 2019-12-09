import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { Page } from 'components'

const StyledNoMatch = styled(Page)``

export const NoMatch = () => {
  const location = useLocation()

  return (
    <StyledNoMatch className="content">
      <h1>Oops!</h1>
      <p>No page found for <code>{location.pathname}</code>.</p>
      {/* <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <h6>Header 6</h6>
      <p>This is a paragraph test.</p>
      <ul>
        <li>This is a list test.</li>
        <li>This is a list test.</li>
        <li>This is a list test.</li>
      </ul>
      <p>This is a paragraph test.</p>
      <ol>
        <li>This is a test.</li>
        <li>This is a test.</li>
        <li>This is a test.</li>
        <li>This is a test.</li>
      </ol> */}
    </StyledNoMatch>
  )
}
