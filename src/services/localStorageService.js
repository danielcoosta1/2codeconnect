export const localStorageService = {
  salvar(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Erro ao salvar no localStorage:", error);
    }
  },

  ler(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Erro ao ler do localStorage:", error);
      return null;
    }
  },

  remover(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Erro ao remover do localStorage:", error);
    }
  },
};
