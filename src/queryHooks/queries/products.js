import { useQuery } from '@tanstack/react-query';
import { PRODUCT_KEYS } from '../queryKeys';
import { all_products, productDetails } from '../../utils/api/products';
export const useProducts = () => {
    return useQuery({
        queryKey: PRODUCT_KEYS.lists(),
        queryFn: all_products,
    });
};
export function useProduct(slug) {
    return useQuery({
        queryKey: PRODUCT_KEYS.list(slug),
        queryFn: productDetails.bind(this, slug),
    });
}
