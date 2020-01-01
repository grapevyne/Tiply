import { combineReducers } from 'redux';
import overallReducer from './overallReducer';

const reducers = combineReducers({
  people: overallReducer,
});

export default reducers;
