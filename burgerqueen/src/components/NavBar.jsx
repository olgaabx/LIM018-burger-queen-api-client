import { NavLink } from "react-router-dom"

export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
            <NavLink to='/'>Login</NavLink>
        </li>
        <li>
            <NavLink to='/desayunos'>Desayunos</NavLink>
        </li>
        <li>
            <NavLink to='/especiales'>Especiales</NavLink>
        </li>
        <li>
            <NavLink to='/perfilesUsuario'>Perfil</NavLink>
        </li>
        
      </ul>
    </div>
  )
}
