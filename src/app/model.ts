import { createCounter } from "@/shared/factories/create_counter";
import { attachOperation, createQuery } from "@farfetched/core";
import { createEvent, createStore, sample } from "effector";
import { snapshot } from "patronum";

export const $count = createStore(10);

export const incremented = createEvent();

sample({
  clock: incremented,
  source: $count,
  fn: (c) => c + 1,
  target: $count,
});

export const q1 = createQuery({
  handler: async () => "foo",
  name: "query-1",
});

export const q2 = createQuery({
  handler: async () => "foo",
  name: "query-2",
});

export const q3 = attachOperation(q1);

export const $snap1 = snapshot({ source: $count });
export const $snap2 = snapshot({ source: $count });

export const c1 = createCounter({ initialCount: 10 });
export const c2 = createCounter();

console.log($count.sid);
console.log("queries sids: ", q1.$data.sid, q2.$data.sid, q3.$data.sid);
console.log("snapshot sids: ", $snap1.sid, $snap2.sid);
console.log("factory sids: ", c1.$count.sid, c2.$count.sid);
