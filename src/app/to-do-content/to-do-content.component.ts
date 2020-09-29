import {Component} from '@angular/core';
import {ToDoListComponent} from '../to-do-list/to-do-list.component';



@Component({
  selector: 'app-to-do-content',
  templateUrl: './to-do-content.component.html',
  styleUrls: ['./to-do-content.component.scss']
})
export class ToDoContentComponent extends ToDoListComponent{
}

