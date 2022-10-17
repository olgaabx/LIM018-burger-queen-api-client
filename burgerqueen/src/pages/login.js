// import { Component } from "react";
import React, { useState } from 'react';
import { auth } from "../helpers/api";
import { useNavigate } from 'react-router-dom';
import barista from "../imagens/barista.png";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const BASE_URL = "http://localhost:3000";
  // const authPath = "/auth";

  const loginSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value)

    // setPassword(event.target.value);
    if (email === "") {
      alert("Por favor, ingresa tus datos");
    } else {
      auth(email, password)
        .then((res) => {
          // console.log("soy el console", res);
          if (res.status === 200) {
            navigate("/desayunos");
          }
          else if (res.status === 400) {
            console.log("datos incorrectos");
          }
        })
        .catch((err) => {
          // console.log("=>", err);
          console.log("error del catch");
        });
    }
  };

  return (
    <>
      <div className='login'>
        <div className='form-container'>
          <h1>Burger Queen</h1>
          <img src={barista} alt='chica barista' className='baristaLogo' />
          <p className='titlelogin'>Iniciar sesión</p>
          <form action='/' className='form'>
            {/* <label htmlFor='email' className='label' required>
              Correo electrónico
            </label> */}
            <input
              type='text'
              id='email'
              placeholder='juan@gmail.com'
              className='input input-email'
              onChange={(e) => setEmail(e.target.value)}
              // required
            />
            <label htmlFor='password' className='label' required>
              Constraseña
            </label>
            <input
              type='text'
              id='new-password'
              placeholder='***********'
              className='input input-password'
              onChange={(e) => setPassword(e.target.value)}
              // required
            />
            <input
              type='submit'
              defaultValue='Ingresar'
              className='primary-button login-button'
              onClick={loginSubmit}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
