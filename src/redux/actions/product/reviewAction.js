import { reviewActionTypes } from '~/redux/constants/product/review-action-types';

export const setReview = (reviews) => {
    console.log('setReview = ' + reviews);
    return {
        type: reviewActionTypes.SET_REVIEWS,
        payload: reviews,
    };
};

export const setError = (error) => {
    return {
        type: reviewActionTypes.SET_ERROR,
        payload: error,
    };
};
