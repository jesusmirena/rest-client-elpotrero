import React, { useCallback, useContext, useState } from "react";
import Context from "../context/userContext";
import { postLogin } from "../redux/actions";

export default function useUser() {
  const [state, setState] = useState({ loading: false, error: false });
  const { jwt, setJWT } = useContext(Context);

  const login = useCallback(
    async ({ mail, password }) => {
      setState({ loading: true, error: false });
      const usuarioGuardado = await postLogin({ mail, password });
      window.sessionStorage.setItem("id", usuarioGuardado.payload.id);
      window.sessionStorage.setItem("jwt", usuarioGuardado.payload.token);
      setState({ loading: false, error: false });
      setJWT(usuarioGuardado.payload.token);
    },
    [setJWT]
  );

  const logout = useCallback(() => {
    window.sessionStorage.removeItem("jwt");
    window.sessionStorage.removeItem("id");
    window.sessionStorage.removeItem("idreserva");

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
