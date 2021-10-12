import React, { useCallback, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import Context from "../context/userContext";
import { postLogin } from "../redux/actions";

export default function useUser() {
  const [state, setState] = useState({ loading: false, error: false });
  const { jwt, setJWT } = useContext(Context);
  const dispatch = useDispatch();

  const login = useCallback(
    async ({ mail, password }) => {
      setState({ loading: true, error: false });
      const usuarioGuardado = await postLogin({ mail, password });
      dispatch(usuarioGuardado);
      window.sessionStorage.setItem("jwt", usuarioGuardado.payload.token);
      setState({ loading: false, error: false });
      setJWT(usuarioGuardado.payload.token);
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
