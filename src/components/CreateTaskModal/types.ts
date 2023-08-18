//interfaces dos componentes, contratos que eles devem seguir
//e quais tipos de dados

import { ItaskProps } from "../Task/types"

export interface ICreateTaskModalProps{
    isOpen: boolean
    onRequestClose: () => void
    tasks: ItaskProps[]
    setTasks: React.Dispatch<React.SetStateAction<>>ItaskProps[]
}

