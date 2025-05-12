export function publicaoReducer(state, action) {
  switch (action.type) {
    case "CARREGAR_PUBLICACOES":
      return { ...state, publicacoes: action.payload };

    case "ADICIONAR_PUBLICACAO":
      return {
        ...state,
        publicacoes: [action.payload, ...state.publicacoes],
      };

    case "ATUALIZAR_CAMPO":
      return {
        ...state,
        [action.payload.campo]: action.payload.valor,
      };

    case "REMOVER_IMAGEM":
      return {
        ...state,
        imagem: null,
        nomeArquivo: "",
      };

    case "ADICIONAR_TAG":
      return {
        ...state,
        tags: [...state.tags, action.payload],
        tagInput: "",
      };

    case "REMOVER_TAG":
      return {
        ...state,
        tags: state.tags.filter((tag) => tag !== action.payload),
      };

    case "LIMPAR_TAGS":
      return {
        ...state,
        tags: [],
        tagInput: "",
      };

    case "LIMPAR_PUBLICACAO":
      return {
        ...state,
        imagem: null,
        nomeArquivo: "",
        nome: "",
        descricao: "",
        tags: [],
        tagInput: "",
      };

    case "CARREGAR_DO_LOCALSTORAGE":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
