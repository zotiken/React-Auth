import React, { useState, useCallback } from 'react';

export default () => {
  const [auth, setauth] = useState(null)
  const [message, setmessage] = useState(false)
  const [errors, seterrors] = useState(null)


  const authFetch = useCallback(async (email, password, remember) => {
    try {
      const response = await fetch('/admin/session', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email,password, remember})
      })
      const result = await response.json();
      if (response.status === 422) {
        seterrors(result.common)
      } else {
        setauth({token:result.session.token,email:result.session.user.email})

        localStorage.setItem("session",JSON.stringify({token:result.session.token,email:result.session.user.email}) )
        seterrors(null)
      }

    } catch (error) {
      console.log("error", error);
    };

  }
    ,
    [],
  );
  

  const signUpFetch = useCallback(async (token) => {

    try {
      const response = await fetch('/admin/session', {
        method: "DELETE",
        headers: {
          'X-Access-Token': token
        }})

        setauth(null)
        localStorage.removeItem("session")

    } catch (error) {
      console.log("error", error);
    };

  }
    ,
    [],
  )



  return [auth,setauth,authFetch,message, setmessage, signUpFetch, errors]
}
