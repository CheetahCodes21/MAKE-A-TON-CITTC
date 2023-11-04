import React from 'react'
import Navbar from '../components/navbar'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import WoodBg from '../Assets/cards/woodbg.jpg'
import Cards from '../components/card'
import VideoSlider from '../components/VideoSlider'

const restaurants = [
  {
    id: 0,
    name: 'Restaurant 1',
    description: 'Description for Restaurant 1',
    image: WoodBg // Replace 'restaurant1.jpg' with the actual image file name or URL
  },
  {
    id: 1,
    name: 'Restaurant 2',
    description: 'Description for Restaurant 2',
    image: WoodBg // Replace 'restaurant2.jpg' with the actual image file name or URL
  },
  {
    id: 2,
    name: 'Restaurant 3',
    description: 'Description for Restaurant 3',
    image: WoodBg// Replace 'restaurant3.jpg' with the actual image file name or URL
  },
  {
    id: 3,
    name: 'Restaurant 4',
    description: 'Description for Restaurant 4',
    image: WoodBg// Replace 'restaurant3.jpg' with the actual image file name or URL
  },
  {
    id: 4,
    name: 'Restaurant 5',
    description: 'Description for Restaurant 5',
    image: WoodBg// Replace 'restaurant3.jpg' with the actual image file name or URL
  },
  {
    id: 5,
    name: 'Restaurant 6',
    description: 'Description for Restaurant 6',
    image: WoodBg// Replace 'restaurant3.jpg' with the actual image file name or URL
  },
  {
    id: 6,
    name: 'Restaurant 7',
    description: 'Description for Restaurant 7',
    image: WoodBg// Replace 'restaurant3.jpg' with the actual image file name or URL
  },
  {
    id: 7,
    name: 'Restaurant 8',
    description: 'Description for Restaurant 8',
    image: WoodBg// Replace 'restaurant3.jpg' with the actual image file name or URL
  },
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
    {/* <div className='bg-black'>
      <h1 className='text-white text-center'>Top Restaurants of the Week</h1>
      <div className="container">
      {restaurants.map(restaurant => (
  <article className="restaurant" key={restaurant.id}>
    <img style={{maxHeight:'300px' , maxWidth:'300px'}} src={restaurant.image} alt={`Photo of ${restaurant.name}`} />

    <div className="restaurant-info">
      <h2 className="restaurant-name">{restaurant.name}</h2>
      <p>{restaurant.description}</p>

      <a href={`/restaurants/${restaurant.id}`}>
        View Menu
      </a>
    </div>
  </article>
))}
      </div>
    </div> */}
    <div className='bg-black'>
  <h1 className='text-white text-center'>Top Restaurants of the Week</h1>
  <div className="container">
    <div className="row">
      {restaurants.map(restaurant => (
        <div className="col-lg-3  col-md-4 col-sm-6 mb-4" key={restaurant.id}>
          <div className="restaurant">
            <img className="img-fluid" style={{ maxHeight: '300px', maxWidth: '100%' }} src={restaurant.image} alt={`Photo of ${restaurant.name}`} />
            <div className="restaurant-info overlay">
              <h2 className="restaurant-name">{restaurant.name}</h2>
              <p>{restaurant.description}</p>
              <a href={`/restaurants/${restaurant.id}`}>
                View Menu
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
   <div className='bg-black'>
   <h1 className='text-white text-center'>Recommendation</h1>
   <VideoSlider/>
   </div>

    {/* <Footer/> */}
  </div>
 )
}

export default Home
