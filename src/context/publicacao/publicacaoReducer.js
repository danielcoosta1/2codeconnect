export function publicaoReducer(state, action) {
  switch (action.type) {
    case "CARREGAR_PUBLICACOES":
      return { ...state, publicacoes: action.payload };
    case "ADICIONAR_PUBLICACAO":
      return { ...state, publicacoes: [action.payload, ...state.publicacoes] };
    default:
      return state;
  }
}