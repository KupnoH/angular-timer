import { SECONDS_IN_MINUTE } from "./constants";

export function convertUserInputToTime(input: number): string {
  const seconds = input % SECONDS_IN_MINUTE;
  const minutes = Math.trunc(input / SECONDS_IN_MINUTE);
  let additionalSec = '',
    additionalMin = '';

  if (seconds < 10) {
    additionalSec = '0';
  }
  if (minutes < 10) {
    additionalMin = '0';
  }

  return `${additionalMin}${minutes}:${additionalSec}${seconds}`;
}
