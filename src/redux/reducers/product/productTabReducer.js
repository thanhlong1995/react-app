import { productTabActionTypes } from '~/redux/constants/product/product-tab-action-types';

const initial = {
    tabProduct: [],
    error: '',
};

export const productTabsReducer = (state = initial, { type, payload }) => {
    switch (type) {
        case productTabActionTypes.SET_PRODUCT_TABS:
            return {
                ...state,
                tabProduct: payload,
            };

        default:
            return state;
    }
};

export const productTabsError = (state = '', { type, payload }) => {
    switch (type) {
        case productTabActionTypes.SET_ERROR:
            return {
                ...state,
                error: payload,
            };

        default:
            return state;
    }
};
