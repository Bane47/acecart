import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import '../../CssFiles/signIn.css'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SecondSection from '../SecondSection'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import useAxios from '../Axios/Axios';

const Login = () => {
  const history = useNavigate()
  const [uname, setUname] = useState('');
  const [pwd, setPwd] = useState('');

  var Fname, Lname, email, password, category, dname, dcode, city, state, gst, cart, id;

  const myToastFail = () => toast.error('Please check the username and the password!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    closeButton: false,
    theme: "colored"
  });



  const fetchData = (e) => {
    e.preventDefault();
    fetch('https://bane47.onrender.com/register')
      .then((response) => response.json())
      .then((data) => {



        const foundUser = data.find((user) => user.email === uname && user.password === pwd)



        if (foundUser) {

          axios.get(`https://bane47.onrender.com/register?email_like=${uname}`)
            .then((response) => {
              console.log(uname)
              Fname = response.data[0].fname;
              Lname = response.data[0].lname;
              email = response.data[0].email;
              password = response.data[0].password;
              category = response.data[0].category;
              dname = response.data[0].dname;
              dcode = response.data[0].dcode;
              city = response.data[0].city;
              state = response.data[0].state;
              gst = response.data[0].gst;
              cart = response.data[0].cart;
              id = response.data[0].id;

              console.log("ID value is" + id)
            })
            .then(()=>{
              axios.put(`https://bane47.onrender.com/register/${id}`, {
                fname: Fname,
                lname: Lname,
                email: email,
                password: password,
                category: category,
                dname: dname,
                dcode: dcode,
                city: city,
                state: state,
                gst: gst,
                cart: cart,
                isLogged: true
    
              })
                .then(()=>{
                  history("/")

                })
                .catch(err => console.error("Wasn't able to update property.", err))
    
              console.log('Login success');
    
            })
            
          

        } else {
          console.log('Login failed');
          myToastFail();
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      })



  }





  return (
    <div className=''>
      <div className='justify-content-center d-flex text-center vh-100 m-5 border-4'>
        <Card className='col-lg-4 shadow border-0'>

          <Card.Body>
            <form action="" onSubmit={fetchData}>
              <h1 className='loginh1'>Login with ACECRAFT</h1>
              <div>
                <input className='my-4 loginInput' id='uname' type="email" placeholder='Username' value={uname} onChange={(e) => setUname(e.target.value)} />
              </div>
              <div>
                <input type="password " className='loginInput' id='pwd' placeholder='password' value={pwd} onChange={(e) => setPwd(e.target.value)} />
              </div>

              <button type='submit' className='logInButton bg-black mt-3'>Login</button>
            </form>
          </Card.Body>
        </Card>
        <ToastContainer />



      </div>
    </div>
  )
}

export default Login