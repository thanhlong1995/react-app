import { projectActionTypes } from '~/redux/constants/product/project-action-types';

const initial = {
    projects: [],
    error: '',
};

export const projectReducer = (state = initial, { type, payload }) => {
    switch (type) {
        case projectActionTypes.SET_PROJECT:
            return { ...state, projects: payload };

        default:
            return state;
    }
};

export const projectError = (state = '', { type, payload }) => {
    switch (type) {
        case projectActionTypes.SET_ERROR:
            return { ...state, error: payload };

        default:
            return state;
    }
};
