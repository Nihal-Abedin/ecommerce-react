import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

const is_Dev = import.meta.env.DEV;

export const useAuthStore = create((set, get) => ({
    allUserData: null,
    loading: false,

    user: () => ({
        user_id: get().allUserData?.user_id || null,
        username: get().allUserData?.username || null,
    }),

    setUser: (user) => set({ allUserData: user }),

    setLoading: (loading) => set({ loading }),

    isLoggedIn: () => !!Cookies.get('access_Token'),
}));

if (is_Dev) {
    mountStoreDevtool('Store', useAuthStore);
}
