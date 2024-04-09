import { useQuery } from '@tanstack/react-query';
import { all_categories } from '../../utils/api/categories';
import { all_carts } from '../../utils/api/cart';
import { CART_KEYS } from '../queryKeys';
export const useCartList = (cart_id, user_id=null) => {
    return useQuery({
        queryKey: CART_KEYS.lists,
        queryFn: () => all_carts(cart_id, user_id),
    });
};
