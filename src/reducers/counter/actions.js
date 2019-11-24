import COUNTER from "./constants";

const CounterIncrementAction = () => {
  return { type: COUNTER.INCREMENT };
};

const CounterDecrementAction = () => {
  return { type: COUNTER.DECREMENT };
};

const CounterChangeValueAction = value => {
  return { type: COUNTER.CHANGEVALUE, payload: { value } };
};

export {
  CounterIncrementAction,
  CounterDecrementAction,
  CounterChangeValueAction
};
