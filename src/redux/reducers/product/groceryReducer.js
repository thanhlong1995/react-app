import { groceryActionTypes } from '~/redux/constants/product/grocery-action-types';

const initial = {
    grocerys: [],
    error: '',
};

export const groceryReducer = (state = initial, { type, payload }) => {
    switch (type) {
        case groceryActionTypes.SET_GROCERY:
            return {
                ...state,
                grocerys: payload,
            };

        default:
            return state;
    }
};
export const errorReducer = (state = initial, { type, payload }) => {
    switch (type) {
        case groceryActionTypes.SET_ERROR:
            return {
                error: payload,
            };

        default:
            return state;
    }
};
