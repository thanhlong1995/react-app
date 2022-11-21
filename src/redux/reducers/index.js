import { combineReducers } from 'redux';
import { tabReducer, tabError } from './common/tabReducer';
import { colorThemeReducer } from './common/colorThemeReducer';
import { tourReducer, tourError } from './product/tourReducer';
import { projectReducer, projectError } from './product/projectReducer';
import { tabsReducer, tabsError } from './product/tabReducer';

const reducers = combineReducers({
    tabReducer: tabReducer,
    tabError: tabError,
    colorThemeReducer: colorThemeReducer,
    tourReducer: tourReducer,
    tourError: tourError,
    projectReducer: projectReducer,
    projectError: projectError,
    tabsReducer: tabsReducer,
    tabsError: tabsError,
});
export default reducers;
