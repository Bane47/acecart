import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAxios = (url) => {

    const navigate = useNavigate();
    const [allData,setAllData] = useState('')
    const [Fname, setFname] = useState('')
    const [Lname, setLname] = useState('')
    const [email, setemail] = useState('')
    const [pwd, setpwd] = useState('')
    const [category, setcategory] = useState('')
    const [dname, setDname] = useState('')
    const [dcode, setdcode] = useState('')
    const [city, setcity] = useState('')
    const [state, setState] = useState('')
    const [gst, setGst] = useState('')
    const [cart, setCart] = useState('')
    const [logIn,setLogin] = useState(false)


    

        // axios.post(url,{
        //     fname: Fname,
        //     lname: Lname,
        //     email: email,
        //     password: pwd,
        //     category: category,
        //     dname: dname,
        //     dcode: dcode,
        //     city: city,
        //     state: state,
        //     gst: gst,
        //     cart:cart,
        //     isLogged: false
        // })
    
    // if(method==="put")
    axios.get(url)
    .then((response)=>{

        setAllData(response.data)
     
        // setFname(response.data[0].fname);
        // setLname(response.data[0].lname);
        // setemail(response.data[0].email);
        // setpwd(response.data[0].password);
        // setcategory(response.data[0].category);
        // setDname(response.data[0].dname);
        // setdcode(response.data[0].dcode);
        // setcity(response.data[0].city);
        // setState(response.data[0].state);
        // setGst(response.data[0].gst);
        // setCart(response.data[0].cart);
        // setLogin(true);
    }).then(()=>{
        // axios.put(url,{
        //     fname: Fname,
        //     lname: Lname,
        //     email: email,
        //     password: pwd,
        //     category: category,
        //     dname: dname,
        //     dcode: dcode,
        //     city: city,
        //     state: state,
        //     gst: gst,
        //     cart:cart,
        //     isLogged: true  
        // })
    }).catch((err)=>{
        if(!logIn){
            return     navigate("/Prompt")
        }
        console.log(err)
    })
  return [allData]
}

export default useAxios
