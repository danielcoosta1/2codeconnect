import { ToastContainer } from "react-toastify";
import Login from "../../pages/Login";
import Cadastro from "../../pages/Cadastro";
import Feed from "../../pages/Feed";
import Publicar from "../../pages/Publicar";
import Perfil from "../../pages/Perfil";
import SobreNos from "../../pages/SobreNos";
import { Route, Routes } from "react-router-dom";

import RotaPrivada from "../RotaPrivada";
import EsqueciSenha from "../../pages/EsqueciSenha";
import NovaSenha from "../../pages/NovaSenha";

const AppContent = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/esqueci-senha" element={<EsqueciSenha />} />
        <Route path="/nova-senha/:token" element={<NovaSenha/>} />

        {/* Rotas protegidas */}
        <Route element={<RotaPrivada />}>
          <Route path="/feed" element={<Feed />} />
          <Route path="/publicar" element={<Publicar />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/sobrenos" element={<SobreNos />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppContent;
