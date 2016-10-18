let routes = require('express').Router();

let todos = [];

function addTodo(todo) {
    todos.push(todo);
}
function removeTodo(index) {
    todos.splice(index, 1);
}
function editTodo(index, newTodo) {
    if (index < todos.length) {
        todos[index] = newTodo
        return { message: 'Successfully editted' }
    }
    return { error: 'Out of bounds' }
}


    routes.route('/todos/:index?')
    .get(function (req, res) {
        res.send(todos);

    })
    .post(function (req, res) {
        addTodo(req.body.todo)
        res.send({ message: 'Successfully added to todos' })
    })
    .put(function (req, res) {
        res.send(
            editTodo(req.params.index, req.body.todo)
        )
    })
    .delete(function (req, res) {
        removeTodo(req.params.index)
        res.send({ message: 'Successfully removed' })
    })
    module.exports = {
        routes
    }