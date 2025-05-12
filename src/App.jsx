import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "./context/auth/AuthProvider";
import AppContent from "./components/AppContent";
import { PublicacoesProvider } from "./context/publicacao/PublicacaoProvider";
function App() {
  return (
    <Router>
      <AuthProvider>
        <PublicacoesProvider>
          <AppContent />
        </PublicacoesProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
