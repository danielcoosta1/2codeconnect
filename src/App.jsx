import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "./context/auth/AuthProvider";
import AppContent from "./components/AppContent";
function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
