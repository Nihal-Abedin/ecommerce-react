export const PRODUCT_KEYS = {
    all: ['products'] as const,
    lists: () => [...PRODUCT_KEYS.all, 'products_lists'] as const,
    // list:()
}

export const CATEGORIES_KEYS = {
    all: ['categories'] as const,
    lists: () => [...CATEGORIES_KEYS.all, 'categories_lists'] as const
}