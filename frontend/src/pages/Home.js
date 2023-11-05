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
    name: 'Central',
    image:'https://www.theworlds50best.com/filestore/jpg/W50BR23-1-50-List-Central-interior.jpg',
    Link:'https://www.theworlds50best.com/the-list/1-10/central.html'
  },
  {
    id: 1,
    name: 'Disfrutar',
    image: 'https://www.theworlds50best.com/filestore/jpg/W50BR23-1-50-List-Disfrutar-Interior.jpg',
    Link:'https://www.theworlds50best.com/the-list/1-10/disfrutar.html'
  },
  {
    id: 2,
    name: 'Diverxo',
    image:'https://www.theworlds50best.com/filestore/jpg/W50BR23-1-50-List-Diverxo-interior.jpg',
    Link:'https://www.theworlds50best.com/the-list/1-10/diverxo.html'
  },
  {
    id: 3,
    name: 'Asador Etxebarri',
    image:'https://www.theworlds50best.com/filestore/jpg/W50BR23-1-50-List-Asador-Etxebarri-interior.jpg',
    Link:'https://www.theworlds50best.com/the-list/1-10/asador-etxebarri.html'
  },
  {
    id: 4,
    name: 'Alchemist',
    image: 'https://www.theworlds50best.com/filestore/jpg/W50BR23-1-50-List-Alchemist-interior.jpg',
    Link:'https://www.theworlds50best.com/the-list/1-10/alchemist.html'
  },
  {
    id: 5,
    name: 'Maido',
    image: 'https://www.theworlds50best.com/filestore/jpg/W50BR23-1-50-List-Maido-Interior.jpg',
    Link:'https://www.theworlds50best.com/the-list/1-10/maido.html'
  },
  {
    id: 6,
    name: 'Lido 84',
    image: 'https://www.theworlds50best.com/filestore/jpg/W50BR23-1-50-List-Lido84-interior.jpg',
    Link:'https://www.theworlds50best.com/the-list/1-10/lido-84.html'
  },
  {
    id: 7,
    name: 'Atomix',
    image: 'https://www.theworlds50best.com/filestore/jpg/W50BR23-1-50-List-Atomix-interior.jpg',
    Link:'https://www.theworlds50best.com/the-list/1-10/atomix.html'
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
              <a href={restaurant.Link} className='text-decoration-none text-white'>
                Visit
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

    <Footer/>
  </div>
 )
}

export default Home
