import { combineReducers } from 'redux';
import { tabReducer, tabError } from './common/tabReducer';
import { colorThemeReducer } from './common/colorThemeReducer';
import { tourReducer, tourError, deleteTour } from './product/tourReducer';
import { projectReducer, projectError } from './product/projectReducer';
const reducers = combineReducers({
    tabReducer: tabReducer,
    tabError: tabError,
    colorThemeReducer: colorThemeReducer,
    tourReducer: tourReducer,
    tourError: tourError,
    deleteTour: deleteTour,
    projectReducer: projectReducer,
    projectError: projectError,
});
export default reducers;
