import { SET_IDLE, SET_LOADING, SET_FAILED } from "./actions";

const INITIAL_STATE: StatusState = { status: 'idle' };

const status = (state: StatusState = INITIAL_STATE, action: reducerAction<any>): StatusState => {
    switch (action.type) {
      case SET_IDLE:
          return { ...state, status: 'idle' };
      case SET_LOADING:
          return { ...state, status: 'loading' };
      case SET_FAILED:
          return { ...state, status: 'failed' };
      default:
          return state;
      }
};

export default status;