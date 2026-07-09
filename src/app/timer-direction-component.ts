import {
  Component,
  computed,
  effect,
  input,
  OnDestroy,
  signal,
} from '@angular/core';
import { DIRECTION } from './constants';
import { convertUserInputToTime } from './helpers';

@Component({
  selector: 'app-timer-minutes-direction',
  template: ` | {{ time() }}`,
})
export class TimerDirectionComponent implements OnDestroy {
  userInput = input.required<number>();
  direction = input<DIRECTION>(DIRECTION.BACKWARD);
  current = signal(0);

  time = computed(() => {
    const newTime =
      this.direction() === DIRECTION.BACKWARD
        ? this.userInput() - this.current()
        : this.current();

    return convertUserInputToTime(newTime);
  });

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
