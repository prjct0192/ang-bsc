import {Component, OnInit} from '@angular/core';

import {Todos} from '../app.component';
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

  async ngOnInit(): Promise<any> {
    this.list = await this.dataService.getData();
  }
}


