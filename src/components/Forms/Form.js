import styled from 'styled-components'

export const Form = styled.form`
  display:flex;
  margin-bottom: 1.875rem;
  overflow: hidden;
  @media only screen and (max-width: 62.5rem) { /* 1000px */
    flex-direction: column;
  }

  div {
    display: flex;
    margin-left: 0.9375rem;
  }
  div:first-child {
    margin-left: 0;
  }
  @media only screen and (max-width: 62.5rem) { /* 1000px */
    div {
      margin-left: 0;
      margin-bottom: 5px;
    }
    div:last-child {
      margin-bottom: 0;
    }
  }
`
