import { useQuery } from '@tanstack/react-query';
import { PRODUCT_KEYS } from '../queryKeys';
import { all_products } from '../../utils/api/products';
export const useProducts = () => {
    return useQuery({
        queryKey: PRODUCT_KEYS.lists(),
        queryFn: all_products,
    });
};
