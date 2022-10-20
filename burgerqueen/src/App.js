import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './pages/login';
import Desayunos from './pages/Desayunos';
import Especiales from './pages/Especiales';
import NotFoundPage from './components/NotFoundPage';
import NavBar from './components/NavBar';
import PerfilesUsuarios from './pages/PerfilesUsuarios';
// import Swal from 'sweetalert2';
// import { useEffect } from 'react';

function App() {

  // useEffect(() => {
  //   showAlert();
  // }, [])

  // const showAlert = () => {
  //   Swal.fire("Mensaje de error")
  // }

  return (
    <BrowserRouter>

      <NavBar/>

        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/desayunos' element={<Desayunos/>} />
          <Route path='/especiales' element={<Especiales/>} />
          <Route path='/perfilesUsuario/:id' element={<PerfilesUsuarios/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;


