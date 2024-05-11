import { useMutation } from '@tanstack/react-query';
import { cart_delete } from '../../utils/api/cart';

export const useCartDelete = () => {
    return useMutation({
        mutationFn: ({item_id, cart_id, user_id = null}) => {
            return cart_delete(item_id, cart_id, user_id);
        },
    });
};
