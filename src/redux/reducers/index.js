import { combineReducers } from 'redux';
import { tabReducer, tabError } from './tabReducer';
import { colorThemeReducer } from './colorThemeReducer';
const reducers = combineReducers({
    tabReducer: tabReducer,
    tabError: tabError,
    colorThemeReducer: colorThemeReducer,
});
export default reducers;
