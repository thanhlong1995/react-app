import * as request from '~/utils/httpRequestProduct';

export const getAll = async () => {
    try {
        const res = await request.getAll(`react-tours-project`);
        return res;
    } catch (error) {}
};

export const getByID = async (id) => {
    try {
        const res = await request.getByID(`react-tours-project/${id}`);
        return res;
    } catch (error) {}
};

export const deleteId = async (id) => {
    try {
        const res = await request.deleteId(`react-tours-project/${id}`);
        return res;
    } catch (error) {}
};

export const putByID = async (id, params = {}) => {
    const res = await request.putByID(`react-tours-project/${id}`, params);
    return res;
};

export const post = async (item = {}) => {
    const res = await request.post(`react-tours-project`, item);
    return res;
};
