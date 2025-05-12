import { useEffect, useReducer } from "react";
import PublicacaoContext from "./PublicacaoContext";

import { publicacaoReducer } from "./publicacaoReducer";

import { initialState } from "./inicialState";
import { useAuth } from "../../hooks/useAuth";
import { localStorageService } from "../../services/localStorageService";
import { PublicacoesService } from "./publicacaoService";

export const PublicacoesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(publicacaoReducer, initialState);
  const { usuario } = useAuth();

  useEffect(() => {
    if (!usuario?.id) {
      // Se não houver usuário, você pode lidar com a situação aqui
      return;
    }
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

  const atualizarCampo = (campo, valor) => {
    dispatch({ type: "ATUALIZAR_CAMPO", payload: { campo, valor } });
  };

  const removerImagem = () => {
    dispatch({ type: "REMOVER_IMAGEM" });
  };

  const adicionarTag = (novaTag) => {
    dispatch({ type: "ADICIONAR_TAG", payload: novaTag });
  };

  const removerTag = (tag) => {
    dispatch({ type: "REMOVER_TAG", payload: tag });
  };

  const limparTags = () => {
    dispatch({ type: "LIMPAR_TAGS" });
  };

  const limparPublicacao = () => {
    dispatch({ type: "LIMPAR_PUBLICACAO" });
  };

  return (
    <PublicacaoContext.Provider
      value={{
        ...state,
        adicionarPublicacao,
        atualizarCampo,
        removerImagem,
        adicionarTag,
        removerTag,
        limparTags,
        limparPublicacao,
      }}
    >
      {children}
    </PublicacaoContext.Provider>
  );
};
