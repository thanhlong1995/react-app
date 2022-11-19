import { reviewActionTypes } from '~/redux/constants/product/review-action-types';

const initial = {
    reviews: [],
    error: '',
};

export const reviewReducer = (state = initial, { type, payload }) => {
    console.log('payload = ' + payload);
    switch (type) {
        case reviewActionTypes.SET_REVIEWS:
            return {
                ...state,
                reviews: payload,
            };

        default:
            return state;
    }
};

export const reviewError = (state = '', { type, payload }) => {
    switch (type) {
        case reviewActionTypes.SET_ERROR:
            return {
                ...state,
                error: payload,
            };

        default:
            return state;
    }
};
