# Angular Timer Components

Created this piece of code during one of the interviews. Since it was really interesting task for me personally, I decided to put it into git. I haven't used any information from mentioned interview, except the intent - "let's build timer". Since the execution was done fully by me (even finding online IDE by myself) I put it here.

## Structure

**`main.ts`** - calls all necessary components
**`app-timer-basic`** (`./app/timer.ts`)

```html
<app-timer-basic [userInput]="timeInput"></app-timer-basic>
```

Basic countdown. We pass the input `userInput` (of type number) and the countdown starts. It was the first implementation I did. Unfortunately, it was the only implementation I was able to do during the interview.

> **NOTE:**: during the interview, the interviewer and I decided to use just `setInterval`, since we have no goal to have the exact second passed (reference to how `setInterval` and `setTimeout` works inside the event loop).

**`app-timer-minutes`** (`./app/timer-minutes.ts`)

```html
<app-timer-minutes [userInput]="timeInput2"></app-timer-minutes>
```

More or less real timer. It has minutes and seconds, so the input transforms from `3600` to `60:00`.

**`app-timer-minutes-direction`** (`./app/timer-direction-component.ts`)

```html
<app-timer-minutes-direction [userInput]="timeInput2" [direction]="direction"></app-timer-minutes-direction>
<app-timer-minutes-direction [userInput]="timeInput2"></app-timer-minutes-direction>
```

the latest iteration with `direction` parameter added. Now the user can control in which direction the timer should work: either backwards (so we have a countdown) or forwards (then we just start counting from `0` till the amount specified in user input).

**`constants`** (`./app/constants.ts`)

Has constants. Doesn't make much sense in such small projects, but why not?

**`helpers`** (`./app/helpers.ts`)

Includes a helper function. Not entirely necessary in such a small project, but why not? I might have created it as a service, but opted for a simpler approach here.

## About this repository

This does represent my coding skills to some extent. Since a lot of companies ask for a GitHub link (or some public code piece), I published it. For this exact reason, I haven't changed a lot in the naming here to keep it authentic to the process.
