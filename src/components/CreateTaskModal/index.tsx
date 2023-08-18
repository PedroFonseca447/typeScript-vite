import Modal from "react-modal"
 
import { X } from "react-feather"
 
import styles from "./styles.module.css"
import { ICreateTaskModalProps } from "./types"
import { FormEvent, useState } from "react"
 
export function CreateTaskModal({isOpen,onRequestClose, tasks,setTasks}: ICreateTaskModalProps ) {
 
    //useState valor inicial string vazia
    const [newTask, setNewTask] = useState("");
  //funcao que insere a novaTask no localStorage
  //usamos um import de uma interface partindo do react,
  //sua vantagem é a compatibilidade com o html form
    function handleCreateNewTask(event: FormEvent){
      event.preventDefault();
      //caso seja passado por null
      if(newTask ===""){
        return 
      }
  
      setTasks((prevState)=>{

        return[
          ...prevState,{
          id: tasks.length + 1,
          title: newTask,
          isCompleted: false
          }
        ]


      })
      //set new task para limpar o imput
        setNewTask("");
        onRequestClose();
    }

  return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className={styles.container}
       >
      <button type="button"
        
        onClick={() => onRequestClose()}
        className={styles.closeButton}
      >
        <X size={16} />
      </button>
 
      <h1>Adicionar tarefa</h1>
 
      <form onSubmit={handleCreateNewTask} >
        <label htmlFor="task">Título da tarefa</label>
        <input
          type="text"
          name="task"
          placeholder="Digite aqui"
          onChange={(event) => setNewTask(event.target.value)}
          value={newTask}
        />
 
        <button type="submit" className={styles.button}>
          Adicionar
        </button>
      </form>
    </Modal>
  )
}