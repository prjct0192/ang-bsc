import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
 async ngOnInit(): Promise<any> {
    await fetch('https://jsonplaceholder.typicode.com/todos').then((resp) => resp.json()).then((lists) => lists);
  }
}
