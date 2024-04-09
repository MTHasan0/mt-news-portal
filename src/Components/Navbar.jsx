import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const navLinks = <>

        <button className="btn btn-ghost outline-none"><NavLink className="no-underline btn btn-primary" to={'/'}>Home</NavLink></button>
        <button className="btn btn-ghost outline-none"><NavLink className="no-underline btn btn-primary" to={'/about'}>About</NavLink></button>
        <button className="btn btn-ghost outline-none"><NavLink className="no-underline btn btn-primary" to={'/career'}>Career</NavLink></button>
        
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                            {navLinks}

                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                {navLinks}
                    <ul className="px-1">
                        
                    </ul>
                </div>

                <div className="navbar-end">
                    <div role="button" className="btn btn-ghost btn-circle avatar ">
                        <div className="w-10 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <Link><button className="btn btn-ghost">Login</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Navbar;