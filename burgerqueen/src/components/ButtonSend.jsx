import { useState } from "react"

export default function ButtonSend(props) {
 
  return (
   <button className="buttonSend"  id={props.id} onClick = {props.whenClick}>
    {props.title}
   </button>
  )
}
