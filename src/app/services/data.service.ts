import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Todos {
  title: string;
  completed: boolean;
  id?: number;
}
@Injectable({
  providedIn: 'root'
})

export class DataService {
  private todos: Todos[];

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get<Todos[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
    }
  }

// const todos = localStorage.getItem('todos');
//
// if (todos) {
//   return JSON.parse(todos);
//   } else {
//     const resp = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
//   // tslint:disable-next-line:no-shadowed-variable
//     const todos = await resp.json();
//     localStorage.setItem('todos', JSON.stringify(todos));
//     return todos;
//   }

