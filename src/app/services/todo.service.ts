import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/todo.inteface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private mock: ITodo[] = [
    {
      title: 'Madagascar hawk owl',
      description: 'Ninox superciliaris',
      isCompleted: true,
      isArchived: true,
      endDate: '11/16/2021',
    },
    {
      title: 'Pelican, brown',
      description: 'Pelecanus occidentalis',
      isCompleted: true,
      isArchived: true,
      endDate: '12/9/2021',
    },
    {
      title: 'Marten, american',
      description: 'Martes americana',
      isCompleted: true,
      isArchived: false,
      endDate: '6/24/2022',
    },
    {
      title: 'Blackish oystercatcher',
      description: 'Haematopus ater',
      isCompleted: true,
      isArchived: false,
      endDate: '6/10/2022',
    },
  ];

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock);
  constructor() {}

  public getTodos(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable();
  }
}
