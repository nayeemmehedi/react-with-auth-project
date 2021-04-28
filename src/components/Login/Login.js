import React, { useContext, useState } from 'react';
import { Redirect, Route, useHistory, useLocation } from 'react-router';

import firebase from "firebase/app";

import "firebase/auth";
import firebaseConfig from './firebase.confg';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';





const Login = () => {

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };



    if (firebase.apps.length === 0) {

        firebase.initializeApp(firebaseConfig);


    }



    const [loggedInUser, setLoggedInUser] = useContext(userContext)


    // manual sigin up and password start


    const [user, setUser] = useState({
        email: '',
        password: '',
        error: ''

    })


    const handleBlur = (event) => {




        if (event.target.name == 'email') {

            let newuser = { ...user }

            newuser[event.target.name] = event.target.value
            setUser(newuser)




        }
        if (event.target.name === 'password') {

            let newuser1 = { ...user }
            newuser1[event.target.name] = event.target.value
            setUser(newuser1)



        }

    }





    const handleSubmit = (event) => {
        event.preventDefault()



        firebase.auth().signInWithEmailAndPassword(user.email, user.password)


            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user.email)

                let newuser = { ...user }

                newuser.errror = ''
                setUser(newuser)


                const { email } = user
                const signInuser2 = { email }
                setLoggedInUser(signInuser2)
                history.replace(from)

                // ...
            })



            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                let newuser = { ...user }

                newuser.error = errorMessage

                setUser(newuser)


            });





    }


    //manual signin up and password finish


    //google login in start
    const googleSign = () => {



        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {


                const { displayName, email } = result.user
                const signInuser = { displayName, email }
                setLoggedInUser(signInuser)
                history.replace(from)

            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });

    }



    //google login in finish 
    //


    //fb login start 

    const fbSignin = () => {

        var fbprovider = new firebase.auth.FacebookAuthProvider();


        firebase
            .auth()
            .signInWithPopup(fbprovider)
            .then((result) => {

                var credential = result.credential;

                
                var user = result.user;
                console.log(user)

                
                var accessToken = credential.accessToken;

                const { displayName, email } = result.user
                const signInuser = { displayName, email }
                setLoggedInUser(signInuser)
                
                history.replace(from)

                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;

                // ...
            });


    }









    //fb login finish 



    return (
        <div>
            <button style={{ color: 'red' }} onClick={googleSign}>Google LOgin in </button>
            <button style={{ color: 'red' }} onClick={fbSignin}>fb LOgin in </button>

            <br /> <br />


            <div className="container">



                <form onSubmit={handleSubmit}>

                    <h1>Login Page....</h1>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Email</label>
                        <input type='email' onBlur={handleBlur} name='email' class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" onBlur={handleBlur} name='password' class="form-control" id="exampleInputPassword1" />
                        <span>password must be geater then 6</span>
                    </div>


                    <input type="submit" value='submit' class="btn btn-primary" />

                    {user.error ? <h3 style={{ color: "red" }}>{user.error}</h3> : <p></p>}


                </form>
                <Link to="/SignUp"> Create a new accout</Link>
            </div>
        </div>
    );
};

export default Login;