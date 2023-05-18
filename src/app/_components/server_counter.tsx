import { EffectorNext } from "@effector/next";
import { allSettled, fork, serialize } from "effector";
import { serverCounter } from "../model";
import { LazyCounter } from "./lazy_counter";

export const ServerCounter = async () => {
  const scope = fork();
  await allSettled(serverCounter.incremented, { scope });
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <EffectorNext values={serialize(scope)}>
      <LazyCounter />
    </EffectorNext>
  );
};
