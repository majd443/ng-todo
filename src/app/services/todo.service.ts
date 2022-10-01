import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.inteface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private mock: ITodo[] = [
    {
      id: 1,
      title: 'Madagascar hawk owl',
      description: 'Ninox superciliaris',
      isCompleted: false,
      isArchived: true,
      endDate: '11/16/2021',
      selected: true,
    },
    {
      id: 2,
      title: 'Pelican, brown',
      description: 'Pelecanus occidentalis',
      isCompleted: false,
      isArchived: true,
      endDate: '12/9/2021',
      selected: false,
    },
    {
      id: 3,
      title: 'Marten, american',
      description: 'Martes americana',
      isCompleted: false,
      isArchived: false,
      endDate: '6/24/2022',
      selected: false,
    },
    {
      id: 4,
      title: 'Blackish oystercatcher',
      description: 'Haematopus ater',
      isCompleted: false,
      isArchived: false,
      endDate: '6/10/2022',
      selected: false,
    },
  ];

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(
    this.mock
  );
  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(
    this.mock[0]
  );

  constructor() {}

  public getTodos(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable();
  }

  public getSelectedtodo(): Observable<ITodo> {
    return this._singleTodoSubject.asObservable();
  }

  public setSelectedTodo(todo: ITodo) {
    this._singleTodoSubject.next(todo);
  }
}
