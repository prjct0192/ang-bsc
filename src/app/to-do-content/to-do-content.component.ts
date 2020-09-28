import {Component, Input} from '@angular/core';
import {List} from '../app.component';

@Component({
  selector: 'app-to-do-content',
  templateUrl: './to-do-content.component.html',
  styleUrls: ['./to-do-content.component.scss']
})
export class ToDoContentComponent {
  @Input() list: List;
}
