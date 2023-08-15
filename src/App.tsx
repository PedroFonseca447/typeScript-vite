import {useState} from 'react'
import {Task} from './components/Task/index'
import { Plus } from "react-feather"
 
import styles from "./styles/pages/home.module.css"
 
import { CreateTaskModal } from './components/CreateTaskModal'
import {ItaskProps} from './components/Task/types'
import Modal from "react-modal"
 
Modal.setAppElement("#root")
 
function App() {
  const [tasks, setTasks] = useState<ItaskProps[]>(()=>
  //esse hooks faz que temos 2 props, o primeiro o valor inicial
  //e o segundo sera alterado ou nao dependendo de o que vai
  //estar no local storage, se for vazio retorna um array vazio
  {const taskfromLocalStorage = localStorage.getItem("tasks")

    if(!taskfromLocalStorage){
      return[];
    }


    return JSON.parse(taskfromLocalStorage);
  });
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);


  //essa acção retorna apenas a task clicada
  //retorna-se a propia task ou todas as outras
  function handleToggleTask(clickedTask : ItaskProps){
      setTasks((prevState) => {
        return prevState.map((task) => {
          if(task.id === clickedTask.id){
            return{
              ...task,
              isCompleted: !task.isCompleted
            }
          }
          return task;
        })
      })

  }
  //recebe o id para remover uma task
  function handleRemoveTask(taskId: number){
      setTasks((prevState) => {
          return prevState.filter((task) =>{
            //assim mantem todas task menos a removida
            return task.id !== taskId;
          })
      } )
       
      
  }


  function handleRequestCloseCreateTaskModal() {
    setIsCreateTaskModalOpen(false);
  }

  return (
    <div className="App">
      <section className={styles.container}>
        <header className={styles.header}>
          <h1>Minhas tarefas</h1>
          <button type="button"
          className={styles.addTaskButton}
          onClick={() => setIsCreateTaskModalOpen(true)}>
            Adicionar uma nova tarefa
            <Plus />
          </button>

        </header>
        <div className={styles.tasks}>
          {tasks?.map((task) =>(<Task 
            key={task.id}
            task={task}
            handleToggleTask={handleToggleTask}
            handleRemoveTask={handleRemoveTask}
          ></Task>))}
         
        </div>
      </section>
      <CreateTaskModal
        isOpen={isCreateTaskModalOpen}
        onRequestClose={handleRequestCloseCreateTaskModal}
      />
    </div>
  );
}
export default App