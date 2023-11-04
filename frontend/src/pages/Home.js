import React from 'react'
import Navbar from '../components/navbar'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import WoodBg from '../Assets/cards/woodbg.jpg'
import Cards from '../components/card'

const restaurants = [
  { id: 1, name: 'Restaurant 1', description: 'Description for Restaurant 1' },
  { id: 2, name: 'Restaurant 2', description: 'Description for Restaurant 2' },
  // Add more restaurant objects as needed
];


const Home = () => {
 return(
  <div>
    <Navbar/>
    <div>
    <Carousel/>
    </div>
    <div style={{ backgroundImage:`url(${WoodBg})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', maxWidth: '100%' }}>
      <h1 className='text-white text-center'>Top Reciepes of the Week</h1>
      <Cards/>
    </div>
    <div className='bg-black'>
      <h1 className='text-white text-center'>Top Restaurants of the Week</h1>
      <div className="container">
      {restaurants.map(restaurant => (
  <div className="col-md-3 col-sm-6 mb-4" key={restaurant.id}>
    <div className="card position-relative">
      <img src={WoodBg} alt="Background" className="card-img-top" />
      <div className="overlay position-absolute w-100 h-100 d-none">
        <div className="card-body">
          <h5 className="card-title">{restaurant.name}</h5>
          <p className="card-text">{restaurant.description}</p>
        </div>
      </div>
    </div>
  </div>
))}


      </div>
    </div>
    {/* <Footer/> */}
  </div>
 )
}

export default Home
