import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'
export interface IAuthRouteProps {};

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props:any) => {
    const {children} = props;
    const auth = getAuth();
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AuthCheck();
        return () => AuthCheck()
    }, [auth]);
    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if(user){
            setLoading(false)
        } else {
            console.log('login failed')
            navigate('/login')
        }
})

if(loading){
    return <p>Loading...</p>
}
return <>{children}</>
}
export default AuthRoute;
