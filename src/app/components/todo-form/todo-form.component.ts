import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

import { ITodo } from 'src/app/interfaces';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  constructor() {}

  @Input() todos: ITodo[] = [];

  @Output() addTodo = new EventEmitter<ITodo>();

  inputTodo: string = '';

  ngOnInit(): void {}

  handleSubmit() {
    this.addTodo.emit({
      id: this.todos.length + 1,
      content: this.inputTodo,
      isDone: false,
    });
    this.inputTodo = '';
  }
}
