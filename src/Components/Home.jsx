import Header from "./Header";
import HeadingNews from "./HeadingNews";
import LeftNav from "./LeftNav";
import Navbar from "./Navbar";
import News from "./News";
import RightNav from "./RightNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeadingNews></HeadingNews>
            <Navbar></Navbar>
            <p className="font-poppins font-bold">Dragon News Home</p>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 gap-6 justify-center">
                <div className="col-span-1"><LeftNav></LeftNav></div>
                <div className="lg:col-span-2"><News></News></div>
                <div className="col-span-1"><RightNav></RightNav></div>
            </div>
        </div>
    );
};

export default Home;