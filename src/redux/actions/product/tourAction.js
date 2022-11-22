import { tourActionTypes } from '~/redux/constants/product/tour-action-types';

export const setTours = (tours) => {
    return {
        type: tourActionTypes.SET_TOURS,
        payload: tours,
    };
};

export const removeTour = (id) => {
    return {
        type: tourActionTypes.REMOVE_TOUR,
        id: id,
    };
};

export const setError = (error) => {
    return {
        type: tourActionTypes.SET_ERROR,
        payload: error,
    };
};
