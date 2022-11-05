import * as request from '~/utils/httpRequest';

export const getAll = async () => {
    try {
        const res = await request.getAll(`user`);
        return res;
    } catch (error) {}
};

export const getByID = async (id) => {
    try {
        const res = await request.getByID(`user/${id}`);
        return res;
    } catch (error) {}
};

export const deleteId = async (id) => {
    try {
        const res = await request.deleteId(`user/${id}`);
        return res;
    } catch (error) {}
};

export const putByID = async (id, params = {}) => {
    const res = await request.putByID(`user/${id}`, params);
    return res;
};
