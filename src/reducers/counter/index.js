import COUNTER from "./constants";
import produce from "immer";

const initialState = {
  count: 0
};

/*
function reducerCounter(state = initialState, action) {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case COUNTER.INCREMENT:
      return { count: state.count + 1 };
    default:
      return state;
  }
}*/

const reducerCounter = produce((draft, action) => {
  switch (action.type) {
    case COUNTER.INCREMENT: {
      draft.count++;
      break;
    }
    case COUNTER.DECREMENT: {
      draft.count--;
      break;
    }
    case COUNTER.CHANGEVALUE: {
      draft.count = parseInt(action.payload.value);
      break;
    }
    default:
      break;
  }
}, initialState);

export default reducerCounter;
