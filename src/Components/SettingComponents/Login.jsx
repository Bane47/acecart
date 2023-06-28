import React from 'react';
import { Card } from 'react-bootstrap';
import 'C:/Users/cgvak/Desktop/React/acecart/src/CssFiles/signIn.css'

const Login = () => {
    return (
        <div className=''>
            <div className='justify-content-center d-flex text-center vh-100 m-5 border-4'>
                <Card className='col-lg-4 shadow border-0'>

                    <Card.Body>
                        <h1 className='loginh1'>Login with ACECRAFT</h1>
                        <div>
                        <input className='my-4 loginInput' id='uname' type="text" placeholder='Username' />
                        </div>
                        <div>
                        <input type="password " className='loginInput' id='pwd' placeholder='password' />
                        </div>

                    <button className='logInButton bg-black mt-3'>Login</button>

                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Login