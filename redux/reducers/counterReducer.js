import { DECREMENT, INCREMENT } from '../action/counterAction';

const intialState = {
  value: 0,
};

const counterReducer = (state = intialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
      break;
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
      break;
    default:
      return {
        ...state,
      };
  }
};

export default counterReducer;
