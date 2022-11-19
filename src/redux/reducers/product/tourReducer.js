import { TourActionTypes } from '~/redux/constants/product/tour-action-types';

const initial = {
    tours: [],
    error: '',
};
export const tourReducer = (state = initial, { type, payload }) => {
    switch (type) {
        case TourActionTypes.SET_TOURS:
            return { ...state, tours: payload };
        default:
            return state;
    }
};

export const tourError = (state = '', { type, payload }) => {
    switch (type) {
        case TourActionTypes.SET_ERROR:
            return { error: payload };
        default:
            return state;
    }
};

export const deleteTour = (state = initial, { type, id }) => {
    console.log('deleteTour = ' + id);
    const tourId = id;
    switch (type) {
        case TourActionTypes.REMOVE_TOUR:
            return {
                ...state,
                state: state.tours.filter((tour) => tour.id !== tourId),
            };
        default:
            return state;
    }
};
