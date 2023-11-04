import React from 'react'
import Navbar from '../components/navbar'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'




const Home = () => {
 return(
  <div>
    <Navbar/>
    <div>
    <Carousel/>
    </div>
    <div>
      <h1>Top Reciepes of the Week</h1>
      <Card/>
    </div>
    
    {/* <Footer/> */}
  </div>
 )
}

export default Home
