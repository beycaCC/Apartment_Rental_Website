import React, { useState } from 'react'
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function LoginPage(){

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e) {
        e.preventDefault();

        try{

            const response = await axios.post('http://localhost:8080/login', {
                email,
                password,
            });

            if(response.status === 200) {

                const user = response.data.user;
                const token = response.data.token;

                // console.log('Backend Response:', response.data);

                // if (user && token) {
                    // history(`/user-dashboard`, { state: { id: user.email } });
                if (user.userName) {
                    console.log('User:', user.userName);
                }

                console.log('Received token:', token);

                // Save the token in the local storage
                localStorage.setItem('token', token);

                // Optionally, save other user-related data to the local storage if needed
                localStorage.setItem('user', JSON.stringify(user));

                // Navigate to the user dashboard
                navigate('/user-dashboard', { state: { email: user.email } });

                // } else {
                //     alert('Failed to fetch the User or Token.');
                // }

            } else {
                alert(response.data.message);
            }



        } catch(e) {
            alert("wrong details")
            console.log(e)
        }

    }

    return (
        <div className="login-page" >

            <div className="register-container">

                <form className="login-form">

                    <h1> Login </h1>
                    <br/><br/>

                    <label>
                        <p>Email</p>
                        <input type="email" placeholder="example@mail.com" onChange={e => setEmail(e.target.value)}/>
                    </label>

                    <label>
                        <p>Password</p>
                        <input type="password" placeholder="********" onChange={e => setPassword(e.target.value)}/>
                    </label>

                    <div>
                        <br/>
                        <button type="submit" onClick={handleSubmit}> Log in </button>
                    </div>

                    <br/>
                    <Link to="/signup">Don't have an account? Register here.</Link>

                </form>

            </div>

        </div>
    )
}
