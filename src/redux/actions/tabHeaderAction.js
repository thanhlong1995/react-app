import { TabActionTypes } from '../constants/tab-action-types';

export const setTabs = (tabs) => {
    return {
        type: TabActionTypes.SET_TABS,
        payload: tabs,
    };
};

export const selectedTab = (tab) => {
    return {
        type: TabActionTypes.SELECTED_TAB_ITEM,
        payload: tab,
    };
};

export const removeSelectedTab = () => {
    return {
        type: TabActionTypes.REMOVE_SELECTED_TAB_ITEM,
    };
};

export const setError = (error) => {
    return {
        type: TabActionTypes.SET_ERROR,
        payload: error,
    };
};
