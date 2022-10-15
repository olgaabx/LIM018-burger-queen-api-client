import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function PerfilesUsuarios() {

    const {id} = useParams();
    const navigate = useNavigate();
    const logOut = () => {
        navigate('/');
    };
    
  return (
    <>
    <div>
      Colaborador <h1>{id}</h1>
    </div>
    <button onClick = {logOut}>Salir</button>
    </>
    

  )
}
