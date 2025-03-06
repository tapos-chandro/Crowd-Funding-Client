import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="container mx-auto w-2xl text-center ">
            <img src='https://i.ibb.co.com/Rp5BgsHm/NotFound.png' className="" alt="" />
            <Link className="btn bg-blue-500 text-white rounded-full" to={'/'}>Go Home</Link>
        </div>
    );
};

export default NotFound;