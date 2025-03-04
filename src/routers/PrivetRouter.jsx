import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";
import PuffLoader from "react-spinners/ClipLoader";

const PrivetRouter = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <div className="w-full flex justify-center h-screen items-center">
            <PuffLoader className="w-2xl" size={100} />
        </div>
    }

    if(user){
        return children
    }

    


    return <Navigate to={'/login'} />
};

export default PrivetRouter;