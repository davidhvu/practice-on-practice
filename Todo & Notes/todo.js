// Create an array with five todos
// You have x todos
// Print the first and second to last items -> Todo: Walk the dog

const todo = [{
    text:'buy groceries',
    completed: true
}, {
    text: 'get Rainbow sandals',
    completed: false
}, {
    text: 'drive car to mechanic',
    completed: true
}, {
    text: 'do exercise',
    completed: false
}, {
    text: 'eat food',
    completed: true
}]

// 1. Convert array to array of objects -> text, completed 
// 2. Create function to remove a todo by text value

const deleteTodo = function (todo, todoText) {
    const index = todo.findIndex(function (todo, index) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
   
    })
    if (index > -1) {
        todo.splice(index, 1)
    }
    
}

const getThingsToDo = function (todo) {
    return todo.filter(function (todos, index) {
        const thingsNotDone = todos.completed
        return !thingsNotDone
    })
}


const sortTodos = function (todo) {
    todo.sort(function (a, b) {
        return a.completed - b.completed
       
    }
    )}


sortTodos(todo)
console.log(todo)


// console.log(getThingsToDo(todo))

// Alternate

// const getThingsToDo = function (todo) {
//     return todo.filter(function (todos, index) {
//         return !todos.completed
//     })
// }

// console.log(getThingsToDo(todo))


// deleteTodo(todo, 'get rainbow sandals')
// console.log(todo)
