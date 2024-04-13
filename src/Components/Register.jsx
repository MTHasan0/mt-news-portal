import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import auth from "./../Firebase/Firebase.config";
import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BgImage from "./BgImage";
import { AuthContext } from "../Providers/AuthProvider";





const Register = () => {

    const [errorMsg, setErrorMsg] = useState([]);

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();

        setErrorMsg('');


        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user);
                toast.success("Register successful");

            })
            .catch((error) => {

                const errorMessage = error.message;
                setErrorMsg(errorMessage);
                toast.error("Register unsuccessful");


            });

    }
    return (
        <div>
            <Navbar></Navbar>
            <BgImage></BgImage>
            <div className=" flex hero items-center justify-center min-h-svh">


                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold">Register Here!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" name='name' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" name='email' required />
                            <p className="text-red-600 font bold">{errorMsg}</p>
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
                            <button className="btn btn-primary">Register</button>
                        </div>

                        <p>Already user? <Link to={'/login'} className="text-blue-600 font-bold">Login</Link></p>
                    </form>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;