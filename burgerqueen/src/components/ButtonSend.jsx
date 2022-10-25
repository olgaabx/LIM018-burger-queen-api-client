

export default function ButtonSend(props) {
  return (
  
   <button className="buttonSend"  id={props.id} onClick = {(e)=>console.log('hola',e.target.id)}>
    {props.title}
   </button>
  )
}
