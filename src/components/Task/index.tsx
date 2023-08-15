import React from "react"
 
import { Trash } from "react-feather"
 
import styles from "./styles.module.css"
import { IcomponentTaskProps } from "./types"
 //task propriedade, title e a propriedade de task


export function Task({task, handleToggleTask , handleRemoveTask} : IcomponentTaskProps)  {
  return (
    <div className={styles.container}>
      <input type="checkbox"
      readOnly
      checked={task.isCompleted}
      className={styles.input}
      onClick={ () => {handleToggleTask(task)}}
      />

      <label className={task.isCompleted ? styles.completed : ''}>{task.title}</label>
 
      <div className={styles.buttonsWrapper}>
        <button type="button"
         className={styles.button}
          onClick={()=>{handleRemoveTask(task.id)}}
      >
          <Trash size={16} />
        </button>
      </div>
    </div>
  )
}