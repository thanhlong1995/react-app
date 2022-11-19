import { projectActionTypes } from '~/redux/constants/product/project-action-types';

export const setProject = (projects) => {
    return {
        type: projectActionTypes.SET_PROJECT,
        payload: projects,
    };
};

export const setError = (error) => {
    return {
        type: projectActionTypes.SET_ERROR,
        payload: error,
    };
};
