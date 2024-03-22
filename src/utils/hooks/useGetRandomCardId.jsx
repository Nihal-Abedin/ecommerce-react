export const useGetRandomCartId = () => {
    // using this cartId if user is not logeged in! to manage the cart and order
    const generateCartId = () => {
        const maxlength = 30;
        const possibleChars = 'ABCDEFGHIJKLabcdefgh12345678';
        let cartId = '';

        for (let i = 0; i <= maxlength; i++) {
            const charIndex = Math.floor(Math.random() * possibleChars.length);
            cartId += possibleChars.charAt(charIndex);
        }

        localStorage.setItem('CartId', cartId);
    };

    const existingCartId = localStorage.getItem('CartId');

    if (!existingCartId) {
        generateCartId();
    }

    return existingCartId;
};
