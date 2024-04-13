import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        
        logOut()
        .then(() => {

            
            toast.success("Logout successful");
            

        })
        .catch(() => {
            toast.error("Logout unsuccessful");


        });
        
    }

    const navLinks = <>

        <button className="btn btn-ghost "><NavLink className="no-underline  " to={'/'}>Home</NavLink></button>
        <button className="btn btn-ghost "><NavLink className="no-underline  " to={'/about'}>About</NavLink></button>
        <button className="btn btn-ghost "><NavLink className="no-underline  " to={'/career'}>Career</NavLink></button>

    </>

    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box  bg-slate-50">
                            {navLinks}

                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">

                    <ul className="">
                        {navLinks}
                    </ul>
                </div>

                <div className="navbar-end">
                    <div role="button" className="btn btn-ghost btn-circle avatar ">
                        <div className="w-10 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    {
                        user ? <Link onClick={handleSignOut}><button className="btn btn-ghost">Logout</button></Link> : <Link to={'/login'}><button className="btn btn-ghost">Login</button></Link>
                    }
                </div>
            </div>
            <ToastContainer />

        </div>
    );
};

export default Navbar;