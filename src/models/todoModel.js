const { nanoid } = require('nanoid');

class Todo {
  constructor() {
    this.todos = [
      { id: 1, title: 'Learn Hapi.js', completed: false },
      { id: 2, title: 'Build a REST API', completed: false },
    ];
    // this.id = 2;
  }

  getAll() {
    return this.todos;
  }

  getById(id) {
    return this.todos.find((todo) => todo.id === id);
  }

  create(data) {
    const newTodo = {
      // id: ++this.id,
      id: nanoid(16),
      title: data.title,
      completed: data.completed || false,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  update(id, data) {
    const todo = this.getById(id);
    if (todo) {
      todo.title = data.title !== undefined ? data.title : todo.title;
      todo.completed =
        data.completed !== undefined ? data.completed : todo.completed;
      return todo;
    }
    return null;
  }

  delete(id) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      return this.todos.splice(index, 1)[0];
    }
    return null;
  }
}

module.exports = new Todo();
