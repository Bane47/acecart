import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Home1 from '.././Assets/images/Home-1.jpg.webp'
import Home2 from '.././Assets/images/home3.jpg.webp'
import Home3 from '.././Assets/images/home4.jpg.webp'
import '../App.css'
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Card from 'react-bootstrap/Card';
import { useState, useRef } from 'react';
import { Container } from 'react-bootstrap';


export default function SecondSection() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    return (
        <React.Fragment >
            <div className="SecondSectionBody">       
    <Carousel className='HomeCarousel' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Home1}
          alt="First slide"
        />
        <Carousel.Caption className=' m-auto mb-lg-5 mb-sm-5 mb-md-5 '>
        <Card className='HomePageCard m-auto mb-4 '>
                    <Card.Body>
                        <Card.Title className="cardTitleImg mt-1"><span className='overTheCommon2'>Choose Class</span>
                            <span className='overTheCommon '> over the common.</span>
                        </Card.Title>
                        
                    </Card.Body>
                </Card>
                <span className='mt-5 acecraftLink'>ACECRAFT FOR COLLEGES <i class="fa-solid fa-chevron-right"></i></span>

        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
<Container fluid>
    <div className='row'>
        <div className='col-6'>
        <Carousel className='HomeCarousel ' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item >
        <img
          className='img-responsive home2'
          src={Home2}
          alt="First slide"
        />
        <Carousel.Caption className=' m-auto mb-lg-5 mb-sm-5 mb-md-5 '>
        <Card className='HomePageCard m-auto mb-4 '>
                    <Card.Body>
                        <Card.Title className="cardTitleImg mt-1"><span className='overTheCommon2'>Choose Class</span>
                            <span className='overTheCommon '> over the common.</span>
                        </Card.Title>
                        
                    </Card.Body>
                </Card>
                <span className='mt-5 acecraftLink'>ACECRAFT FOR COLLEGES <i class="fa-solid fa-chevron-right"></i></span>

        </Carousel.Caption>
      </Carousel.Item>      
    </Carousel>

        </div>
        <div className='col-lg-6'>
        <Carousel className='HomeCarousel' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="  home2"
          src={Home3}
          alt="First slide"
        />
        <Carousel.Caption className=' m-auto mb-lg-5 mb-sm-5 mb-md-5 '>
        <Card className='HomePageCard m-auto mb-4 '>
                    <Card.Body>
                        <Card.Title className="cardTitleImg mt-1"><span className='overTheCommon2'>Choose Class</span>
                            <span className='overTheCommon '> over the common.</span>
                        </Card.Title>
                        
                    </Card.Body>
                </Card>
                <span className='mt-5 acecraftLink'>ACECRAFT FOR COLLEGES <i class="fa-solid fa-chevron-right"></i></span>

        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>

        </div>

    </div>
    </Container>


    </div>

        </React.Fragment>
    )
}