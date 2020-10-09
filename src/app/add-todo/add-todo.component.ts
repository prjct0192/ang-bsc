import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';




@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Input() title = '';
  @Input() completed = false;
  @Input() list;
  form: FormGroup;
  private newTodo: any;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      todo: new FormControl(' ', [
        Validators.required,
        Validators.minLength(7)
        ])
    });
  }
  onInput(event: any) {
    this.title = event.target.value;
  }
  toggle(event: any) {
    this.completed = event.target.checked;
  }
  onClick() {
    this.newTodo = new Object({
      title: this.title,
      completed: this.completed
    });
    console.log('object', this.newTodo);

    this.form.reset();
  }

  submit() {
    if (this.form.valid) {
      console.log('Form: ', this.form);
      const formData = {...this.form.value};
      console.log('Form Data', formData);
    }
    this.list.unshift(this.newTodo);
  }
}
