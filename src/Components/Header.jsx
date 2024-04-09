import logo from '../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div>
            <img src={logo}></img>
            <p>Journalism without fear or favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;