import React, { useState, useContext } from "react";
import { Context } from "../App";
import style from "./Buscar.module.css";

export default function Buscar(props) {
  const context = useContext(Context)
  const [tarea, setTarea] = useState('')
  const handleTarea = () => {
    if (tarea && !context.lista.includes(tarea)) {
      context.setLista([...context.lista, tarea])
      setTarea("")
    }
    else {
      alert("invalido")
    }
  }
  return (
    <div className={style.input}>
      <input className={style.buscar} value={tarea} placeholder='agrgar tares' name="Tarea"
        onChange={e => setTarea(e.target.value)} />
      <button className={style.boton} onClick={() => handleTarea()}>add</button>
    </div>
  )
}

