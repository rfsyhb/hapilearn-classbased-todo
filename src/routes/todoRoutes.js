const todoController = require('../controllers/todoController');

module.exports = [
  {
    method: 'GET',
    path: '/todos',
    handler: todoController.getTodos,
  },
  {
    method: 'GET',
    path: '/todos/{id}',
    handler: todoController.getTodoById,
  },
  {
    method: 'POST',
    path: '/todos',
    handler: todoController.createTodo,
  },
  {
    method: 'PUT',
    path: '/todos/{id}',
    handler: todoController.updateTodo,
  },
  {
    method: 'DELETE',
    path: '/todos/{id}',
    handler: todoController.deleteTodo,
  },
];
