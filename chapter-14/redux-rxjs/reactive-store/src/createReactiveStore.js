import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/do';

const createReactiveStore = (reducer, initialState) => {
  const action$ = new Subject();
  let currentState = initialState;

  const store$ = action$.startWith(initialState).scan(reducer).do(state => {
    currentState = state
  });

  return {
    dispatch: (action) => {
      return action$.next(action)
    },
    getState: () => currentState,
    subscribe: (func) => {
      store$.subscribe(func);
    }
  }
}

export default createReactiveStore;
