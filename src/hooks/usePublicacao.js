import { useContext } from "react";
import PublicacaoContext from "./PublicacaoContext";

const usePublicacao = () => useContext(PublicacaoContext);

export default usePublicacao;
