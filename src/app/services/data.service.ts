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
        let resp = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
        let todos = await resp.json();
        localStorage.setItem('todos', JSON.stringify(todos));
        return todos;
      }
    }
  }

