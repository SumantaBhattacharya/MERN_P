import React from 'react'
import { Login } from './Login'
import RegisterForm from './RegirterForm'

const AuthLayout = () => {

    const [isLogedIn, setLoggedIn] = React.useState(false)

  return (
    <div>
     { isLogedIn ? <Login/> : <RegisterForm/>}
    </div>
  )
}

export default AuthLayout;
