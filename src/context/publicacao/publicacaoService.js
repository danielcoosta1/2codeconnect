import axios from "axios";

const BASE_URL = "http://localhost:3001/publicacoes";

export const PublicacoesService = {
  async buscarPublicacoes(userId) {
    const resposta = await axios.get(`${BASE_URL}/${userId}`);
    return resposta.data?.publicacoes || [];
  },

  async criarPublicacao(userId, publicacao) {
   const resposta = await axios.post(`${BASE_URL}/${userId}`, { publicacao });
   return resposta.data;
  },
};
