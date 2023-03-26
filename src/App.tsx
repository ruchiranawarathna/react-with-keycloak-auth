import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import React from "react";
import useAuth from "./hooks/useAuth";
import Protected from "./pages/Protected";
import Public from "./pages/Public";

function App() {
  const isLogin = useAuth();
  
  return (
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={isLogin ? <Protected/> : <Public/> } />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
  );
}

export default App;
