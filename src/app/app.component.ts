import { Component } from '@angular/core';
import {AppCounterService} from './Services/app-counter.service';
import {LocalCounterService} from './Services/local-counter.service';

export interface Todos {
  userId?: number;
  title: string;
  completed: boolean;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [LocalCounterService]
})
export class AppComponent {
  // search = '';
  // searchField = 'title';
  // posts: Post2[] = [
  //   {title: 'Beer', text: 'Most best beer in the World!'},
  //   {title: 'Vodka', text: 'Drink vodka, and play Dotka, comrade!'},
  //   {title: 'Gin', text: 'Im fucking love this shit'}
  // ];
  // addPost() {
  //   this.posts.unshift({
  //     title: 'Apperol',
  //     text: 'Bitchy fun'
  //   });
  // }
  //
  // constructor(
  //   private appCounterService: AppCounterService,
  //   private localCounterService: LocalCounterService
  // ) {}
}
