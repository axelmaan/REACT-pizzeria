import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage('Todos los campos son obligatorios.');
      return;
    }
    if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres.');
      return;
    }
    setMessage('Login exitoso.');
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
