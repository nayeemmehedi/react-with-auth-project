import React, { useState} from 'react';
import firebase from "firebase/app";



import "firebase/auth";

import { Link } from 'react-router-dom';
import firebaseConfig from '../Login/firebase.confg';


//solving error
if (firebase.apps.length === 0) {

    firebase.initializeApp(firebaseConfig);


}




const SingUp = () => {


    const [user, setUser] = useState({

        isSignIn: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: '',
        passwordError: '',
        success: false


    })


    //check function  password  & confirm password equal or not 

    const isPasswordConfirmed = (password, confimPassword) => {

        if (password && confimPassword && password === confimPassword) return true;
        return false;
    }


    const handleSubmit = (event) => {
        event.preventDefault()

        if (!isPasswordConfirmed(user.password, user.password_confirm)) {

            let newuser = { ...user }
            newuser.passwordError = "password not matching"
            setUser(newuser)

            return;
        }




        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
                // Signed in 

                var user = userCredential.user;
                user.isSignIn = true
                let newuser = { ...user }
                newuser.error = ""
                setUser(newuser)

                UserInfoPass(user.name)

                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                user.isSignIn = false

                let newuser = { ...user }
                newuser.error = errorMessage
                setUser(newuser)




            });



    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }



    const handleBlur = (event) => {

        let validCheck = true;

        if (event.target.name === 'email') {

            validCheck = validateEmail(event.target.value)

        }


        if (event.target.name === 'password') {
            validCheck = event.target.value > 6

        }


        if (validCheck) {

            let newuser = { ...user }
            newuser[event.target.name] = event.target.value
            setUser(newuser)

        }


    }




    let UserInfoPass = (name) => {
        var user = firebase.auth().currentUser;

        user.updateProfile({


        }).then(function () {

            // Update successful.
        }).catch(function (error) {
            console.log(error)
        });
    }







    return (
        <div className='container'>


            <form onSubmit={handleSubmit}>

                <h1>Create an account....</h1>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input required type="text" onBlur={handleBlur} placeholder='Name Please' name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">Username</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Email</label>
                    <input required type='email' onBlur={handleBlur} placeholder='Email Please' name='email' class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input required type="password" name='password' class="form-control" id="exampleInputPassword1" onBlur={handleBlur} />
                    <span>password must be geater then 6</span>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password confirm</label>

                    <input required type="password" name='password_confirm' class="form-control" id="exampleInputPassword1" onBlur={handleBlur} />
                    <span>password must be geater then 6</span>
                </div>




                <input type="submit" value='Create an account' class="btn btn-primary" />


            </form>
            <h1 style={{ color: 'red' }}>{user.error}</h1>
            {user.isSignIn && <h1 style={{ color: 'green' }}>SuccessFully login in</h1>}

            <span>already have an account ?   <Link to="/login">sign In</Link> </span>

            <h1 style={{ color: 'red' }}>{user.passwordError}</h1>

            <div style={{ height: '200px' }}>

            </div>





        </div>
    );
};

export default SingUp;