// Read existing todos from localStorage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem("todo")

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
const saveTodos = function (todo) {
    localStorage.setItem("todo", JSON.stringify(todo))
}

// Remove todo by id 
const removeTodo = function (id) {
    const todoIndex = todo.findIndex(function (task) {
        return task.id === id
    })

    if (todoIndex > -1) {
        todo.splice(todoIndex, 1)
    }
}

// Toggle the completed value for a given todo

const toggleTodo = function (id) {
    const task = todo.find(function (task) {
        return task.id === id
    })

    if (task !== undefined) {
        task.completed = !task.completed
    }
}
// Render app todos based on filters
const renderTodos = function(todo, filters) {
    let filteredTodos = todo.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    
    filteredTodos = filteredTodos.filter (function (task) {
        return !filters.hideCompleted || !task.completed
        // if (filters.hideCompleted) {
        //     return !task.completed
        // } else {
        //     return true
        // }
    })

    const incompleteTodos = filteredTodos.filter(function (task) {
        return !task.completed
    })
    

    document.querySelector('#all-todos').innerHTML = ''
    document.querySelector('#all-todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#all-todos').appendChild(generateTodoDOM(todo))
    })

  
}

// Get the DOM elements for an indiv note
const generateTodoDOM = function (task) {
    const todoEl = document.createElement("div")
    const checkbox = document.createElement("input")
    const todoText = document.createElement("span")
    const removeButton = document.createElement("button")

    // Setup todo checkbox
    checkbox.setAttribute("type", "checkbox") 
    checkbox.checked = task.completed   
    todoEl.appendChild(checkbox)
    checkbox.addEventListener("change", function () {
        toggleTodo(task.id)
        saveTodos(todo)
        renderTodos(todo, filters)
    })
    // Setup the todo text
    todoText.textContent = task.text
    todoEl.appendChild(todoText)

    // Setup removebutton
    removeButton.textContent = "x"
    todoEl.appendChild(removeButton)
    removeButton.addEventListener("click", function () {
        removeTodo(task.id)
        getSavedTodos(todo)
        renderTodos(todo, filters)
    })

   return todoEl
}

// Generate DOM elements for list summary

const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}