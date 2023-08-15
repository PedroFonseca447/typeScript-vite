//aqui se cria as interfaces, que devem respeitar as variaveis definidas por ela
//tipos das props
export interface ItaskProps{
    id: number
    title: string
    isCompleted: boolean
}

export interface IcomponentTaskProps{
    task : ItaskProps
    //sempre q trabalhas com funçoes e props
    handleToggleTask :(clickedTask: ItaskProps) => void
    handleRemoveTask: (taskId: number) => void
}