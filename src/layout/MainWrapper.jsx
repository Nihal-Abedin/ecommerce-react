import { useState, useEffect } from 'react';
import { setUser } from '../utils/auth';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

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
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100vh',
                    }}>
                    <Header />
                    <div className='mt-3 h-100'>
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            )}{' '}
        </>
    );
};

export default MainWrapper;
