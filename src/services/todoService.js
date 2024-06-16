const Todo = require('../models/todoModel');

exports.getTodos = () => {
  return Todo.getAll();
};

exports.getTodoById = (id) => {
  return Todo.getById(id);
};

exports.createTodo = (data) => {
  return Todo.create(data);
};

exports.updateTodo = (id, data) => {
  return Todo.update(id, data);
};

exports.deleteTodo = (id) => {
  return Todo.delete(id);
};
