import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.inteface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() set todo(todo: ITodo) {
    this._todo = todo;
    console.log(todo);
  }

  get todo() {
    return this._todo;
  }
  private _todo: ITodo;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  public onCompleteTodo(todo: ITodo): void {
    // todo.isCompleted = true;
    this.todoService.onTodoAction(todo.id, 'isCompleted');
  }

  public onArchiveTodo(): void {
    //this.todo.isArchived = true;
    this.todoService.onTodoAction(this.todo.id, 'isArchived');
  }
}
