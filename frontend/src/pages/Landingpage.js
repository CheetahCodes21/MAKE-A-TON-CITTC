import React from 'react';
import bg from '../Assets/background/orangebg3.png'
import Img from '../Assets/background/FOODIbg.jpg';
import { Row, Col, Button } from 'reactstrap';
import { FaArrowRight } from 'react-icons/fa';
import '../css/Landing.css'
import { Link } from 'react-router-dom';


const Landingpage = () => {
  return (
    <div style={{ backgroundImage:`url(${bg})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', maxWidth: '100%',overflowX:'hidden' }}>
    <div className="container">
      <header className="text-center">
        <Row>
          <Col>
            <h1 className="display-1 mt-5" >Welcome to Foodie Website</h1>
            <p className="lead fs-1 mt-5">Discover, Order and Ask </p>
            <Row>
              <Col>
            <Button className='gradient-bg fw-bold' style={{borderRadius:'10%'}}><Link to ='/login' className='text-decoration-none text-white'>Login here</Link></Button>
              </Col>
              <Col>
            <Button className='gradient-bg fw-bold' style={{borderRadius:'10%'}}><Link to ='/home' className='text-decoration-none text-white'>Navigate to Home</Link></Button>
              </Col>
            </Row>
          </Col>
          <Col>
            <img src={Img} alt="img" className="landing-image  mt-5" style={{height:'60vh',borderRadius:'50%'}} />
          </Col>
        </Row>
      </header>
      <section className="row  d-flex justify-content-center ">
      <div className="col-lg-3 mb-4 m-2 bg-danger text-center p-4" style={{borderRadius:'20%'}}>
        <h2>Explore Cuisines</h2>
        <p>Indulge in our tasty cuisines, a treat for your taste buds.</p>
        <a href="https://www.ibef.org/blogs/food-diversity-in-india" target='_blank' className='text-white'>
          <Button className='bg-dark'>Explore <FaArrowRight /></Button>
        </a>
      </div>

      <div className="col-lg-3 mb-4 m-2 bg-danger text-center p-4" style={{borderRadius:'20%'}}>
        <h2>Recipe Hub</h2>
        <p>Find inspiration in our extensive recipe hub for every home chef.</p>
        <a href="https://www.recipehub.in/" target='_blank' className='text-white'>
          <Button className='bg-dark'>Explore <FaArrowRight /></Button>
        </a>
      </div>

      <div className="col-lg-3 mb-4 m-2 bg-danger text-center p-4" style={{borderRadius:'20%'}}>
        <h2>Community</h2>
        <p>Join a passionate community of food enthusiasts.</p>
        <a href="https://www.foodlink.in/" target='_blank' className='text-white'>
          <Button className='bg-dark'>Join Now <FaArrowRight /></Button>
        </a>
      </div>
    </section>
    </div>
    </div>
  );
}

export default Landingpage;
