import React, { useEffect, useState } from "react";
import axios from "axios"
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
const Hero=()=>{
    return(
        <MDBCarousel showControls showIndicators>
            <div className=".text-dark">
 <MDBCarouselItem itemId={1}>
        <img src='p2.jpg' className='d-block w-100 'style={{ height: '87.5vh' }} alt='...' />
        <MDBCarouselCaption>
          <h5 ><b>"Welcome to Blink News: Your Gateway to Informed Living"</b></h5>
          <p>Welcome to Blink News, where information meets inspiration. Explore the world's latest stories, tailored just for you. Let Blink News be your trusted companion in the journey of staying informed and inspired.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem> 
       <MDBCarouselItem itemId={2}>
        <img src='p1.jpg' className='d-block w-100' style={{ height: '87.5vh' }} alt='...' />

        <MDBCarouselCaption>
          <h5><b>"Unveiling the Blink News Story"</b></h5>
          <p>At Blink News, we believe in the power of knowledge and the thrill of discovery. Learn about our mission, the team behind Blink Bot, and the passion that drives us to redefine how you experience and engage with news.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='p3.jpg' className='d-block w-100'style={{ height: '87.5vh' }} alt='...' />
        <MDBCarouselCaption>
          <h5 ><b>"Discover the Features that Make Blink News Shine"</b></h5>
          <p>Dive into the extraordinary features that set Blink News apart. From personalized news feeds and real-time updates to interactive conversations with Blink Bot, explore how Blink News transforms news consumption into a dynamic experience.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem> 
  </div>
    </MDBCarousel>
        
    )
};
export default Hero;