import styled from 'styled-components'

export const Page = styled.div`
  margin-bottom: 5rem;
  /* padding-top: 2.5rem; */

  p a,
  table a {
    border-bottom: 1px solid transparent;
  }
  p a:hover,
  table a:hover {
    border-bottom: 1px solid #ED5429;
  }

  h2 {
    color: #bbb;
    font-size: 22px;
    font-weight: 500;
  }

  &.content h1,
  &.content h2,
  &.content p,
  &.content ol,
  &.content ul {
    margin-bottom: 1.25rem;
  }
  &.content *:last-child {
    margin-bottom: 0;
  }
`
