import React, { useCallback, useContext } from 'react'
import { UserContext } from '../context/UserContext';

function useUser() {

  const { jwt, setJwt } = useContext(UserContext);


  const login = useCallback(
    () => {
      setJwt('prueba');
    },
    [setJwt],
  )

  const logout = useCallback(
    () => {
      setJwt(null);
    }, [setJwt],)


  return {
    isLogged: Boolean(jwt),
    login,
    logout,
  }
}

export default useUser