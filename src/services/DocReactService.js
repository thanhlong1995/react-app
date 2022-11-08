import * as request from '~/utils/httpRequest';

export const getAll = async () => {
    try {
        const res = await request.getAll(`doc-react`);
        return res;
    } catch (error) {}
};

export const getByID = async (id) => {
    try {
        const res = await request.getByID(`doc-react/${id}`);
        return res;
    } catch (error) {}
};

export const deleteId = async (id) => {
    try {
        const res = await request.deleteId(`doc-react/${id}`);
        return res;
    } catch (error) {}
};

export const putByID = async (id, params = {}) => {
    const res = await request.putByID(`doc-react/${id}`, params);
    return res;
};

export const post = async (item = {}) => {
    const res = await request.post(`item`, item);
    return res;
};
