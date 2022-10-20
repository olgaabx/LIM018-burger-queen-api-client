import './styles/App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './pages/Login';
import Desayunos from './pages/Desayunos';
import Especiales from './pages/Especiales';
import Cocina from './pages/Cocina';
import NotFoundPage from './components/NotFoundPage';
import PerfilUsuario from './pages/PerfilUsuario';
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

        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/desayunos' element={<Desayunos/>} />
          <Route path='/especiales' element={<Especiales/>} />
          <Route path='/perfil' element={<PerfilUsuario/>} />
          <Route path='/cocina' element={<Cocina/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>

    </BrowserRouter>

  );
}

export default App;


