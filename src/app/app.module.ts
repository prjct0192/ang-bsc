import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { StyleDirective } from './directives/style.directive';
import {MultByPipe} from './pipes/mult-by.pipe';
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { ToDoItemComponent } from './to-do-content/to-do-item.component';
import {AppCounterService} from './Services/app-counter.service';
import { CounterComponent } from './counter/counter.component';
// import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    // StyleDirective,
    ToDoItemComponent,
    // CounterComponent,
    // MultByPipe,
    // ExMarksPipe,
    // FilterPipe,
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
