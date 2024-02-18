import React from 'react';
import Sidebar from '../../components/SideBar';
import { useLocation } from 'react-router-dom';

export default function UserDashboard() {

    const location = useLocation();

    console.log('Email state in UserDashboard:', location.state?.email);

    return (
        <div className="user-dashboard" >

            <Sidebar/>

            <div className="dashboard-rest-area">

                <div className="title">
                    <h1>Dashboard</h1>
                </div>

                <div className="grid-container">
                    <div className="box-container1">
                        <div className="inner-box">
                            <div className="flex-column1">
                                <p>First Name </p>
                                <input type="text"/>

                                <p>Email </p>
                                <input type="text"/>
                            </div>

                            <div className="empty-area">

                            </div>

                            <div className="flex-column2">
                                <p>Last Name </p>
                                <input type="text"/>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )

}