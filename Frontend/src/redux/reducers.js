import history from '../utils/history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router/immutable';
import alertReducer from './reducers/alertReducer';

export default function createReducer() {
  const rootReducer = combineReducers({
    alert: alertReducer,

    router: connectRouter(history)

    // advencedAlertReducer
  });

  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
