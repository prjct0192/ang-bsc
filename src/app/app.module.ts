import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoItemComponent } from './to-do-content/to-do-item.component';
import { DirectiveDirective } from './directive/directive.directive';
import { BodDirective } from './directive/bod.directive';
import {DataService} from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoItemComponent,
    DirectiveDirective,
    DirectiveDirective,
    BodDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
