import { addToCart } from '../../utils/api/products';
import { useMutation } from '@tanstack/react-query';

export const useAddToCart = () => {
    return useMutation({
        mutationFn: (data) => {
            return addToCart(data);
        },
    });
};
