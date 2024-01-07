import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';
import { useState } from 'react';

const Dashboard = () => {
    const [isLoggedIn, user] = useAuthStore((state) => [state.isLoggedIn(), state.user()]);

    console.log(isLoggedIn, user);
    return <>{isLoggedIn ? <p>Dashboard</p> : <p>HOME</p>}</>;
};

export default Dashboard;
