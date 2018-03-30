import {increment, decrement} from './Actions';
import * as ActionTypes from './ActionTypes';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

const epic = (action$, store) => {
  return action$
    .filter(
      action => (action.type === ActionTypes.DECREMENT ||
        action.type === ActionTypes.INCREMENT)
    )
    .delay(1000)
    .map(action => {
      const count = store.getState().count;
      if (count> 0) {
        return decrement()
      } else if (count < 0){
        return increment()
      } else {
        return {type: 'no-op'};
      }
    });
};

export default epic;
