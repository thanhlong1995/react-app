import { tourActionTypes } from '~/redux/constants/product/tour-action-types';

const initial = {
    tours: [],
    error: '',
};
export const tourReducer = (state = initial, { type, payload }) => {
    switch (type) {
        case tourActionTypes.SET_TOURS:
            return { ...state, tours: payload };
        default:
            return state;
    }
};

export const tourError = (state = '', { type, payload }) => {
    switch (type) {
        case tourActionTypes.SET_ERROR:
            return { error: payload };
        default:
            return state;
    }
};
