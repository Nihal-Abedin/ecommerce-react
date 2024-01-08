import { useState, useEffect } from 'react';
import { setUser } from '../utils/auth';
import { Outlet } from 'react-router-dom';
import Header from './Header';

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
                    <Header />
                    <Outlet />
                    <p>Footer</p>
                </div>
            )}{' '}
        </>
    );
};

export default MainWrapper;
