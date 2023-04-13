import React, { useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup,signOut} from 'firebase/auth'
import app from '../../firebase/firebase.init';
const Login = () => {
    const [user,setUser] = useState(null)
    const auth = getAuth(app)
    const googleProvider =new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()


     const handleGithubSignIn =()=>{
      signInWithPopup(auth,githubProvider)
      .then(result =>{
        const githubLoginUser = result.user;
        console.log(githubLoginUser)
        setUser(githubLoginUser)
      })
      .catch(error =>{
        console.log(error.message)
      })
      

    }
    const handleGoogleSingIn = ()=>{
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            const googleLoginUser = result.user;
            console.log(googleLoginUser)
            setUser(googleLoginUser)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    const handleSignOut = ()=>{
        signOut(auth)
        .then(result =>{
            console.log(result)
            setUser(null)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            {/* user ? */}
{
    user ?  
     <button onClick={handleSignOut}>Sign out</button>
    :<>
    <button onClick={handleGoogleSingIn}>Google Login</button>
    <button onClick={handleGithubSignIn}>Github Login</button>
    </>
}
            <div>{ user &&  <div><h1>User Name: {user.displayName}</h1>
                <p>User Email: {user.email}</p>
                <img src={user.photoURL} alt="" /></div>
                }
               
            </div>
        </div>
    );
};

export default Login;