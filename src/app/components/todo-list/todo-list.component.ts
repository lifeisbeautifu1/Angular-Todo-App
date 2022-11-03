import { Component, OnInit } from '@angular/core';

import { ITodo } from 'src/app/interfaces';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: ITodo[] = [];

  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('todos')) {
      this.todos = JSON.parse(localStorage.getItem('todos')!) || [];
    }
  }

  toggleDone(todo: ITodo) {
    this.todos = this.todos.map((t) => {
      return t.id === todo.id ? { ...todo, isDone: !todo.isDone } : t;
    });
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  removeTodo(todo: ITodo) {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  handleAddTodo(todo: ITodo) {
    this.todos = [...this.todos, todo];
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
