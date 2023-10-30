import React, { useState } from 'react'
import { database } from '../../firebase/FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import firebase from '../../Images/firebase.png'
import { useNavigate } from 'react-router-dom'
import './LoginandSignUp.css'
const LoginandSignUp = () => {

    const [login, setLogin] = useState(false);
    const history = useNavigate();
    const handleSubmit = (e, type) => {
        e.preventDefault();
        // console.log(e.target.email.value)
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (type === 'signup') {
            createUserWithEmailAndPassword(database, email, password).then(data => {
                console.log(data, "authData");
                history("/home")
            }).catch(err => {
                alert(err.code)
                setLogin(true)
            }) 
        }
        else {
            signInWithEmailAndPassword(database, email, password).then(data => {
                console.log(data, "authData");
                // alert('welcome to Login')
                history("/home")
            }).catch(err => {
                alert(err.code)
            })
        }

    }

    const handleReset = () => { 
        history("/reset")
    }

    return (
        <div>
            <div className='wrappers'>
                <div className='container mains'>
                    <div className='row'>
                        <div className='col-md-6 side-images'>
                            {/* Image */}
                            <img src={firebase} alt='frontimage' id='img' />
                            <div className='texts' >
                                <p>Join the community of developers <i>-- Arjun</i></p>
                            </div>
                        </div>
                        <div className='col-md-6 rights'>
                            <div className='input-boxs'>
                                <header>{login ? 'Login' : 'Create Account'}</header>
                                <form onSubmit={(e) => handleSubmit(e, login ? 'signin' : 'signup')}>
                                    <div className='input-fields'>
                                        <input type='text' className='inputs' name='email' id='email' required autoComplete='off' />
                                        <label htmlFor='email'>Email</label>
                                    </div>
                                    <div className='input-fields'>
                                        <input type='password' className='inputs' name='password' id='password' required />
                                        <label htmlFor='password'>password</label>
                                    </div>
                                    <div className='input-fields'>
                                        {/* <input type='submit' className='submit' value="Sign Up" /> */}
                                        <button type='submit' className='submits'>{login ? 'Sign In' : 'Sign Up'}</button>
                                    </div>
                                </form>
                                <div className='signins'>
                                    <span>If you are forget your password? <span className='links' onClick={handleReset}>Reset Password</span></span>
                                </div>
                                <div className='signins'>
                                    <span>All ready have an account? <span className='links' onClick={()=>setLogin(true)}>Login</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginandSignUp
