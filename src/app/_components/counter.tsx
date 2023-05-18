"use client";

import { useUnit } from "effector-react";
import { counter, someQuery } from "../model";

export function Counter() {
  const { count, increment } = useUnit(counter);
  const { data, error } = useUnit(someQuery);
  return (
    <div className="flex mt-4 items-center gap-x-4">
      <p className="text-center">Count: {count}</p>

      <button
        onClick={increment}
        className="px-4 py-1 rounded bg-orange-500 text-white text-sm"
      >
        +
      </button>
      {error && "message" in error && <div>{error.message}</div>}
      {data && <pre>{JSON.stringify(data)}</pre>}
    </div>
  );
}
