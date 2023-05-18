import { createEvent, createStore, sample } from "effector";

export const $count = createStore(10);

export const incremented = createEvent();

sample({
  clock: incremented,
  source: $count,
  fn: (c) => c + 1,
  target: $count,
});

console.log($count.sid);
