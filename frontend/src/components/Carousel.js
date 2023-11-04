import React from 'react'
import Img1 from '../Assets/carousel/hd1.jpeg'
import Img2 from '../Assets/carousel/hd2.jpeg'
import Img3 from '../Assets/carousel/hd3.webp'
function carousel() {
  return (
    <div >
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" >
            <form className="d-flex">
              <input className="form-control mr-sm-2 me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0 text-white bg-success" type="submit">Search</button>
            </form>
          </div>
          <div className="carousel-item active">
            <img className="d-block w-100" src={Img1} alt="First slide" style={{ }} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Img2} alt="Second slide" style={{}} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Img1} alt="Third slide" style={{}}/>
          </div>
        </div>
        <a className="carousel-control-prev"  href="#carouselExampleControls" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next"  href="#carouselExampleControls" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  )
}

export default carousel
