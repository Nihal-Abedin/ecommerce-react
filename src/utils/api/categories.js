import apiInstance from '../axios';

export const all_categories = async () => {
    try {
        const { data, status } = await apiInstance.get('category/');
        if (status === 200) {
            return { data, error: null };
        } else {
            throw data;
        }
    } catch (err) {
        throw { data: null, error: err.response.data };
    }
};
