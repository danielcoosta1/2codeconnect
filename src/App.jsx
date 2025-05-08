import { BrowserRouter, Route, Routes } from "react-router-dom";

import Feed from "../src/pages/Feed";
import SobreNos from "../src/pages/SobreNos";
import Perfil from "../src/pages/Perfil";

import Login from "../src/pages/Login";
import Publicar from "./pages/Publicar";
import RotaPrivada from "./routes/RotaPrivada";
import Cadastro from "./pages/Cadastro";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Rotas privadas */}
        <Route element={<RotaPrivada />}>
          <Route path="/feed" element={<Feed />} />
          <Route path="/publicar" element={<Publicar />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/sobrenos" element={<SobreNos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
