import axios from 'axios';
import { getRefreshToken, isAccessTokenExpired, setAuthUser } from './auth';
import { BASE_URL } from './constants';
import Cookies from 'js-cookie';

export const useAxios = async () => {
    const access_Token = Cookies.get('access_Token');
    const refresh_Token = Cookies.get('refresh_Token');

    const axios_instance = axios.create({
        baseURL: BASE_URL,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${access_Token}`,
        },
    });

    axios_instance.interceptors.request.use(async (req) => {
        if (!isAccessTokenExpired(access_Token)) {
            return req;
        }
        const res = await getRefreshToken(refresh_Token);
        setAuthUser(res.access, res.refresh);

        req.headers.Authorization = `Bearer ${res.access}`;
        return req;
    });

    return axios_instance;
};
