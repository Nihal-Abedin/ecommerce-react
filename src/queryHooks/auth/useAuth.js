import { useMutation } from '@tanstack/react-query';
import { login, register } from '../../utils/auth';

export const useLogin = () => {
    return useMutation({ mutationFn: login });
};
export const useRegisTration = () => {
    return useMutation({ mutationFn: register });
};
