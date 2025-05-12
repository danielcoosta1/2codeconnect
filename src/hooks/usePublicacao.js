import { useContext } from "react";
import PublicacaoContext from "../context/publicacao/PublicacaoContext";

const usePublicacao = () => useContext(PublicacaoContext);

export default usePublicacao;
