import React, { useEffect } from "react";
import { useSelector, useStore } from "react-redux";

import Counter from "./Counter";
import Todo from "./Todo";

function App() {
  const count = useSelector(state => state.counter.count);
  const items = useSelector(state => state.todos.items);
  const stores = useStore();
  useEffect(() => {
    console.log(stores.getState());
  });
  return (
    <>
      <h3>Resume</h3>
      <div>Count Todos: {items.length}</div>
      <div>Count (Increment/Decrement/Change): {count}</div>
      <hr />
      <Counter />
      <Todo />
    </>
  );
}

export default App;
