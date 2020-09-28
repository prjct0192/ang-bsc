import {Component, Input} from '@angular/core';
import {List} from '../app.component';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})

export class ToDoListComponent {
  @Input() list: List;
}
