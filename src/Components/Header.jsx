import logo from '../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='items-center flex flex-col'>
            <img className=' max-w-2xl' src={logo}></img>
            <p>Journalism without fear or favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;