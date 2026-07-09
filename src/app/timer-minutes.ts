import {
  Component,
  computed,
  effect,
  input,
  OnDestroy,
  signal,
} from '@angular/core';
import { convertUserInputToTime } from './helpers';

@Component({
  selector: 'app-timer-minutes',
  template: ` | {{ time() }} `,
})
export class TimerMinutesComponent implements OnDestroy {
  time = computed(() => {
    const newTime = this.userInput() - this.current();
    const timerTime = convertUserInputToTime(newTime);
    return timerTime;
  });
  current = signal(0);
  userInput = input.required<number>();

  timerEffect = effect(() => {
    if (this.current() === this.userInput()) {
      clearInterval(this.timer);
    }
  });

  timer = setInterval(() => {
    this.current.update((value) => ++value);
  }, 1000);

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
