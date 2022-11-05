import * as request from '~/utils/httpRequest';

export const getAll = async () => {
    try {
        const res = await request.getAll(`nav-module`);
        return res;
    } catch (error) {}
};

export const getByID = async (id) => {
    try {
        const res = await request.getByID(`nav-module/${id}`);
        return res;
    } catch (error) {}
};

export const deleteId = async (id) => {
    try {
        const res = await request.deleteId(`nav-module/${id}`);
        return res;
    } catch (error) {}
};

export const putByID = async (id, params = {}) => {
    const res = await request.putByID(`nav-module/${id}`, params);
    return res;
};
