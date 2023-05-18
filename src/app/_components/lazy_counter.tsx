"use client";

import { useUnit } from "effector-react";
import { counter } from "../model";

export const LazyCounter = () => {
  const { count, increment } = useUnit(counter);

  return (
    <div className="border p-4 bg-white">
      <p>Server Count: {count}</p>
      <button
        onClick={increment}
        className="bg-black text-white rounded-lg text-sm font-bold px-3 py-0.5"
      >
        +++
      </button>
    </div>
  );
};
