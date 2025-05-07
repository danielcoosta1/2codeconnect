import { BrowserRouter, Route, Routes } from "react-router-dom";

import Feed from "../src/pages/Feed";
import SobreNos from "../src/pages/SobreNos";
import Perfil from "../src/pages/Perfil";
import Error from "../src/pages/Error404";
import Login from "../src/pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/sobrenos" element={<SobreNos />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
