import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Register from './components/Register'; // Añadir Register
import Login from './components/Login'; // Añadir Login
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importar Router y Route

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} /> {/* Ruta de Register */}
            <Route path="/login" element={<Login />} /> {/* Ruta de Login */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
