import React from 'react';
import {
    FaHome,
    FaCog,
    FaSignOutAlt,
} from 'react-icons/fa';

import { AiOutlineHeart } from 'react-icons/ai';

import { IoAnalyticsSharp } from 'react-icons/io5';


export const SidebarData = [
    {
        title: "Dashboard",
        icon: <FaHome />,
        link: "/user-dashboard"
    },
    {
        title: "Saves",
        icon: <AiOutlineHeart />,
        link: "/user-dashboard/saves"
    },
    {
        title: "Analytics",
        icon: <IoAnalyticsSharp />,
        link: "/user-dashboard/analytics"
    },
    {
        title: "Setting",
        icon: <FaCog />,
        link: "/user-dashboard/setting"
    }
]