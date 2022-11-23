import { groceryActionTypes } from '~/redux/constants/product/grocery-action-types';

export const setGrocery = (grocery) => {
    return {
        type: groceryActionTypes.SET_GROCERY,
        payload: grocery,
    };
};

export const setError = (error) => {
    return {
        type: groceryActionTypes.SET_ERROR,
        payload: error,
    };
};

export const editGrocery = (grocery) => {
    return {
        type: groceryActionTypes.EDIT_GROCERY,
        payload: grocery,
    };
};
