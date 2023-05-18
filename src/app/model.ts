import { createCounter } from "@/shared/factories/create_counter";
import { createQuery } from "@farfetched/core";
import { zodContract } from "@farfetched/zod";
import {
  attach,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { z } from "zod";

export const $count = createStore(10);

export const incremented = createEvent();

sample({
  clock: incremented,
  source: $count,
  fn: (c) => c + 1,
  target: $count,
});

const baseFx = createEffect(async () => {
  await new Promise((r) => setTimeout(r, 500));
  return "foo-base";
});

const attachedFx = attach({
  source: $count,
  effect: async (count) => {
    await new Promise((r) => setTimeout(r, 500));
    return "foo-" + count;
  },
});

/**
 * Если передать эффект инлайново, то баг исчезает
 */
export const someQuery = createQuery({
  effect: attachedFx,
  contract: zodContract(z.string()),
});

export const counter = createCounter({ initialCount: 10 });
