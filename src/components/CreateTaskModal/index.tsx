import Modal from "react-modal"
 
import { X } from "react-feather"
 
import styles from "./styles.module.css"
 
export function CreateTaskModal({isOpen,onRequestClose}) {
 
  

  return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className={styles.container}
       >
      <button
        type="button"
        onClick={() => onRequestClose()}
        className={styles.closeButton}
      >
        <X size={16} />
      </button>
 
      <h1>Adicionar tarefa</h1>
 
      <form >
        <label htmlFor="task">Título da tarefa</label>
        <input
          type="text"
          name="task"
          placeholder="Digite aqui"
          value=""
        />
 
        <button type="submit" className={styles.button}>
          Adicionar
        </button>
      </form>
    </Modal>
  )
}