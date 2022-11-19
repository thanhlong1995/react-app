import { TourActionTypes } from '~/redux/constants/product/tour-action-types';

export const setTours = (tours) => {
    return {
        type: TourActionTypes.SET_TOURS,
        payload: tours,
    };
};

export const removeTour = (id) => {
    return {
        type: TourActionTypes.REMOVE_TOUR,
        id: id,
    };
};

export const setError = (error) => {
    return {
        type: TourActionTypes.SET_ERROR,
        payload: error,
    };
};
