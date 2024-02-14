export const PRODUCT_KEYS = {
    all: ['products'] as const,
    lists: () => [...PRODUCT_KEYS.all, 'products_lists'] as const,
    list: (slug: string) => [...PRODUCT_KEYS.all, slug] as const,
}

export const CATEGORIES_KEYS = {
    all: ['categories'] as const,
    lists: () => [...CATEGORIES_KEYS.all, 'categories_lists'] as const
}