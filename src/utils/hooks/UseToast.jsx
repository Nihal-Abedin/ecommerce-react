import Swal from 'sweetalert2';
export const useToast = () => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        showCloseButton: true,
        timer: 1500,
        timerProgressBar: true,
        width:'fit-content'
    });
    return toast;
};
