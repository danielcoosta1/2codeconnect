import { useReducer } from "react";

import initialState from "./inicialState";
import publicacaoReducer from  "./publicacaoReducer"



const PublicacaoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(publicacaoReducer, initialState);

  return (
    <PublicacaoContext.Provider value={{ state, dispatch }}>
      {children}
    </PublicacaoContext.Provider>
  );
};

export default PublicacaoProvider;
