import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';
import { useState } from 'react';

const Dashboard = () => {
    const [isLoggedIn, user] = useAuthStore((state) => [state.isLoggedIn(), state.user()]);

    console.log(isLoggedIn, user);
    return (
        <>
            {isLoggedIn ? (
                <div>
                    <p>Hi gg {user.username}!</p>
                </div>
            ) : (
                <p>HOME</p>
            )}
        </>
    );
};

export default Dashboard;
