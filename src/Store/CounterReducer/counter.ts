import { INCREMENT_COUNT, DECREMENT_COUNT, INCREMENT_COUNT_BY_AMOUNT } from "./actions";

const INITIAL_STATE: CounterState = { value: 0 };

const counter = (state: CounterState = INITIAL_STATE, action: reducerAction<any>): CounterState => {
    switch (action.type) {
      case INCREMENT_COUNT:
          return { ...state, value: state.value+=1 };
      case DECREMENT_COUNT:
          return { ...state, value: state.value-=1 };
      case INCREMENT_COUNT_BY_AMOUNT:
          return { ...state, value: state.value + action.payload };
      default:
          return state;
      }
};

export default counter;