import apiInstance from '../axios';

export const all_carts = async (cart_id, user_id) => {
    try {
        const url = user_id ? `cart-lists/${cart_id}/${user_id}` : `cart-lists/${cart_id}/`;
        const { data, status } = await apiInstance.get(url);
        if (status === 200) {
            return { data, error: null };
        } else {
            throw data;
        }
    } catch (err) {
        throw { data: null, error: err.response.data };
    }
};
