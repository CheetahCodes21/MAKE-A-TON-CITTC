import React from 'react'
import Navbar from '../components/navbar'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import WoodBg from '../Assets/cards/woodbg.jpg'
import Cards from '../components/card'




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
    <div>
      <h1 className='text-white text-center'>Top Restaurant of the week</h1>
    </div>
    {/* <Footer/> */}
  </div>
 )
}

export default Home
