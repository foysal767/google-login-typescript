import React from 'react';
import {getAuth, signOut} from 'firebase/auth';



export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    const auth = getAuth();
    return (
        <div>
            <p>Home page</p>
            <button onClick={()=> signOut(auth)}>Sign out of firebase</button>
        </div>
    )
}

export default HomePage;