import { Navigate, Outlet, useLocation } from 'react-router-dom'
import {getJWTCookie} from '../Authentication/cookieFunctions';
import jwt_decode from "jwt-decode";
import CommonSidebar from './Sidebar';
 
const PrivateRoutes = () => {
    var location = useLocation();
    var jwt = getJWTCookie();
    var isAdmin = 0;
    var isTrainer = 0;

    console.log("JWT:"+jwt);
    try{
        var decoded = jwt_decode(jwt);
        isAdmin = decoded.isAdmin
        isTrainer = decoded.isTrainer
        console.log("isAdmin:"+isAdmin)
    }
    catch(e){
        console.log(e)
    }  
    
return (
    isAdmin||isTrainer ? <Outlet/> : <Navigate to='/' replace state={{from: location}}/>
  )
}

export default PrivateRoutes;