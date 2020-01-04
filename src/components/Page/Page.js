import styled from 'styled-components'

export const Page = styled.main`
  clear: both;

  p a,
  table a {
    border-bottom: 1px solid transparent;
  }
  p a:hover,
  table a:hover {
    border-bottom: 1px solid #ED5429;
  }

  h1 { font-size: 3em; }
  h2 { font-size: 2.5em; }
  h3 { font-size: 2em; }
  h4 { font-size: 1.5em; }
  h5 { font-size: 1.25em; }
  h6 { font-size: 1em; }

  &.content h1,
  &.content h2,
  &.content h3,
  &.content h4,
  &.content h5,
  &.content h6,
  &.content p,
  &.content ol,
  &.content ul {
    margin-bottom: 1.25rem;
  }
  &.content *:last-child {
    margin-bottom: 0;
  }
`
