import { combineReducers } from 'redux';
import tipsReducer from './tipsReducer';

const reducers = combineReducers({
  tips: tipsReducer,
});

export default reducers;
