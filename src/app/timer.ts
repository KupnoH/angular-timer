import {
  Component,
  computed,
  effect,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-timer-basic',
  template: ` {{ time() }} `,
})
export class BasicTimerComponent {
  time = computed(() => {
    return this.userInput() - this.current();
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
