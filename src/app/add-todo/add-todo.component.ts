import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Todos} from '../services/data.service';




@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit{
  todoForm: FormGroup;
  @Output() forms: EventEmitter<Todos> = new EventEmitter<Todos>();


  constructor() { }

  ngOnInit() {
    this.todoForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(7)
      ]),
      completed: new FormControl('',[
      ])
    });
  }

  onClick() {
    console.log(this.todoForm.value)
    this.forms.emit(this.todoForm.value)
  }
}
