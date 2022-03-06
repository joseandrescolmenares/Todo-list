import React from 'react';
import style from './Tarea.module.css'

export default function Tarea(props) {
  return (
    <div className={style.tarea}>
      <label >
        <input type="checkbox" />
        {props.tarea}

      </label>


    </div>
  )
}