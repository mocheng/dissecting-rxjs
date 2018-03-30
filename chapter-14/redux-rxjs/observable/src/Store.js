import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import reducer from './Reducer';
import epic from './Epic';

const epicMiddleware = createEpicMiddleware(epic);

const initValues = {
  count: 0
};
const store = createStore(
  reducer,
  initValues,
  applyMiddleware(epicMiddleware)
);

export default store;
