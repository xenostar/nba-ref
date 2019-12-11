import React from 'react'
import styled from 'styled-components'

export const Input = props => (
  <StyledInput
    className={props.className}
    type={props.type}
    placeholder={props.placeholder}
    onChange={props.onChange}
  />
)

const StyledInput = styled.input`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #aaa;
  font-size: 16px;
  font-weight: 700;
  line-height: 38px;
  padding: 0 10px;
  user-select: none;
  width: 100%;
  @media only screen and (max-width: 1000px) {
    min-width: 20%;
  }
`
