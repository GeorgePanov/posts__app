import React, { useContext } from 'react';
import { Route, Routes, Navigate } from "react-router-dom"
import { privateRoutes, publicRoutes } from '../router';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext)
    console.log(isAuth);

    if (isLoading) {
        return <Loader />
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} Component={route.component} key={route.path} />
                )}

                <Route path="/" element={<Navigate to='posts' />} />
                <Route path="/login" element={<Navigate to='../posts' />} />
                <Route path="*" element={<Navigate to='error' />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} Component={route.component} key={route.path} />
                )}

                <Route path="*" element={<Navigate to='login' />} />
            </Routes>
    );
};

export default AppRouter;