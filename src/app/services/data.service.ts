import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor() {
  }

  async getData(): Promise<any> {
    const todos = localStorage.getItem('todos');

    if (todos) {
      return JSON.parse(todos);
      } else {
        const resp = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
      // tslint:disable-next-line:no-shadowed-variable
        const todos = await resp.json();
        localStorage.setItem('todos', JSON.stringify(todos));
        return todos;
      }
    }
  }

