import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

import qZone1 from './../assets/qZone1.png'
import qZone2 from './../assets/qZone2.png'
import qZone3 from './../assets/qZone3.png'

const RightNav = () => {
    return (
        <div className="">
            <div className="p-3">
                <h2 className="text-3xl">Login With</h2>
                <div className="space-y-2">
                    <button className="btn btn-outline w-full border  border-slate-200 hover:bg-pink-300  hover:text-black hover:border-slate-200">
                        <FaGoogle className="text-blue-700" />

                        Login with google
                    </button>
                    <button className="btn btn-outline w-full border  border-slate-200 hover:bg-pink-300  hover:text-black hover:border-slate-200">
                        <FaGithub className="text-blue-700" />

                        Login with GitHub
                    </button>
                </div>
            </div>

            <div>
                <h2 className="text-3xl">Find us on</h2>
                <div className="space-y-2 p-4">
                    <a className=" hover:bg-pink-300 cursor-pointer no-underline border border-solid justify-center font-bold p-4 flex gap-2 items-center rounded-tl-xl rounded-br-xl" href="">
                        <FaFacebook></FaFacebook>
                        <span>Facebook</span>
                    </a>
                    <a className=" hover:bg-pink-300 cursor-pointer no-underline border border-solid justify-center font-bold p-4 flex gap-2 items-center rounded-tl-xl rounded-br-xl" href="">
                        <FaTwitter></FaTwitter>
                        <span>Twitter</span>
                    </a>
                    <a className=" hover:bg-pink-300 cursor-pointer no-underline border border-solid justify-center font-bold p-4 flex gap-2 items-center rounded-tl-xl rounded-br-xl" href="">
                        <FaInstagram></FaInstagram>
                        <span>Instagram</span>
                    </a>
                </div>
            </div>
            <div className="p-4 bg-slate-200 rounded-t-xl ">
                <h2 className="text-3xl">Q Zone</h2>
                <div className="space-y-3 flex flex-col justify-center">
                    <img src={qZone1}></img>
                    <img src={qZone2}></img>
                    <img src={qZone3}></img>
                </div>
            </div>
        </div>
    );
};

export default RightNav;