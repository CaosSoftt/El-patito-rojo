import React from 'react';
import "../../assets/styles/Login.css"

function Login() {
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Evita que el formulario se envíe normalmente
    alert(
        'ETSELENTc'
        ); // Muestra la alerta de notificación
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <p className="form-title">Bienvenido a CodeLabs</p>
      <div className="input-container">
        <input type="email" placeholder="Ingresar Correo" />
      </div>
      <div className="input-container">
        <input type="password" placeholder="Ingresar Contraseña" />
      </div>
      <button type="submit" className="submit">
        Ingresar
      </button>
      <p className="signup-link">
        No tienes Cuenta?
        <a href="" >Registrarse </a>
      </p>
    </form>
  );
}

export default Login;
