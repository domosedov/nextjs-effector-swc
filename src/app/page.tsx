import { EffectorNext } from "@effector/next";
import { allSettled, fork, serialize } from "effector";
import { Suspense } from "react";
import { Counter } from "./_components/counter";
import { ServerCounter } from "./_components/server_counter";
import { someQuery } from "./model";

export default async function Home() {
  const scope = fork();
  await allSettled(someQuery.refresh, { scope });
  const values = serialize(scope);

  return (
    <EffectorNext values={values}>
      <div className="bg-orange-100 min-h-screen flex items-center flex-col">
        <h1 className="text-orange-400 text-center text-2xl pt-10 font-bold">
          SWC Plugin
        </h1>
        <Counter />
        <Suspense fallback={<div>Loading server counter...</div>}>
          {/* @ts-expect-error: RSC */}
          <ServerCounter />
        </Suspense>
      </div>
    </EffectorNext>
  );
}
