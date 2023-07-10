import React, { useState } from 'react';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import '../../CssFiles/Notes.css'
import { Link } from 'react-router-dom';
import BlogNotes from './BlogNotes';
import BaseUrl from '../BaseUrl/BaseUrl'


function NotesBlogs (){

    const [blogs,setBlogs] = useState([]);

    const fetchData = () => {
        fetch(`https://bane47.onrender.com/Blogs`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setBlogs(data);
            console.log(data);
          })
      }
      useEffect(() => {
        fetchData();
    
      }, [])
    
    return (
    <div>
        <Container >
        <h1 className='text-center Blogs'>Blogs</h1>


    {blogs.length > 0 && (
 <div className='row d-flex justify-content-center'>
    {blogs.map((blog)=>(
       <Card className='m-2 blogsCard rounded-0 shadow' key={blog.id}>
          
       <Card.Body className=' card-body bg-black  mt-1 blogscardBody'>
       <Link to={`/BlogNotes/${blog.id}`} className='text-decoration-none'>  <Card.Text className="text-white card-text text-center blogTitle">
  
          {blog.title}
          
         </Card.Text></Link>
 
       </Card.Body>
       
     </Card>
    ))}

     
     </div>

    )}
   

</Container>

    </div>
  )
}

export default NotesBlogs