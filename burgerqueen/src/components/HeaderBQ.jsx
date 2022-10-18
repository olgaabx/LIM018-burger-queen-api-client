import barista from "../imagens/barista.png";
import apagar from "../imagens/apagar.png";
import perfil from "../imagens/perfil.png";
import '../HeaderBQ.css'

export default function HeaderBQ() {
  return (

     <nav>
        <div id='logo'>
            <img src={barista} alt='chica barista' className='baristaLogo'/>
            <p>Burger Queen</p>
        </div>
        <div id="userName">
        <p>`nombrede bd`</p>
        </div>
        <div>
            <img src={perfil} alt="iconPerfil" />
            <img src={apagar} alt="cerrar sesion" />
        </div>

    </nav>
    
  )
}
