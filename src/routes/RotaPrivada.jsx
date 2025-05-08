import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { toastErro } from "../../utils/toast";
import { useAuth } from "../../hooks/useAuth";

const RotaPrivada = () => {
  const { usuario } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!usuario) {
      toastErro("Você precisa estar logado para acessar essa página!");
    }
  }, [usuario]);

  return usuario ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} /> //Guarda a rota anterior no state.from
  );
};

export default RotaPrivada;
