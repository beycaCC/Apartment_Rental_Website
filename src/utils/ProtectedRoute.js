import React from 'react';
import {Navigate, Routes, Route} from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {

    console.log('isAuthenticated:', isAuthenticated);

    return (
        <Routes>
            <Route
                {...rest}
                element={isAuthenticated ? <Component /> : <Navigate to="/login" replace />}
            />
        </Routes>
    );
};

export default ProtectedRoute;