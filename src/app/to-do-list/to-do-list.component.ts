import {Component, OnInit} from '@angular/core';
import {Todos} from '../services/data.service';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  list: Todos[] = [];
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getData().subscribe(todos => {
      this.list = todos;
    })
  }

  updateTodos($event: Todos) {
    this.list.unshift($event)
  }
}


