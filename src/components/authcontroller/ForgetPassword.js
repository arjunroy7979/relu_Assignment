import { sendPasswordResetEmail } from 'firebase/auth';
import React from 'react'
import { database } from '../../firebase/FirebaseConfig';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {

    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailVal = e.target.email.value;
        sendPasswordResetEmail(database, emailVal).then(data => {
            alert("check Your gmail")
            history('/')
        }).catch(err => {
            alert(err.code)
        })
    }

    return (
        <div>
            <div className='container'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="container ">
                        <div className="card text-center mt-5">
                            <div className="card-header">
                               Forget Password 
                            </div>
                            <div className="card-body">
                                <input type='email' name='email' className='form-control' placeholder='Enter Your Email' />
                                <br />
                                <button className='btn btn-primary w-50  mt-10'>Reset Password</button>
                            </div>
                            <div className="card-footer text-muted">
                                Relu Consultancy &#169;
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgetPassword
