import { useEffect, useReducer } from "react";
import { initialState } from "./inicialState";
import { publicaoReducer } from "./publicacaoReducer";
import { useAuth } from "../../hooks/useAuth";

import { localStorageService } from "../../services/localStorageService";

import { PublicacoesService } from "./publicacaoService";

export const PublicacoesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(publicaoReducer, initialState);
  const { usuario } = useAuth();

  useEffect(() => {
    const carregarPublicacoes = async () => {
      const armazenadas = localStorageService.ler("publicacoes");
      if (armazenadas) {
        dispatch({ type: "CARREGAR_PUBLICACOES", payload: armazenadas });
      }

      if (usuario?.id) {
        const publicacoes = await PublicacoesService.buscarPublicacoes(
          usuario.id
        );
        dispatch({ type: "CARREGAR_PUBLICACOES", payload: publicacoes });
      }
    };

    carregarPublicacoes();
  }, [usuario]);

  useEffect(() => {
    localStorageService.salvar("publicacoes", state.publicacoes);
  }, [state.publicacoes]);

  const adicionarPublicacao = async (novaPublicacao) => {
    const publicacaoCriada = await PublicacoesService.criarPublicacao(
      novaPublicacao
    );
    dispatch({ type: "ADICIONAR_PUBLICACAO", payload: publicacaoCriada });
  };

  return (
    <PublicacoesContext.Provider
      value={{ publicacoes: state.publicacoes, adicionarPublicacao }}
    >
      {children}
    </PublicacoesContext.Provider>
  );
};
