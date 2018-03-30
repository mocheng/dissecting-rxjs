import {createStore} from 'redux';
import reducer from './Reducer.js';

const initValues = {
  count: 0
};
const store = createStore(reducer, initValues);

export default store;
