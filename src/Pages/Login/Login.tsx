import "./Login.css"
import React, { useRef } from "react"
import { useLocation } from "wouter"
import Header from "Components/Header/Header"
import useUser from "Hooks/useUser/useUser"
import { useEffect } from "react"

const Login = () => {
  
  const userInitial = document.createElement("input")
  const passwordInitial = document.createElement("input")
  const userInput = useRef<HTMLInputElement>(userInitial)
  const passwordInput = useRef<HTMLInputElement>(passwordInitial)

  const [, navigate] = useLocation()

  const { login, isError, isLoggedIn } = useUser({
    user: userInput.current.value,
    password: passwordInput.current.value,
  })

  useEffect(() => {
    if (isLoggedIn) navigate("/userhome")
  }, [isLoggedIn, navigate])

  function handleSubmit( e: React.FormEvent<HTMLFormElement> ) {
    e.preventDefault()
    login({
        user:userInput.current.value,
        password: passwordInput.current.value
    })
  }

  return (
    <div className='login-container'>
      <Header />
      <div className='form-container'>
        <form
          className='login-form'
          onSubmit={e => handleSubmit(e)}
        >
          <input type='text' ref={userInput} placeholder='User' />
          {isError ? <span>we have an error here</span> : null}

          <input type='text' ref={passwordInput} placeholder='Password' />
          <button>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
