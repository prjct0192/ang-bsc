import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoItemComponent } from './to-do-content/to-do-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
