import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BasicTimerComponent } from './app/timer';
import { TimerMinutesComponent } from './app/timer-minutes';
import { TimerDirectionComponent } from './app/timer-direction-component';
import { DIRECTION } from './app/constants';

@Component({
  imports: [
    BasicTimerComponent,
    TimerMinutesComponent,
    TimerDirectionComponent,
  ],
  selector: 'app-root',
  template: `
    Hello world!
    <app-timer-basic [userInput]="timeInput"></app-timer-basic>
    <app-timer-minutes [userInput]="timeInput2"></app-timer-minutes>
    <app-timer-minutes-direction [userInput]="timeInput3" [direction]="direction"></app-timer-minutes-direction>
    <app-timer-minutes-direction [userInput]="timeInput3"></app-timer-minutes-direction>
  `,
})
export class Playground {
  timeInput: number = 15;
  timeInput2: number = 1000;
  timeInput3: number = 75;
  direction = DIRECTION.FORWARD;
}

bootstrapApplication(Playground);
