import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


const api = axios.create({
    baseURL: 'http://localhost:8080',
})

function SignupPage() {

    const history = useNavigate();

    const[userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Handle User Registration submit
    async function handleSubmit(e) {
        e.preventDefault();

        try{

            await api.post('http://localhost:8080/signup', {
                userName,
                email,
                password,
            })
                .then(res =>{
                if(res.data === "exist") {
                    alert("User already exists.")
                } else if (res.data === "notexist") {
                    history("/user-dashboard", {state:{id:email}})
                }
            }).catch(e=> {
                alert("Error: Unable to signup.")
                console.log(e)
            })

        } catch(e) {
            console.log(e)
        }

    }




    return (
        <div className="register-page" >

            <div className="register-container">

                <form className="register-form" onSubmit={handleSubmit} >

                    <h1> Register </h1>
                    <br/><br/>

                    <label>
                        <p>User Name</p>
                        <input type="text" placeholder="Alex" onChange={e => setUserName(e.target.value)}/>
                    </label>

                    <label>
                        <p>Email</p>
                        <input type="text" placeholder="example@mail.com" onChange={e => setEmail(e.target.value)}/>
                    </label>

                    <label>
                        <p>Password</p>
                        <input type="text" placeholder="********" onChange={e => setPassword(e.target.value)}/>
                    </label>

                    <div>
                        <br/>
                        <button type="submit"> Register </button>
                    </div>

                    <br/>
                    <Link to="/login">Already have account? Back To Login</Link>

                </form>

            </div>
        </div>
    )
}

export default SignupPage