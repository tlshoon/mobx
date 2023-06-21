import React from "react";
import counterStore from "../store/CounterStore";
import { observer } from "mobx-react-lite";

const Counter = observer(() => {
  return (
    <>
      <div>{counterStore.number}</div>
      <button onClick={() => counterStore.increment()}>+</button>
      <button onClick={() => counterStore.decrement()}>-</button>
    </>
  );
});
export default Counter;
