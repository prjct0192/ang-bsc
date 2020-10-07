import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private todos: Response;


  constructor() { }

  async getData(): Promise<any> {
    localStorage.getItem('todos');
    if (this.todos) {
        return this.todos;
      } else {
        let todos = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
        let todo = await todos.json();
        localStorage.setItem('todos', JSON.stringify(todo));
        return todo;
      }
    }
  }

