// import { Component } from "react";
import barista from "../imagens/barista.png"
function Login(props) {
  return (
    <>
      <div className='login'>
        <div className='form-container'>
          <h1>Burger Queen</h1>
          <img src={barista} alt='chica barista' className='baristaLogo' />
          <p className='titlelogin'>Iniciar sesión</p>
          <form action='/' className='form'>
            <label htmlFor='email' className='label' required>
              Correo electrónico
            </label>
            <input
              type='email'
              id='email'
              placeholder='juan@gmail.com'
              className='input input-email'
              required
            />
            <label htmlFor='password' className='label' required>
              Constraseña
            </label>
            <input
              type='password'
              id='new-password'
              placeholder='***********'
              className='input input-password'
              required
            />
            <input
              type='submit'
              defaultValue='Ingresar'
              className='primary-button login-button'
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;