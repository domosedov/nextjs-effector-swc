"use client";

import { useUnit } from "effector-react";
import { $count, incremented } from "./model";

export default function Home() {
  const [count, inc] = useUnit([$count, incremented]);
  return (
    <div className="bg-orange-100 min-h-screen flex items-center flex-col">
      <h1 className="text-orange-400 text-center text-2xl pt-10 font-bold">
        SWC Plugin
      </h1>
      <div className="flex mt-4 items-center gap-x-4">
        <p className="text-center">Count: {count}</p>
        <button
          onClick={inc}
          className="px-4 py-1 rounded bg-orange-500 text-white text-sm"
        >
          +
        </button>
      </div>
    </div>
  );
}
