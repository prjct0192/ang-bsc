import { Component } from '@angular/core';

import {LocalCounterService} from '../Services/local-counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [LocalCounterService]
})
export class CounterComponent {
  constructor(
    private localCounterService: LocalCounterService
  ){}
}
