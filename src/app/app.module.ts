import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoContComponent } from './to-do-cont/to-do-cont.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoContComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
