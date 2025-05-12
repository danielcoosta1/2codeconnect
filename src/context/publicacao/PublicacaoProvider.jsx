import { useEffect, useReducer } from "react";
import PublicacaoContext from "./PublicacaoContext";

import { publicacaoReducer } from "./publicacaoReducer";

import { initialState } from "./inicialState";
import { useAuth } from "../../hooks/useAuth";

import { PublicacoesService } from "./publicacaoService";

export const PublicacoesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(publicacaoReducer, initialState);
  const { usuario } = useAuth();

  //Atualiza publicacao
  useEffect(() => {
    if (!usuario?.id) return;

    const carregarPublicacoes = async () => {
      if (usuario?.id) {
        const publicacoes = await PublicacoesService.buscarPublicacoes(
          usuario.id
        );
        dispatch({ type: "CARREGAR_PUBLICACOES", payload: publicacoes });
      }
    };

    carregarPublicacoes();
  }, [usuario]);

  //Ações

  const adicionarPublicacao = async (novaPublicacao) => {
    const publicacaoCriada = await PublicacoesService.criarPublicacao(
      usuario.id,
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
        imagem: state.imagem,
        nomeArquivo: state.nomeArquivo,
        nome: state.nome,
        descricao: state.descricao,
        tags: state.tags, // ← importante!
        tagInput: state.tagInput,
        atualizarCampo,
        removerImagem,
        adicionarTag,
        removerTag,
        limparTags,
        adicionarPublicacao,
        limparPublicacao,
      }}
    >
      {children}
    </PublicacaoContext.Provider>
  );
};
