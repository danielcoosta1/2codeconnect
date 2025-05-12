import { localStorageService } from "../../services/localStorageService";

const getPublicacaoInicial = () => {
  const publicacoes = localStorageService.ler("publicacoes") || [];

  return {
    publicacoes,
    imagem: null,
    nomeArquivo: "",
    nome: "",
    descricao: "",
    tags: [],
    tagInput: "", // Garantir que a tagInput esteja sempre como string vazia
  };
};

export const initialState = getPublicacaoInicial();
