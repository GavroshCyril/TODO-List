import { getDataLocalStorage, setDataLocalStorage } from "../utils.js"
import { renderTasks } from "../index.js"

const deleteTask = (id) => {
    const tasks = getDataLocalStorage('todoList')
    const taskIndex = tasks.findIndex(task => task.id === id)

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1)
    }
    setDataLocalStorage('todoList', tasks)
    renderTasks()
}