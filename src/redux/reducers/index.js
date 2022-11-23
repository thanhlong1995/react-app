import { combineReducers } from 'redux';
import { tabReducer, tabError } from './common/tabReducer';
import { colorThemeReducer } from './common/colorThemeReducer';
import { tourReducer, tourError } from './product/tourReducer';
import { projectReducer, projectError } from './product/projectReducer';
import { productTabsReducer, productTabsError } from './product/productTabReducer';
import { groceryReducer, errorReducer } from './product/groceryReducer';

const reducers = combineReducers({
    tabReducer: tabReducer,
    tabError: tabError,
    colorThemeReducer: colorThemeReducer,
    tourReducer: tourReducer,
    tourError: tourError,
    projectReducer: projectReducer,
    projectError: projectError,
    productTabsReducer: productTabsReducer,
    productTabsError: productTabsError,
    groceryReducer: groceryReducer,
    errorReducer: errorReducer,
});
export default reducers;
