import comidaChatarra from "../imagens/comidaChatarra.png";
import cafedesayuno from "../imagens/cafedesayuno.png";
import cocina from "../imagens/cocina.png";
import '../OptionMenu.css'


export default function OptionMenu() {
  return (
    <div className="options">
      <button className="iconMenu"> <img src={cafedesayuno} alt='icondesayuno' className="imgMenu"/></button>
      <button className="iconMenu"><img src={comidaChatarra} alt='iconEspeciales'/></button>
      <button className="iconMenu"><img src={cocina} alt='iconCocina'/></button>
    </div>
  )
}
