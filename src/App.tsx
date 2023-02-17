import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import keycloak from "./Keycloak"
import { ReactKeycloakProvider } from "@react-keycloak/web";
import './App.css';
import React from "react";

function App() {

  function onKeycloakEvent(e: any) {
    console.log("onKeycloakEvent", e)
  }

  function onKeycloakTokens(tokens: unknown) {
    console.log("Tokens", tokens)
    // setTokens(tokens)
  }

  return (
    <ReactKeycloakProvider authClient={keycloak}
      initOptions={{ onLoad: "login-required" }}
      onEvent={onKeycloakEvent}
      onTokens={onKeycloakTokens}
    >
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </ReactKeycloakProvider>

  );
}

export default App;
