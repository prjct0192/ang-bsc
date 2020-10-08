import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoItemComponent } from './to-do-content/to-do-item.component';
import { DirectiveDirective } from './directive/directive.directive';
import { BodDirective } from './directive/bod.directive';
import {DataService} from './services/data.service';
import { AddTodoComponent } from './add-todo/add-todo.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoItemComponent,
    DirectiveDirective,
    DirectiveDirective,
    BodDirective,
    AddTodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
