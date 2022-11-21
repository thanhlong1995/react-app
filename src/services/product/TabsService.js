import * as request from '~/utils/httpRequestProduct';

export const getAll = async () => {
    try {
        const res = await request.getAll(`react-tabs-project`);
        return res;
    } catch (error) {}
};

export const getByID = async (id) => {
    try {
        const res = await request.getByID(`react-tabs-project/${id}`);
        return res;
    } catch (error) {}
};

export const deleteId = async (id) => {
    try {
        const res = await request.deleteId(`react-tabs-project/${id}`);
        return res;
    } catch (error) {}
};

export const putByID = async (id, params = {}) => {
    const res = await request.putByID(`react-tabs-project/${id}`, params);
    return res;
};

export const post = async (item = {}) => {
    const res = await request.post(`react-tabs-project`, item);
    return res;
};
