import React from 'react';
import Img1 from '../Assets/carousel/samosa.jpg';
import Img2 from '../Assets/carousel/jamun.webp';
import Img3 from '../Assets/carousel/pizza.webp';

function Carousel() {
  return (
    <div className='bg-black vh-50'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 d-flex align-items-center'>
          <div className='text-white'>
            <h1>Explore, order, and share your favorite recipes on our platform!</h1>
          </div>
        </div>
        <div className='col-md-6'>
          {/* <img src={Img1} alt="" className='img-fluid mt-4' style={{ maxHeight: '300px', width: '100%', objectFit: 'cover' }} /> */}
          <div id="carouselExampleControls" className="carousel slide mt-4 mb-4" data-bs-ride="carousel">
        <div className="carousel-inner" id="carousel">
       
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={Img1}
              alt="First slide"
              style={{ objectFit: 'cover', maxHeight: '300px' }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={Img2}
              alt="Second slide"
              style={{ objectFit: 'cover', maxHeight: '300px' }} // Adjust the maxHeight
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={Img3}
              alt="Third slide"
              style={{ objectFit: 'cover', maxHeight: '300px' }} // Adjust the maxHeight
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </div>
    <div>
      
   
        </div>
      </div>
    </div>

  
  
  

  

{/* 
    <div style={{maxWidth:'50vw'}}>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption">
            <form className="d-flex">
              <input
                className="form-control mr-sm-2 me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0 text-white bg-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={Img1}
              alt="First slide"
              style={{ objectFit: 'cover', maxHeight: '300px' }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={Img2}
              alt="Second slide"
              style={{ objectFit: 'cover', maxHeight: '300px' }} // Adjust the maxHeight
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={Img3}
              alt="Third slide"
              style={{ objectFit: 'cover', maxHeight: '300px' }} // Adjust the maxHeight
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </div>
    <div>
      
    </div> */}
    </div>
  );
}

export default Carousel;
