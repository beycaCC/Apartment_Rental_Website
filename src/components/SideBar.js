import React from 'react';
import { useState } from "react";
import {SidebarData} from "./SidebarData";
import userIcon from "../img_src/user_icon.png";
import {useLocation} from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import {
    FaSignOutAlt,
} from 'react-icons/fa';
import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080',
})

function SideBar() {

    const location=useLocation();
    // console.log(location);

    const userEmail = location.state?.email || '';
    console.log(userEmail);

    // Handle User Registration submit
    const [logoutStatus, setLogoutStatus] = useState('');
    const handelLogout = async() => {

        try {
            const response = await api.post('/logout');

            if (response.data.message === 'Logout successful!') {
                localStorage.removeItem('token');
                // Redirect the user to the home page
                window.location.href = '/';
            } else {
                setLogoutStatus('Logout failed. Please try again!');
            }


        } catch (error) {
            console.log(error);
            // Handle any error if needed
            setLogoutStatus('An error occurred during logout.');
        }
    }


    return (
        <div className="Sidebar">

            <div className="user-area" >
                <img src={userIcon} className="user-logo" alt='cat logo'/>
                <br/>
                <h2>Welcome</h2>
                {/*<h2>{location.state.id}</h2>*/}
                {/*<h2>{userEmail}</h2>*/}
            </div>

            <hr/>

            <ul className="SidebarList" >
                {SidebarData.map((val, key)=> {

                    return (
                        <li
                            key={key}
                            className="row"
                            id={window.location.pathname === val.link ? "active" : ""}
                            onClick={()=>{
                                window.location.pathname = val.link;
                            }}
                        >
                            <div id="icon" >
                                {val.icon}
                            </div>
                            <div id="title" >
                                {val.title}
                            </div>
                        </li>
                    );
                })}

                <hr/>

                <li
                    className="row"
                    onClick={()=>{
                        window.location.pathname = "/";
                    }}
                >
                    <div id="icon" >
                        <BiArrowBack />
                    </div>
                    <div id="title" >
                        Back to Home
                    </div>
                </li>
                <li
                    className="row"
                    // onClick={()=>{
                    //     window.location.pathname = "/";
                    // }}
                    onClick={handelLogout}
                >
                    <div id="icon" >
                        <FaSignOutAlt />
                    </div>
                    <div id="title" >
                        Logout
                    </div>
                </li>

            </ul>
        </div>
    );
}

export default SideBar