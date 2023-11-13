import React,{useState,useEffect} from 'react'
import Navbar from '../components/navbar'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import WoodBg from '../Assets/cards/woodbg.jpg'
import Img from '../Assets/cards/brown.jpg'
import Img2 from '../Assets/background/orangebg.jpg'
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
];


const Home = () => {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    fetchData();
  }, []);
 return(
  <div>
      {loading && (
          <div className="d-flex justify-content-center mt-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {!loading && (
          <div>
        <Navbar/>
       <Carousel/>
  
    <div style={{ backgroundImage:`url(${WoodBg})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', maxWidth: '100%' }}>
      {/* <h1 className='text-white text-center' style={{ backgroundImage:`url(${WoodBg})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', maxWidth: '100%' }}>Top Reciepes of the Week</h1> */}
      <h1 className='text-white bg-black p-3 text-center'>Top Foods of the Week</h1>

      <Cards/>
    </div>
   <div style={{ backgroundImage:`url(${Img})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', maxWidth: '100%' }}>
  <h1 className='text-white text-center bg-black p-3'>Top Restaurants of the Week</h1>
  <div className="container">
    <div className="row">
      {restaurants.map(restaurant => (
        <div className="col-lg-3  col-md-4 col-sm-6 mb-4 mt-3" key={restaurant.id}>
          <div className="restaurant">
            <img className="img-fluid" loading='lazy' style={{ maxHeight: '300px', maxWidth: '100%' }} src={restaurant.image} alt={`Photo of ${restaurant.name}`} />
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
  <div style={{ backgroundImage:`url(${Img2})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', maxWidth: '100%' }}>
   <h1 className='text-white bg-black p-3 text-center'>Recommendation</h1>
   <VideoSlider/>
   </div>

    <Footer/>
    </div>
      )}
  </div>
 )
}

export default Home
