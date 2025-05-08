// src/context/auth/AuthProvider.jsx
import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { initialState } from "./inicialState";
import { loginUsuario, logoutUsuario } from "./authService";

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (credenciais) => {
    try {
      const usuario = await loginUsuario(credenciais);
      dispatch({ type: "LOGIN", payload: usuario });
    } catch (erro) {
      console.error("Erro no login:", erro.message);
      throw erro;
    }
  };

  const logout = () => {
    logoutUsuario();
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ usuario: state.usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
