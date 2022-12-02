import React, { useCallback, useContext } from 'react'
import { UserContext } from '../context/UserContext';

function useUser() {

  const { jwt, setJwt } = useContext(UserContext);


  const login = useCallback(
    (token) => {
      setJwt(token);
    },
    [setJwt],
  )

  const logout = useCallback(
    () => {
      setJwt("");
    }, [setJwt],)


  return {
    isLogged: Boolean(jwt),
    login,
    logout,
  }
}

export default useUser