import apiInstance from '../axios';

export const all_products = async () => {
    try {
        const { data, status } = await apiInstance.get('products/');
        if (status === 200) {
            return { data, error: null };
        } else {
            throw data;
        }
    } catch (err) {
        throw { data: null, error: err.response.data };
    }
};
export const productDetails = async (slug) => {
    try {
        const { data, status } = await apiInstance.get(`products/${slug}`);
        if (status === 200) {
            return { data, error: null };
        } else {
            throw data;
        }
    } catch (err) {
        throw { data: null, error: err.response.data };
    }
};
