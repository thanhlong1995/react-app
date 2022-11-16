import RequestProduct from './http-product';

export const getAll = async (path) => {
    const headers = {
        'Content-type': 'application/json',
    };
    const response = await RequestProduct.get(path, headers);
    return response.data;
};

export const post = async (path, item) => {
    try {
        const response = await RequestProduct.post(path, item);
        return response.data;
    } catch (Error) {
        console.log(Error.message);
    }
};

export const getByID = async (id) => {
    const response = await RequestProduct.get(id);
    return response.data;
};

export const putByID = async (path, params = {}) => {
    try {
        const response = await RequestProduct.put(path, params);
        return response.data;
    } catch (Error) {
        console.log(Error.message);
    }
};

export const deleteId = async (path) => {
    try {
        const response = await RequestProduct.delete(path);
        return response.data;
    } catch (Error) {
        console.log(Error.message);
    }
};

export default RequestProduct;
