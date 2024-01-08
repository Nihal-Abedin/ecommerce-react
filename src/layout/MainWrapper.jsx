import { useState, useEffect } from 'react';
import { setUser } from '../utils/auth';
import { Outlet } from 'react-router-dom';

const MainWrapper = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handler = async () => {
            await setUser();
            setIsLoading(false);
        };

        handler();
    }, []);
    return (
        <>
            {isLoading ? (
                'Loading...'
            ) : (
                <div>
                    <p>Header</p>
                    <Outlet />
                    <p>Footer</p>
                </div>
            )}{' '}
        </>
    );
};

export default MainWrapper;
