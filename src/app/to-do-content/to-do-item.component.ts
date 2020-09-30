import {Component} from '@angular/core';
import {ToDoListComponent} from '../to-do-list/to-do-list.component';



@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent extends ToDoListComponent{
}

