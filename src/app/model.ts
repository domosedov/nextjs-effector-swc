import { createCounter } from "@/shared/factories/create_counter";
import { createQuery } from "@farfetched/core";
import { zodContract } from "@farfetched/zod";
import { attach } from "effector";
import { z } from "zod";

export const counter = createCounter({ initialCount: 0 });
export const serverCounter = createCounter({ initialCount: 10 });

const attachedFx = attach({
  source: counter.$count,
  effect: async (count) => {
    await new Promise((r) => setTimeout(r, 500));
    return "foo-" + count;
  },
});

/**
 *  - Если передать эффект инлайново, то баг исчезает
 *
 *  - Баг исчезает при добавлении @farfetched/zod в factories в настройках плагина в next.config.js
 */
export const someQuery = createQuery({
  effect: attachedFx,
  contract: zodContract(z.string()),
});
