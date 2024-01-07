import { useAuthStore } from '../store/auth';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import apiInstance from './axios';

export const login = async (email, password) => {
    try {
        const { data, status } = await apiInstance.post('user/token/', {
            email,
            password,
        });
        console.log(data);
        if (status === 200) {
            const loginuser = jwtDecode(data.access);
            const cookieData = {
                user_id: loginuser.user_id,
                full_name: loginuser.full_name,
                email: loginuser.email,
                username: loginuser.username,
                vendor_id: loginuser.vendor_id,
            };
            Cookies.set('user', JSON.stringify(cookieData));
            useAuthStore.getState().setUser(cookieData);
            setAuthUser(data.access, data.refresh);

            // ALERT LOGGED IN SUCCESS
        }

        return { data, error: null };
    } catch (err) {
        return { data: null, error: err.response.data?.details || 'Something went wrong!' };
    }
};

export const register = async (full_name, email, phone, password, confirm_password) => {
    try {
        const { data, status } = await apiInstance.post('user/register/', {
            full_name,
            email,
            password,
            confirm_password,
            phone,
        });

        if (status === 201) {
            await login(email, password);
            // ALERT SIGNED UP SUCCESS
        }

        return { data, error: null };
    } catch (err) {
        return { data: null, error: err.response.data?.details || 'Something went wrong!' };
    }
};

/***
 * Remove The Token
 * Set the User Store to Null as not_logged_in
 */
export const logout = () => {
    Cookies.remove('access_Token');
    Cookies.remove('refresh_Token');

    useAuthStore.getState().setUser(null);

    // ALERT SIGNED OUT SUCCESS
};

/***
 * Getting The Tokens
 * Check if it exists
 * Check if access_Token is valid
 *  * If not getRefreshToken(refresh_Token)
 *  * Setting up the new access_Token & refresf TOken
 *  * IF Valid Set The Token as it was
 *
 */
export const setUser = async () => {
    const access_Token = Cookies.get('access_Token');
    const refresh_Token = Cookies.get('refresh_Token');

    if (!access_Token || !refresh_Token) {
        return;
    }

    if (isAccessTokenExpired(access_Token)) {
        const response = await getRefreshToken();

        setAuthUser(response.access, response.refresh);
    } else {
        setAuthUser(access_Token, refresh_Token);
    }
};

/***
 * @param access_Token Access TOken
 * @param refresh_Token Refresh Token
 * Setting Up The Tokens
 * DECODE the access_Token for user INFOS
 * SET User Store with the decoded Value
 * SET loadind Store with the false
 */
export const setAuthUser = (access_Token, refresh_Token) => {
    Cookies.set('access_Token', access_Token, { expires: 1, secure: true });
    Cookies.set('refresh_Token', refresh_Token, { expires: 7, secure: true });

    const user = jwtDecode(access_Token);

    if (user) {
        useAuthStore.getState().setUser(user);
    }

    useAuthStore.getState().setLoading(false);
};

/**
 *
 * @returns access_Token as access, refresh_Token as refresh
 */
export const getRefreshToken = async () => {
    const refresh_Token = Cookies.get('refresh_Token');

    const res = await apiInstance.post('user/token/refresh', { refresh: refresh_Token });

    return res.data;
};

/**
 *
 * @param {"access_Token"} access_Token
 * @returns true if expired
 * @returns false if not expired
 */
export const isAccessTokenExpired = async (access_Token) => {
    try {
        const decodedToken = jwtDecode(access_Token);
        return decodedToken.exp < Date.now() / 100;
    } catch (err) {
        console.log(err);
        return true;
    }
};
