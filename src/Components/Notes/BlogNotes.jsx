import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import '../../CssFiles/BlogNotes.css';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBTextArea } from 'mdb-react-ui-kit';
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import BaseUrl from '../BaseUrl/BaseUrl'


const BlogNotes = () => {
    const [notes, setNotes] = useState('');
    const [title,setTitle] = useState('')
    const { id }= useParams('');

   
    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    const fetchData = () => {
        axios.get(`https://bane47.onrender.com/cards`)
            .then((response) => {
                console.log(response.data)
                setNotes(response.data)
            })
            axios.get(`https://bane47.onrender.com/Blogs/${id}`)
            .then((response) => {
                console.log(response.data)
                setTitle(response.data)
            })
    }
    

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <Container>
                {notes.length > 0 &&
                    <div className='text-center m-5'>
                        {notes.map((note) => (
                            <div key={note.id} className='fontSizeBlogNotes' >
                                <h1 className='Proxima'>{title.title}</h1>
                                <div className='px-5 mx-1 Proxima text-start'>
                                    <p>{note.mp1}</p>
                                    <h6 className='ProximaBold'>{note.h3}</h6>

                                    <ul >
                                        <li><span className='ProximaBold fontSizeBlogNotes'>{note.sh1}</span><span>{note.sp1}</span></li>
                                        <li><span className='ProximaBold'>{note.sh2}</span><span>{note.sp2}</span></li>
                                        <li><span className='ProximaBold'>{note.sh3}</span><span>{note.sp3}</span></li>
                                        <li><span className='ProximaBold'>{note.sh4}</span><span>{note.sp4}</span></li>
                                        <li><span className='ProximaBold'>{note.sh5}</span><span>{note.sp5}</span></li>
                                        <li><span className='ProximaBold'>{note.sh6}</span><span>{note.sp6}</span></li>
                                    </ul>
                                    <h6 className='ProximaBold'>{note.h4}</h6>
                                    <ul>
                                        <li><span className='ProximaBold'>{note.sh7}</span><span>{note.sp7}</span></li>
                                        <li><span className='ProximaBold'>{note.sh8}</span><span>{note.sp8}</span></li>
                                        <li><span className='ProximaBold'>{note.sh9}</span><span>{note.sp9}</span></li>
                                        <li><span className='ProximaBold'>{note.sh10}</span><span>{note.sp10}</span></li>
                                        <li><span className='ProximaBold'>{note.sh11}</span><span>{note.sp11}</span></li>
                                    </ul>
                                    <h6 className='ProximaBold'>{note.conclusion}</h6>
                                    <p>{note.conclusioncontent}</p>
                                </div>
                            </div>
                        ))}


                    </div>
                }
                <hr />
                <div>
                    <div>
                        <h1 className='Proxima text-clr-BN pt-3'>0 Comment</h1>
                    </div>
                    <hr />
                    <div className='text-start Proxima text-clr-BN pt-3'>
                        <h1>Leave a Comment</h1>
                        <form action="" onSubmit={handleSubmit(onSubmit)} >
                            {errors.commentfield && <div className='Proxima text-danger'>Please fill out all the text boxes</div>}
                            <label>Name</label>
                            <MDBInput className='Comment-BN' placeholder='Name' type='text' {...register('commentfield', { required: true })} />
                            <label>Email</label>
                            <MDBInput className='Comment-BN' placeholder='Email' type='text' {...register('commentfield', { required: true })} />
                            <label>Message</label>
                            <MDBTextArea className='Comment-BN' placeholder='Message' id='textAreaExample' rows={4} {...register('commentfield', { required: true })} />
                            <button type="submit" className='w-100 PostBtn p-1 text-white border-0 my-3'  >Post Comment</button>

                        </form>
                    </div>

                </div>
            </Container>
        </>
    )
    
}

export default BlogNotes