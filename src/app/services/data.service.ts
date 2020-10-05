import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: string[];

  async getData(): Promise<any> {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    this.data = await response.json();
    return this.data;
  }
  constructor() { }
}
