import { tabActionTypes } from '~/redux/constants/product/tab-action-types';

export const setTabs = (tab) => {
    return {
        type: tabActionTypes.SET_TABS,
        payload: tab,
    };
};

export const setError = (error) => {
    return {
        type: tabActionTypes.SET_ERROR,
        payload: error,
    };
};
