import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Pizzería Mamma Mia!</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">🍕 Home</Link>
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">🔓 Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout">🔒 Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">🔐 Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">🔐 Register</Link>
              </li>
            </>
          )}
          <li className="nav-item">
            <span className="nav-link">🛒 Total: ${total}</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
