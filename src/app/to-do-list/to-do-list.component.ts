import {Component, OnInit} from '@angular/core';
import {Todos} from '../app.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  list: Todos[] = [];

  async ngOnInit(): Promise<any> {
    this.list = await fetch('https://jsonplaceholder.typicode.com/todos').then((resp) => resp.json()).then((respLists) => respLists);
  }
}


