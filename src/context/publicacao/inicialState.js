import { localStorageService } from "../../services/localStorageService";

const getPublicacaoInicial = () => {
  return (
    localStorageService.ler("publicacoes") || {
      publicacoes: [],
      imagem: null,
      nomeArquivo: "",
      nome: "",
      descricao: "",
      tags: [],
      tagInput: "",
    }
  );
};

export const initialState = getPublicacaoInicial();
