import barista from "../imagens/barista.png";
import apagar from "../imagens/apagar.png";
import perfil from "../imagens/perfil.png";
import '../HeaderBQ.css'

export default function HeaderBQ() {
  return (
    <nav>
      <div className='navbar-left'>
        <img src={barista} alt='logo' className='coffeGirl' />
        <div className='nav-titles'>
          <p className='nav-title-first'>Burger</p>
          <p className='nav-title-second'>Queen</p>
        </div>
      </div>
      <div className='navbar-center'>
        <p className='user-name'>
          <i>Hola ?</i>
        </p>
      </div>
      <div className='navbar-right'>
        <img src={perfil} alt='profile icon' className='profileIcon' />
        <img src={apagar} alt='log out icon' />
      </div>
    </nav>
  );
}
