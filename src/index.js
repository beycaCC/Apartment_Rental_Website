
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProtectedRoute from './utils/ProtectedRoute';
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ApartmentsPage from "./pages/ApartmentsPage";
import ContactPage from "./pages/ContactPage";
import PolicyPage from "./pages/PolicyPage";
import LoginPage from "./pages/userAuthorization/LoginPage";
import SignupPage from "./pages/userAuthorization/SignupPage";
import UserDashboard from "./pages/userAuthorization/UserDashboard";
import SavesPage from "./pages/userAuthorization/Saves";
import AnalyticsPage from "./pages/userAuthorization/Analytics";
import {
    createBrowserRouter,
    RouterProvider, Routes,
} from "react-router-dom";
import SideBar from "./components/SideBar";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/blog",
        element: <BlogPage/>,
    },
    {
        path: "/apartments",
        element: <ApartmentsPage/>,
    },
    {
        path: "/contact",
        element: <ContactPage/>,
    },
    {
        path: "/policy",
        element: <PolicyPage/>,
    },
    {
        path: "/login",
        element: <LoginPage/>,
    },
    {
        path: "/signup",
        element: <SignupPage/>,
    },
    {
        path: "/user-dashboard/*",
        element:
            <UserDashboard/>,
            // (
            // <ProtectedRoute
            //     component={UserDashboard}
            //     isAuthenticated={!!localStorage.getItem('token')}
            // />),
    },
    {
        path: "/user-dashboard/saves",
        element: <SavesPage/>
    },
    {
        path: "/user-dashboard/analytics",
        element: <AnalyticsPage/>
    }
]);



ReactDOM.render(
    <RouterProvider router={router}>
        <Routes>
            {router}
        </Routes>
    </RouterProvider>,
    document.getElementById('root')
);