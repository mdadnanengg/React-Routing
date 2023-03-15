import { Navigate } from "react-router-dom"


const Protected = ({ isLogin, Component }) => {

    if (isLogin === true) {
        return <Component />;
    } else {
        return <Navigate to="/login" />;
    }
}

export default Protected