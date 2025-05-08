import { localStorageService } from "../../services/localStorageService";

// Função para obter usuário salvo no localStorage
const getUsuarioInicial = () => {
  return localStorageService.ler("usuario") || null;
};

export const initialState = {
  usuario: getUsuarioInicial(),
};
