import styled from 'styled-components'

export const Form = styled.form`
  margin-bottom: 2.5rem;
  overflow: hidden;

  div {
    display: flex;
    float: left;
    margin-left: 20px;
  }
  div:first-child {
    margin-left: 0;
  }
  @media only screen and (max-width: 1000px) {
    div {
      float: none;
      margin-left: 0;
      margin-bottom: 5px;
    }
  }
`
