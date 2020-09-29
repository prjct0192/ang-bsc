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
  list: Todos[] = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false
    },
    {
      userId: 1,
      id: 4,
      title: 'et porro tempora',
      completed: true
    },
    {
      userId: 1,
      id: 5,
      title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      completed: false
    },
    {
      userId: 1,
      id: 6,
      title: 'qui ullam ratione quibusdam voluptatem quia omnis',
      completed: false
    },
    {
      userId: 1,
      id: 7,
      title: 'illo expedita consequatur quia in',
      completed: false
    },
    {
      userId: 1,
      id: 8,
      title: 'quo adipisci enim quam ut ab',
      completed: true
    },
    {
      userId: 1,
      id: 9,
      title: 'molestiae perspiciatis ipsa',
      completed: false
    },
    {
      userId: 1,
      id: 10,
      title: 'illo est ratione doloremque quia maiores aut',
      completed: true
    }
  ];

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
