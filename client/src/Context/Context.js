import React, { createContext, useState } from 'react'
import { useEffect } from 'react';
import authHook from '../hooks/authHook';

export const AuthContext = createContext(false)

export default function Context(props) {
  const [auth,setauth, authFetch, message, setmessage, signUpFetch, errors] = authHook()
  const [loading, setloading] = useState(false)
  const [state, setstate] = useState(false)

  useEffect(() => {
    console.log(localStorage.getItem("session"));
    if (localStorage.getItem("session")) {
      setauth(JSON.parse(localStorage.getItem("session")))
    }

  }, [])

  return (
    <AuthContext.Provider value={{ state, auth, loading, authFetch, message, setmessage, signUpFetch, errors }}>
      {props.children}
    </AuthContext.Provider>

  )
}
