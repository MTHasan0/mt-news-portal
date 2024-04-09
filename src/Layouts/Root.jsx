import { Outlet } from 'react-router-dom'
const Root = () => {
    return (
        <div className='max-w-[95%] m-auto font-poppins'>
               
                <Outlet></Outlet>

        </div>
    );
};

export default Root;