import { BrowserRouter, Route, Routes } from "react-router-dom";

import Feed from "../src/pages/Feed";
import SobreNos from "../src/pages/SobreNos";
import Perfil from "../src/pages/Perfil";

import Login from "../src/pages/Login";
import Publicar from "./pages/Publicar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/publicar" element={<Publicar/>}/>
        <Route path="/sobrenos" element={<SobreNos />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/login" element={<Login />} />

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
