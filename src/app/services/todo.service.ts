import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.inteface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private singleTodo: ITodo ;
  private todos: Array<ITodo> = [];
  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(
    this.todos
  );
  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(
    this.todos.length ? this.todos[0] : null
  );

  constructor() {}

  public getTodos(): Observable<Array<ITodo>> {
    if (!this._todoSubject.value.length) {
      const todosString = localStorage.getItem('todos');
      if (todosString) {
        const existingTodos: Array<ITodo> = JSON.parse(todosString);
        existingTodos[0].selected = true;
        this._todoSubject.next(existingTodos);
        this._singleTodoSubject.next(existingTodos[0]);
      }
    }

    return this._todoSubject.asObservable();
  }

  public getSelectedtodo(): Observable<ITodo> {
    return this._singleTodoSubject.asObservable();
  }

  public setSelectedTodo(todo: ITodo) {
    this._singleTodoSubject.next(todo);
  }

  public addNewTodo(newTodo: ITodo): void {
    //take existing todos
    //add new todo to existing todo
    //trigger next tic in observable
    console.log(newTodo);
    const existingTodos: Array<ITodo> = this._todoSubject.value;
    existingTodos.push(newTodo);
    this._todoSubject.next(existingTodos);

    localStorage.setItem('todos', JSON.stringify(existingTodos));
  }

  public onTodoAction(todoId: string, action: string): void {
    const existingTodos: Array<ITodo> = this._todoSubject.value;

   // const todoIndex = existingTodos.findIndex(
      //this.singleTodo > this.singleTodo.id 
    //);
   // existingTodos[todoIndex][action] = true;
    this._todoSubject.next(existingTodos);
    localStorage.setItem('todos', JSON.stringify(existingTodos));
  }
}
