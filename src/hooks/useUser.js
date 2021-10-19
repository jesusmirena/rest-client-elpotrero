import React, { useCallback, useContext, useState } from "react";
import { useHistory } from "react-router";
import Context from "../context/userContext";
import { postLogin, postLoginGoogle, putLoginGoogle } from "../redux/actions";

export default function useUser() {
  const [state, setState] = useState({ loading: false, error: false });
  const { jwt, setJWT } = useContext(Context);
  const history = useHistory();
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

  const PutLoginGoogle = useCallback(
    async (user) => {
      setState({ loading: true, error: false });
      const usuarioGuardado = await putLoginGoogle(user);
      console.log("USUARIO GUARDADO LOGIN", usuarioGuardado);
      window.sessionStorage.setItem("id", usuarioGuardado.payload.id);
      window.sessionStorage.setItem("jwt", usuarioGuardado.payload.token);
      setState({ loading: false, error: false });
      setJWT(usuarioGuardado.payload.token);
    },
    [setJWT]
  );

  const PostLoginGoogle = useCallback(
    async (user) => {
      setState({ loading: true, error: false });
      const usuarioGuardado = await postLoginGoogle(user);
      console.log("USUARIO GUARDADO LOGIN", usuarioGuardado);
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
    PutLoginGoogle,
    PostLoginGoogle,
    login,
    logout,
    isLoginLoading: state.loading,
    hasLoginError: state.error,
  };
}
