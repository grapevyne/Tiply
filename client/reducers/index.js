import { combineReducers } from 'redux';
import tipsReducer from './tipsReducer';
import overallReducer from './overallReducer';

const reducers = combineReducers({
  people: overallReducer,
  tips: tipsReducer,
});

export default reducers;
