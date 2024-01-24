window.addEventListener("load", () => {
const root = document.getElementById('root')
const container = document.createElement('div')
const mainContainer = document.createElement('div')
const header = document.createElement('header')
const title = document.createElement('h2')
const form = document.createElement('form')
const tasksInfo = document.createElement('div')


const createButton = (text = '', type, ...classNames) => {
    const button = document.createElement('button')
    for(const className of classNames) {
        if(className){
            button.classList.add(className)
        }
    }

    button.textContent = text
    button.type = type
    return button
}

const createInput = (type, placeholder = '', className) => {
    const input = document.createElement('input')
    input.classList.add(className)
    input.type = type
    if (type === 'text') {
        input.placeholder = placeholder;
    }
    return input
}

const createSpan = (text, className) => {
    const span = document.createElement('span')
    span.classList.add(className)
    span.innerText = text
    return span
}

const createSection = (className) => {
    const section = document.createElement('section')
    section.classList.add(className)
    return section
}

title.innerText = 'TODO List'
header.append(title)

header.classList.add('header')
title.classList.add('title')
container.classList.add('container')
mainContainer.classList.add('main-container')

form.classList.add('tasks-form')

const infoSection = createSection('info__section')

tasksInfo.classList.add('tasks__info')

const tasksSearch = document.createElement('div')
tasksSearch.classList.add('tasks__search')

const taskSearchInput = createInput('search', 'Search...', 'search-input')
const taskSearchButton = createButton('', 'button', 'search-button', 'fa-solid', 'fa-magnifying-glass')
tasksSearch.append(taskSearchInput, taskSearchButton)

root.append(container)
container.append(mainContainer)
mainContainer.append(header, infoSection)
header.append(form)

const taskInput = createInput('text', 'Enter your task', 'task-input')
const addTaskButton = createButton('Add Task', 'submit', 'task-add__button')

form.append(taskInput, addTaskButton)
infoSection.append(tasksInfo, tasksSearch)

const allTaskButton = createButton('All', "button", 'tasks__all', 'tasks__info-button', 'active')
const completedTaskButton = createButton('Completed', 'button', 'tasks__completed', 'tasks__info-button')
const deleteAllTasksButton = createButton('Delete all tasks', 'button', 'tasks__delete-all', 'tasks__info-button')
tasksInfo.append(allTaskButton, completedTaskButton, deleteAllTasksButton)



const mainSection = createSection('main__section')


mainContainer.append(mainSection)

const tasksContainer = document.createElement('div')
tasksContainer.classList.add('tasks-container')


const setDataLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}

const getDataLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key)) ?? []
}


const createTaskItem = (text, date, id, isCompleted) => {

    const taskItem = document.createElement('div')
    taskItem.id = id
    taskItem.className = 'task-container'
    
    const taskText =  createSpan(text, 'task-span')
    taskText.textContent = text

    const checkbox = createInput('checkbox', '', 'task-checkbox')
    checkbox.checked = isCompleted
    if (checkbox.checked) {
        taskItem.classList.add('completed');
    } else {
        taskItem.classList.remove('completed');
    }

    checkbox.addEventListener('change', () => {

        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            tasks[taskIndex].isCompleted = checkbox.checked;
            setDataLocalStorage('todoList', tasks)
            renderTasks();

        }

    })

    const currentDate = createSpan(date, 'task-date__span')

   const taskButtonsContainer = document.createElement('div')
   taskButtonsContainer.classList.add('task-buttons')

    taskItem.append(taskButtonsContainer)
    const editTaskButton = createButton('', 'button', 'task-edit__button', 'task-button', 'fa-solid', 'fa-pen-to-square')
    const deleteTaskButton = createButton('', 'button', 'task-delete__button', 'task-button', 'fa-solid', 'fa-trash')


    deleteTaskButton.addEventListener('click', () => deleteTask(id))

    taskButtonsContainer.append(editTaskButton, deleteTaskButton)
    taskItem.append(checkbox, taskText, currentDate, taskButtonsContainer)

    mainSection.append(tasksContainer)
    tasksContainer.append(taskItem)

    return taskItem
}



const deleteTask = (id) => {
    const taskIndex = tasks.findIndex(task => task.id === id)

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1)
    }
    setDataLocalStorage('todoList', tasks)
    renderTasks()
}

const deleteAllTasks = () => {
    tasks.length = 0
    setDataLocalStorage('todoList', tasks)
    renderTasks()
}

deleteAllTasksButton.addEventListener('click', deleteAllTasks)


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const taskText = taskInput.value

    if (taskText === "") {
        return alert("Warning! You must write something!");
      }

    console.log('taskText: ', taskText);
    tasks.push({
        id: self.crypto.randomUUID(),
        text: taskText,
        isCompleted: false,
        date: new Date().toLocaleDateString()
    })

    setDataLocalStorage('todoList', tasks)

    tasks.forEach(task => {
        createTaskItem(task.text, task.date, task.id, task.isCompleted)
    })

    taskInput.value = ''
    renderTasks()
})

const countTasks = () => {
    const completedTask = tasks.filter(task => task.isCompleted === true).length
    completedTaskButton.textContent = `Completed: ${completedTask}`
}


const renderTasks = () => {
    tasksContainer.innerHTML = ''

    if(tasks.length > 0) {
        tasks.forEach(task => {
            createTaskItem(task.text, task.date, task.id, task.isCompleted)
        })
    } else {
        const showInfo = createSpan('All tasks completed. Enjoy the moment!', 'info-log__span')
        tasksContainer.append(showInfo)
    }

    countTasks()
}




const tasks = getDataLocalStorage('todoList');
    renderTasks()

})