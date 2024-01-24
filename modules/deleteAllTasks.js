import { getDataLocalStorage, setDataLocalStorage } from "../utils.js"

export const deleteAllTasks = () => {
    const tasks = getDataLocalStorage('todoList')

    if(tasks.length > 0 && confirm('Are you sure you want to delete all tasks?')) {
        tasks.length = 0
        setDataLocalStorage('todoList', tasks)
        renderTasks()
    } else {
        alert('No tasks to delete')
    }

}

