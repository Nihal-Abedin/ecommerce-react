import { useQuery } from '@tanstack/react-query';
import { CATEGORIES_KEYS } from '../queryKeys';
import { all_categories } from '../../utils/api/categories';
export const useCategoriesList = () => {
    return useQuery({
        queryKey: CATEGORIES_KEYS.lists(),
        queryFn: all_categories,
    });
};
