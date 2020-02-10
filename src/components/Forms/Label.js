import styled from 'styled-components'

export const Label = styled.label`
  background-color: rgba(0,0,0,0.05);
  border: 1px solid #ddd;
  border-right: 0;
  border-radius: 3px 0 0 3px;
  color: #aaa;
  font-size: 12px;
  font-weight: 700;
  line-height: 38px;
  padding: 0 10px;
  text-transform: uppercase;
  user-select: none;
  @media (max-width: 1000px) {
    min-width: 20%;
  }
`
