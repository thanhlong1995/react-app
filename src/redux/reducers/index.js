import { combineReducers } from 'redux';
import { tabReducer, tabError } from './tabReducer';
const reducers = combineReducers({
    tabReducer: tabReducer,
    tabError: tabError,
});
export default reducers;
