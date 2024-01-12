const root = document.getElementById('root')
const taskContainer = document.createElement('div')
const header = document.createElement('header')
const title = document.createElement('h2')
const input = document.createElement('input')
const form = document.createElement('form')
const addTaskButton= document.createElement('button')


input.placeholder = 'Enter your task'
input.classList.add('task-input')

title.innerText = 'TODO List'
header.append(title)

header.classList.add('header')
title.classList.add('title')
taskContainer.classList.add('task-container')

form.classList.add('tasks-form')


addTaskButton.classList.add('task-add__button')
addTaskButton.innerText = 'Add Task'


root.append(taskContainer)
taskContainer.append(header)
header.append(form)
form.append(input, addTaskButton)