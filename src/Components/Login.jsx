import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import {useLocation, useNavigate} from 'react-router-dom'
import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Home";
import BgImage from "./BgImage";
import { AuthContext } from "../Providers/AuthProvider";


const Login = () => {

    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    console.log('Login',location);
    const navigate = useNavigate();


    const handleLogin = e => {


        e.preventDefault();


        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                toast.success('Logged in successfully');
                navigate(location?.state? location.state : '/')


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                toast.error("Email and password doesn't match");


            });



    }


    return (
        <div className="">
            <Navbar className="bg-none"></Navbar>
            <div className=" flex hero items-center justify-center min-h-svh">


                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" name='email' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <p>New here? <Link to={'/register'} className="text-blue-600 font-bold">Register</Link></p>
                    </form>
                </div>

            </div>
            <BgImage></BgImage>
            <ToastContainer />
        </div>


    );
};

export default Login;