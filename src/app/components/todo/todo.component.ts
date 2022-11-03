import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ITodo } from 'src/app/interfaces';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo: ITodo | null = null;

  @Output() toggleIsDone = new EventEmitter<ITodo>();

  @Output() deleteTodo = new EventEmitter<ITodo>();

  constructor() {}

  ngOnInit(): void {}

  toggleDone(todo: ITodo) {
    this.toggleIsDone.emit(todo);
  }

  delete(todo: ITodo) {
    this.deleteTodo.emit(todo);
  }
}
