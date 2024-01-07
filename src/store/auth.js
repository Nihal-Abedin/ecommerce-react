import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import Cookies from 'js-cookie';

const is_Dev = import.meta.env.DEV;

export const useAuthStore = create((set, get) => ({
    allUserData: null,
    loading: false,

    user: () => {
        const user = Cookies.get('user');

        if (!user) {
            return {
                user_id: null,
                username: null,
            };
        }
        const userJson = JSON.parse(user);
        return {
            user_id: get().allUserData?.user_id || userJson.user_id,
            username: get().allUserData?.username || userJson.username,
        };
    },

    setUser: (user) => set({ allUserData: user }),

    setLoading: (loading) => set({ loading }),

    isLoggedIn: () => !!Cookies.get('access_Token'),
}));

if (is_Dev) {
    mountStoreDevtool('Store', useAuthStore);
}
