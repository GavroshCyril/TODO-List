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
const completedTaskButton = createButton('Completed: 1', 'button', 'tasks__completed', 'tasks__info-button')
const deleteAllTasksButton = createButton('Delete all tasks', 'button', 'tasks__delete-all', 'tasks__info-button')
tasksInfo.append(allTaskButton, completedTaskButton, deleteAllTasksButton)

const mainSection = createSection('main__section')

// createSpan('All tasks completed. Enjoy the moment!', 'info-log__span')
mainContainer.append(mainSection)

const tasksContainer = document.createElement('div')
tasksContainer.classList.add('tasks-container')

const createTaskItem = (text, date, id, isCompleted) => {
    const taskItem = document.createElement('div')
    taskItem.id = id
    taskItem.className = 'task-container'
    
    const taskText =  createSpan(text, 'task-span')
    taskText.textContent = text

    const checkbox = createInput('checkbox', '', 'task-checkbox')
    checkbox.checked = isCompleted

    if(isCompleted) {
        taskItem.classList.toggle('completed')
    }

    const currentDate = createSpan(date, 'task-date__span')

   const taskButtonsContainer = document.createElement('div')
   taskButtonsContainer.classList.add('task-buttons')

    taskItem.append(taskButtonsContainer)
    const editTaskButton = createButton('', 'button', 'task-edit__button', 'task-button', 'fa-solid', 'fa-pen-to-square')
    const deleteTaskButton = createButton('', 'button', 'task-delete__button', 'task-button', 'fa-solid', 'fa-trash')

    taskButtonsContainer.append(editTaskButton, deleteTaskButton)
    taskItem.append(checkbox, taskText, currentDate, taskButtonsContainer)

    mainSection.append(tasksContainer)
    tasksContainer.append(taskItem)

    return taskItem
}

const tasks = [
    {
    id: self.crypto.randomUUID(),
    text: 'Выучить JS',
    isCompleted: false,
    date: new Date().toLocaleDateString()
   },
   {
    id: self.crypto.randomUUID(),
    text: 'English with Maya',
    isCompleted: true,
    date: new Date().toLocaleDateString()
   },

   {
    id: self.crypto.randomUUID(),
    text: 'To read a book',
    isCompleted: false,
    date: new Date().toLocaleDateString()
   },
  ]

  
tasks.forEach(task => {
    createTaskItem(task.text, task.date, task.id, task.isCompleted)
})