import request from './http-common';

export const getAll = async (path) => {
    const headers = {
        'Content-type': 'application/json',
    };
    const response = await request.get(path, headers);
    return response.data;
};

export const post = async (path, item) => {
    try {
        const response = await request.post(path, item);
        return response.data;
    } catch (Error) {
        console.log(Error.message);
    }
};

export const getByID = async (id) => {
    const response = await request.get(id);
    return response.data;
};

export const putByID = async (path, params = {}) => {
    try {
        const response = await request.put(path, params);
        return response.data;
    } catch (Error) {
        console.log(Error.message);
    }
};

export const deleteId = async (path) => {
    try {
        const response = await request.delete(path);
        return response.data;
    } catch (Error) {
        console.log(Error.message);
    }
};

export default request;
