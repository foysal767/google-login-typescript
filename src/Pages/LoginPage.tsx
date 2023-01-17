import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
    const auth = getAuth();
    const navigate = useNavigate()
    const [authing, setAuthing] = useState(false);
    const signInWithGoogle = async () =>{
        setAuthing(true);
        signInWithPopup(auth, new GoogleAuthProvider())
        .then(responsive=> {
            console.log(responsive.user.uid);
            navigate('/')
        })
        .catch(error => {
            console.log(error)
            setAuthing(false)
        })
    }

    return (
        <div>
            <p>Login Page</p>
            <button onClick={() => signInWithGoogle()} disabled={authing}>Sign in With Google</button>
        </div>
    )
}

export default LoginPage;