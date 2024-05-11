import { useQuery } from '@tanstack/react-query';
import { all_carts, cart_detail } from '../../utils/api/cart';
import { CART_KEYS } from '../queryKeys';
export const useCartList = (cart_id, user_id = null) => {
    return useQuery({
        queryKey: CART_KEYS.lists(),
        queryFn: () => all_carts(cart_id, user_id),
    });
};
export const useCartDetail = (cart_id, user_id = null) => {
    return useQuery({
        queryKey: CART_KEYS.details(),
        queryFn: () => cart_detail(cart_id, user_id),
    });
};
