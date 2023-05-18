import { createEvent, createStore, sample } from "effector";

type Config = {
  initialCount?: number;
};

export const createCounter = (config?: Config) => {
  const { initialCount = 0 } = config ?? {};

  const $count = createStore(initialCount);

  const incremented = createEvent();

  sample({
    clock: incremented,
    source: $count,
    fn: (c) => c + 1,
    target: $count,
  });

  return {
    "@@unitShape": () => ({
      count: $count,
      increment: incremented,
    }),
    $count,
    incremented,
  };
};
