import Navbar from "./Navbar";
import { useParams } from 'react-router-dom'
import RightNav from "./RightNav";
import Header from "./Header";

const NewsDetails = () => {

    const { id } = useParams();

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <p>this is news details {id}</p>
            <div className="grid grid-cols-4 justify-between">
                <div className="col-span-3">
                    
                </div>
                <div className="col-span-1"><RightNav></RightNav></div>
            </div>
        </div>
    );
};

export default NewsDetails;