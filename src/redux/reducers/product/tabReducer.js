import { tabActionTypes } from '~/redux/constants/product/tab-action-types';

const initial = {
    tabs: [],
    error: '',
};

export const tabsReducer = (state = initial, { type, payload }) => {
    switch (type) {
        case tabActionTypes.SET_TABS:
            return {
                ...state,
                tabs: payload,
            };

        default:
            return state;
    }
};

export const tabsError = (state = '', { type, payload }) => {
    switch (type) {
        case tabActionTypes.SET_ERROR:
            return {
                ...state,
                error: payload,
            };

        default:
            return state;
    }
};
