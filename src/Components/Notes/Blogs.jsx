import React, { useState } from 'react';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import 'C:/Users/cgvak/Desktop/React/acecart/src/CssFiles/Notes.css'

function NotesBlogs (){

    const [blogs,setBlogs] = useState([])

    const fetchData = () => {
        fetch("http://localhost:4000/Blogs")
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
 <div className='row '>
    {blogs.map((blog)=>(
        <Card className='m-2 blogsCard rounded-0 shadow' key={blog.id}>
            
       <Card.Body className=' card-body bg-black  mt-1 blogscardBody'>
         <Card.Text className="text-white card-text text-center blogTitle">
  
          {blog.title}
  
         </Card.Text>
 
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