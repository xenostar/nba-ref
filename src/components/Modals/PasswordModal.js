import React, { useState } from 'react'
import styled from 'styled-components'
import { Form, Button, Input } from 'components'

export const PasswordModal = () => {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn"))
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const key = '1234'

  const handleClick = event => {
    event.preventDefault()
    if (password === key) {
      setLoggedIn(true)
      localStorage.setItem("loggedIn", true)
    } else {
      setErrorMsg("Incorrect Password")
    }
  }

  const handleChange = event => {
    setPassword(event.target.value)
  }

  return (
    <>
      {!loggedIn &&
        <StyledPasswordModal>
          <StyledForm>
            <StyledInput onChange={handleChange} value={password} type="password" />
            <Button onClick={handleClick}>Log In</Button>
            {errorMsg ? <StyledError>{errorMsg}</StyledError> : null}
          </StyledForm>
        </StyledPasswordModal>
      }
    </>
  )
}

const StyledPasswordModal = styled.div`
  background: rgba(255,255,255,0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const StyledForm = styled(Form)`
  background: #eee;
  border-radius: 3px;
  padding: 20px;
  flex-direction: column;
  max-width: 250px;
  margin-bottom: 0;
  width: 100%;
`
const StyledError = styled.span`
  color: #ED5429;
  display: block;
  font-size: 12px;
  margin-top: 5px;
  text-align: center;
  text-transform: uppercase;
  user-select: none;
`
const StyledInput = styled(Input)`
  color: #ED5429;
  margin-bottom: 5px;
`
