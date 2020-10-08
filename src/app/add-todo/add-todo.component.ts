import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Todos} from '../app.component';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Input() expList: Todos[];
  form: FormGroup;
  inputValue: any;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      todo: new FormControl(' ', Validators.required)
    });
  }
  onClick() {
  }

  submit() {
  }

  onInput(event: any) {
    this.inputValue = event.target.value;
  }
}
