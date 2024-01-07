import { useState, useEffect } from 'react';
import { setUser } from '../utils/auth';

const MainWrapper = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handler = async () => {
            await setUser();
            setIsLoading(false);
        };

        handler();
    }, []);
    return <>{isLoading ? null : children} </>;
};

export default MainWrapper;
