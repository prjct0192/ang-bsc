import { Component } from '@angular/core';

export interface Post {
  userId?: number
  title: string
  completed: boolean
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
