import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  async getData(): Promise<any> {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return await response.json();
  }
}
