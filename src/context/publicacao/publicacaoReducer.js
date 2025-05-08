import { initialState } from "./inicialState";

export function publicacaoReducer(state, action) {
    switch (action.type) {
      case 'SET_IMAGEM':
        return { ...state, imagem: action.payload };
      case 'SET_NOME_PROJETO':
        return { ...state, nomeProjeto: action.payload };
      case 'SET_DESCRICAO':
        return { ...state, descricao: action.payload };
      case 'ADD_TAG':
        return { ...state, tags: [...state.tags, action.payload] };
      case 'REMOVE_TAG':
        return { ...state, tags: state.tags.filter(tag => tag !== action.payload) };
      case 'RESET_FORM':
        return initialState;
      default:
        return state;
    }
  }