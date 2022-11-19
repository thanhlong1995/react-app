import { TabActionTypes } from '../../constants/common/tab-action-types';
const intialState = {
    tabs: [],
    error: '',
};

export const tabReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case TabActionTypes.SET_TABS:
            return { ...state, tabs: payload };
        default:
            return state;
    }
};

export const selectedTabReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case TabActionTypes.SELECTED_TAB_ITEM:
            return { ...state, ...payload };
        case TabActionTypes.REMOVE_SELECTED_TAB_ITEM:
            return {};
        default:
            return state;
    }
};

export const tabError = (state = '', { type, payload }) => {
    switch (type) {
        case TabActionTypes.SET_ERROR:
            return { error: payload };
        default:
            return state;
    }
};
