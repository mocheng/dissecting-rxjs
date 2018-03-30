import createReactiveStore from './createReactiveStore';
import reducer from './Reducer.js';

const initValues = {
  count: 0
};

const store = createReactiveStore(reducer, initValues);

export default store;
