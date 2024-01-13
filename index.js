const root = document.getElementById('root')
const container = document.createElement('div')
const mainContainer = document.createElement('div')
const header = document.createElement('header')
const title = document.createElement('h2')
const input = document.createElement('input')
const form = document.createElement('form')
const addTaskButton= document.createElement('button')

const infoSection = document.createElement('section')
const tasksInfo = document.createElement('div')
const allTasks = document.createElement('button')
const completedTasks = document.createElement('button')
const deleteAllTasks = document.createElement('button')


input.placeholder = 'Enter your task'
input.classList.add('task-input')

title.innerText = 'TODO List'
header.append(title)

header.classList.add('header')
title.classList.add('title')
container.classList.add('container')
mainContainer.classList.add('main-container')

form.classList.add('tasks-form')

addTaskButton.innerText = 'Add Task'
addTaskButton.classList.add('task-add__button')


infoSection.classList.add('info__section')
tasksInfo.classList.add('tasks__info')


root.append(container)
container.append(mainContainer)
mainContainer.append(header, infoSection)
header.append(form)
form.append(input, addTaskButton)
infoSection.append(tasksInfo)

allTasks.innerText = 'All'
completedTasks.innerText = 'Completed: 1'

allTasks.classList.add('tasks__all', 'tasks__info-button', 'active')
completedTasks.classList.add('tasks__completed', 'tasks__info-button')

deleteAllTasks.innerText = 'Delete all tasks'
deleteAllTasks.classList.add('tasks__delete-all', 'tasks__info-button')

tasksInfo.append(allTasks, completedTasks, deleteAllTasks)

const mainSection = document.createElement('section')
mainSection.classList.add('main__section')
mainContainer.append(mainSection)

const tasksContainer = document.createElement('div')
tasksContainer.classList.add('tasks-container')

const taskContainer = document.createElement('div')
taskContainer.classList.add('task-container')

mainSection.append(tasksContainer)
tasksContainer.append(taskContainer)

const taskCheckbox = document.createElement('input')
taskCheckbox.type = 'checkbox'

const taskInfo = document.createElement('span')
taskInfo.classList.add('task-span')
taskInfo.innerText = 'English lesson with Maya'

const taskDate = document.createElement('span')
taskDate.classList.add('task-date')
taskDate.innerText = '13/01/2024'

const taskButtonsContainer = document.createElement('div')
taskButtonsContainer.classList.add('task-buttons')

taskContainer.append(taskCheckbox, taskInfo, taskDate, taskButtonsContainer)

const taskDeleteButton = document.createElement('button')
taskDeleteButton.classList.add('task-delete__button', 'task-button')
taskDeleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>'

const taskEditButton = document.createElement('button')
taskEditButton.classList.add('task-edit__button', 'task-button')
taskEditButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>'

taskButtonsContainer.append( taskEditButton, taskDeleteButton)