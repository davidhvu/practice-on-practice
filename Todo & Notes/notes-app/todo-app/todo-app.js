

let todo = getSavedTodos()


const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todo, filters)


document.querySelector('#search-todo').addEventListener("input", function (e) {
    filters.searchText = e.target.value
    renderTodos(todo, filters)
})


document.querySelector("#add-todo").addEventListener("submit", function (e) {
    e.preventDefault()
    todo.push({
        id: uuidv4(),
        text: e.target.elements.toDo.value,
        completed: false
    })
    saveTodos(todo)
    renderTodos(todo, filters)
    e.target.elements.toDo.value = ''
})


document.querySelector("#toDo-checkbox").addEventListener("change", function (e) {
    filters.hideCompleted = e.target.checked  
    renderTodos(todo, filters)
    }
)