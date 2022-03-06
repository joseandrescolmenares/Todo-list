import React, { useContext } from "react";
import { Context } from "../App";
import style from "./Tareas.module.css"
import Buscar from "./Buscar";
import Tarea from "./Tarea";

function Tareas() {
  const context = useContext(Context)

  return (
    <div>
      <h1 className={style.padre}>To-do List</h1>
      <Buscar />
      <div className={style.Forma}>

        {context.lista.length ?
          context.lista.map((tarea, index) => <Tarea key={index} tarea={tarea} />)
          : "no hay tareas"
        }

      </div>
    </div>
  )
}

export default Tareas;