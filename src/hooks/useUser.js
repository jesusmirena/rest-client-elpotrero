import React, { useCallback, useContext, useState } from "react";
import Context from "../context/userContext";
import { postLogin } from "../redux/actions";

export default function useUser() {
  const [state, setState] = useState({ loading: false, error: false });
  const { jwt, setJWT } = useContext(Context);

  const login = useCallback(
    ({ mail, password }) => {
      setState({ loading: true, error: false });
      postLogin({ mail, password })
        .then((jwt) => {
          window.sessionStorage.setItem("jwt", jwt);
          setState({ loading: false, error: false });
          setJWT(jwt);
        })
        .catch((error) => {
          window.sessionStorage.removeItem("jwt");
          setState({ loading: false, error: true });
          console.log(error);
        });
    },
    [setJWT]
  );

  const logout = useCallback(() => {
    window.sessionStorage.removeItem("jwt");
    setJWT(null);
  }, [setJWT]);

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
    isLoginLoading: state.loading,
    hasLoginError: state.error,
  };
}
