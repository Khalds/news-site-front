import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { createUser } from "../../../features/auth/authSlice"

import styles from "./Sign.module.css"

function Signup() {
  const dispatch = useDispatch()

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const signup = useSelector((state) => state.auth.signUp)

  const error = useSelector((state) => state.auth.error)
  const navigate = useNavigate()

  const handleChangeLogin = (e) => {
    setLogin(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = () => {
    if (login !== "" && password !== "") {
      dispatch(createUser({ login, password }))

      setLogin("")
      setPassword("")
      setErrorMessage("")
    } else {
      setErrorMessage("Поле ввода не может быть пусты!")
    }
  }

  return (
    <div className={styles.Sign}>
      <div className={styles.wrapper}>
        <span className={styles.close}>
          <Link to="/">x</Link>
        </span>
        <h1>The Intocode News</h1>
        <span className={styles.error}>{error || errorMessage}</span>
        <input
          type="text"
          placeholder="login"
          value={login}
          onChange={handleChangeLogin}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handleChangePassword}
        />
        <button disabled={signup} onClick={handleSubmit}>
          register
        </button>
        <p>
          Have an account? <Link to="/signin">Sign in</Link>
        </p>
      </div>
      {signup && navigate("/signin")}
    </div>
  )
}

export default Signup
