import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from "./pages/Mainpage";
import AboutPage from "./pages/AboutPage";
import ComandPage from "./pages/ComandPage";




const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("authenticated");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {

      navigate("/");
    }
  }, [isAuthenticated, navigate]);


  return element;
};

function App() {
  
    return (
      <div className="name">
      
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} /> 
          <Route path="/about" element={<AboutPage />} /> 
          <Route path="/comand" element={<ComandPage />} /> 
        </Routes>        
      </Router>
      </div>
    );
}

export default App;
