    import { BrowserRouter, Route, Routes } from "react-router-dom";
    import HomePage from "./pages/Homepage";
    import keycloak from "./Keycloak"
    import { ReactKeycloakProvider } from "@react-keycloak/web";
    import './App.css';

    function App() {

      return (
        <ReactKeycloakProvider authClient={keycloak} initOptions={{ onLoad: "login-required" }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </BrowserRouter>
        </ReactKeycloakProvider>

      );
    }

    export default App;
