import axios from "axios";

const BASE_URL = "http://localhost:3001/publicacoes";

export const PublicacoesService = {
  async buscarPublicacoes(userId) {
    const resposta = await axios.get(`${BASE_URL}/${userId}`);
    return resposta.data?.publicacoes || [];
  },

  async criarPublicacao(publicacao) {
    return await axios.post(BASE_URL, publicacao);
  },
};
