import { productTabActionTypes } from '~/redux/constants/product/product-tab-action-types';

export const setTabsProduct = (tabPdoduct) => {
    return {
        type: productTabActionTypes.SET_PRODUCT_TABS,
        payload: tabPdoduct,
    };
};

export const setErrorProduct = (error) => {
    return {
        type: productTabActionTypes.SET_ERROR,
        payload: error,
    };
};
