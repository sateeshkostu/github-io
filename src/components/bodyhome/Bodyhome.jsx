import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { Link } from 'react-router-dom';

function Bodyhome() {
  return (
    <>
    <div className='trend'>
        <h1>Trending Movies</h1>
        <Link to="/" style={{color:'red'}}>Viewall</Link>
    </div>
    {/* carousal is used to next and previous buttons move to one screen to another screen */}
    <Carousel className='telugu'>
      <Carousel.Item>
        <img 
          src="./images/Img1.png"
          alt="" 
        />
         <Carousel.Caption>
          {/* use anchor tag play the video and target is used to open the another tab */}
         <a href="https://www.youtube.com/watch?v=J8CvvGRTziQ" target='_blank'><button className="primary-btn">
                <i fas fa-play>PLAYNOW</i>
            </button> </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  
          src="../images/Img2.jpg"
          alt=""
        />
       <Carousel.Caption>
       <a href="https://www.youtube.com/watch?v=YtfdvDd31Kk" target='_blank'><button className="primary-btn">
                <i fas fa-play>PLAYNOW</i>
            </button> </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="../images/Img3.jpg"
          alt=""
        />
       <Carousel.Caption>
       <a href="https://www.youtube.com/watch?v=Ljk6tGZ1l3A" target='_blank'><button className="primary-btn">
                <i fas fa-play>PLAYNOW</i>
            </button> </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img         
          src="../images/Img5.jpg"
          alt="" 
        />
        <Carousel.Caption>
        <a href="https://www.youtube.com/watch?v=UW93_xZgH0c" target='_blank'><button className="primary-btn">
                <i fas fa-play>PLAYNOW</i>
            </button> </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}


export default Bodyhome;