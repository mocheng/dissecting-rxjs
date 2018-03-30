import * as ActionTypes from './ActionTypes.js';

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {...state, count: state.count + 1};
    case ActionTypes.DECREMENT:
      return {...state, count: state.count - 1};
    default:
      return state
  }
};

export default reducer;
