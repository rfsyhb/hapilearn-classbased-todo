const todoService = require('../services/todoService');

exports.getTodos = (request, h) => {
    const todos = todoService.getTodos();
    return h.response(todos).code(200).type('application/json');
};

exports.getTodoById = (request, h) => {
    const todo = todoService.getTodoById(parseInt(request.params.id));
    if (todo) {
        return h.response(todo).code(200).type('application/json');
    }
    return h.response({ message: 'Todo not found' }).code(404).type('application/json');
};

exports.createTodo = (request, h) => {
    const newTodo = todoService.createTodo(request.payload);
    return h.response(newTodo).code(201).type('application/json');
};

exports.updateTodo = (request, h) => {
    const updatedTodo = todoService.updateTodo(parseInt(request.params.id), request.payload);
    if (updatedTodo) {
        return h.response(updatedTodo).code(200).type('application/json');
    }
    return h.response({ message: 'Todo not found' }).code(404).type('application/json');
};

exports.deleteTodo = (request, h) => {
    const result = todoService.deleteTodo(parseInt(request.params.id));
    if (result) {
        return h.response({ message: 'Todo deleted' }).code(200).type('application/json');
    }
    return h.response({ message: 'Todo not found' }).code(404).type('application/json');
};
