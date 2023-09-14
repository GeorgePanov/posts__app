import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom"
import { privateRoutes, publicRoutes } from '../router';

const AppRouter = () => {
    const isAuth = true

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} Component={route.component} />
                )}

                <Route path="/" element={<Navigate to='posts' />} />
                <Route path="*" element={<Navigate to='error' />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} Component={route.component} />
                )}

                <Route path="*" element={<Navigate to='login' />} />
            </Routes>
    );
};

export default AppRouter;