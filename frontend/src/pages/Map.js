import Img from '../Assets/background/res.jpg'
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const restaurantData = {
  "places": [
    {
      "placeName": "Mumbai",
      "restaurants": [
        {
          "restaurantName": "The Taj Mahal Palace",
          "speciality": "Indian and International Cuisine",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMMiT0ZQ_4vDcdtoPB4o1t8uTAqgcYR2fJUg&usqp=CAU"
        },
        {
          "restaurantName": "Leopold Cafe",
          "speciality": "Multi-Cuisine",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHWUIA4IlBUUXTPfqvAtFMXxCQXhp8hH52w&usqp=CAU"
        },
        {
          "restaurantName": "Britannia & Co.",
          "speciality": "Parsi Cuisine",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3NCet3kGlS6MIvE5FsmQyhcxueB29GiEmAw&usqp=CAU"
        },
        {
          "restaurantName": "Gajalee",
          "speciality": "Seafood",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT61FeEoq1usBwme_ebQ-n66iH1_Dy_mAufyg&usqp=CAU"
        },
        {
          "restaurantName": "Dishkiyaoon",
          "speciality": "Modern Indian",
          "image":"https://media-cdn.tripadvisor.com/media/photo-s/14/fe/b5/bf/dishkiyaoon-restaurant.jpg"
        }
      ]
    },
    {
      "placeName": "Delhi",
      "restaurants": [
        {
          "restaurantName": "Indian Accent",
          "speciality": "Modern Indian",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStHeQ9WVmIHe0djDc5kR7tCCVLNYPRfgPzGg&usqp=CAU"
        },
        {
          "restaurantName": "Karim's",
          "speciality": "Mughlai Cuisine",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToe8JzBiruOMrok2dTB3fc-Ii2dR1o0XOTag&usqp=CAU"
        },
        {
          "restaurantName": "Paranthe Wali Gali",
          "speciality": "Street Food",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGa6-2G2pgTLhd8WPKgh430x3cMR0IU-WFHg&usqp=CAU"
        },
        {
          "restaurantName": "Bukhara",
          "speciality": "North Indian Cuisine",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnxvL57gIU4Bphd07vuRflQaQ7NLTX9dZqvw&usqp=CAU"
        },
        {
          "restaurantName": "Pind Balluchi",
          "speciality": "Punjabi Cuisine",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4fjA3pe86syfOYPct8oCV-1r5_2bBOzcLw&usqp=CAU"
        }
      ]
    },
    {
      "placeName": "Bangalore",
      "restaurants": [
        {
          "restaurantName": "Karavalli",
          "speciality": "Coastal South Indian",
          "image":"https://media-cdn.tripadvisor.com/media/photo-s/1b/2d/2f/94/karavalli-garden.jpg"
        },
        {
          "restaurantName": "Toit Brewpub",
          "speciality": "Craft Beer and Pub Food",
          "image":"https://lh3.googleusercontent.com/p/AF1QipNk2vKv5n3hfpLVbF9GJLbZIzgNvFWN4ScBnfPX=s1360-w1360-h1020"
        },
        {
          "restaurantName": "Mavalli Tiffin Room (MTR)",
          "speciality": "South Indian Vegetarian",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHAw__9cnxhRlk7_cGQcJJpNCQuT1ucqkL7A&usqp=CAU"
        },
        {
          "restaurantName": "Windmills Craftworks",
          "speciality": "International Cuisine",
          "image":"https://media-cdn.tripadvisor.com/media/photo-s/03/68/3f/57/windmills-craftworks.jpg"
        },
        {
          "restaurantName": "Vidyarthi Bhavan",
          "speciality": "South Indian Breakfast",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUePKWxDlCRwa76fpaONpWM8NiryAU9XYExA&usqp=CAU"
        }
      ]
    },
    {
      "placeName": "Jaipur",
      "restaurants": [
        {
          "restaurantName": "Suvarna Mahal",
          "speciality": "Rajasthani Cuisine",
          "image":"https://media-cdn.tripadvisor.com/media/photo-s/13/4f/f6/f0/suvarna-mahal-royal-indian.jpg"
        },
        {
          "restaurantName": "Lakshmi Misthan Bhandar",
          "speciality": "Rajasthani Sweets",
          "image":"https://i.ytimg.com/vi/P-AQRb07jjw/sddefault.jpg"
        },
        {
          "restaurantName": "Niros",
          "speciality": "Multi-Cuisine",
          "image":"https://hblimg.mmtcdn.com/content/hubble/img/jaipur/mmt/activities/m_activities_jaipur_niros_2_l_399_532.jpg"
        },
        {
          "restaurantName": "Handi",
          "speciality": "North Indian and Mughlai",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnm4dmFCNiz2rBPY3rVfMH5RKu50TDJDN3Q&usqp=CAU"
        },
        {
          "restaurantName": "Chokhi Dhani",
          "speciality": "Rajasthani Village Experience",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY7MZ1UtuUbXVC_TOGFOCjtgXKF0rYOMUNrA&usqp=CAU"
        }
      ]
    },
    {
      "placeName": "Chennai",
      "restaurants": [
        {
          "restaurantName": "Saravana Bhavan",
          "speciality": "South Indian Vegetarian",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvB5UdqQSQ3TS0Wv317-vgmguSnzvWp_PipA&usqp=CAU"
        },
        {
          "restaurantName": "Murugan Idli Shop",
          "speciality": "Idli and Dosa",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFGPyaCMdcJQH4YMEEcB3UNBGVKwFP5Ff0Gw&usqp=CAU"
        },
        {
          "restaurantName": "A2B - Adyar Ananda Bhavan",
          "speciality": "South Indian Fast Food",
          "image":"https://content.jdmagicbox.com/comp/delhi/y4/011pxx11.xx11.170828174146.g5y4/catalogue/a2b-veg-restaurant-green-park-delhi-restaurants-hsohx.jpg"
        },
        {
          "restaurantName": "Kaiyendhi Bhavan",
          "speciality": "Tamil Nadu Cuisine",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7y8HccbqMluF_al1Yke3P6Rpz9ZtRVaE8gzBCAPtnXBXlLRTyd6yX4-11SZxfg-Er6io&usqp=CAU"
        },
        {
          "restaurantName": "Dakshin",
          "speciality": "South Indian Coastal Cuisine",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAOBrKiNAijHnJ3hthTLOFrHlgwPIp1lFDrw&usqp=CAU"
        }
      ]
    },
    {
      "placeName": "Kolkata",
      "restaurants": [
        {
          "restaurantName": "Peter Cat",
          "speciality": "Continental and Chelo Kebabs",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6wZm8InMfQvBjVV6yOkJsPdaPTxzcNKg84g&usqp=CAU"
        },
        {
          "restaurantName": "Oh! Calcutta",
          "speciality": "Bengali Cuisine",
          "image":"https://mytastetest.files.wordpress.com/2015/07/img_20141130_140656.jpg?w=300"
        },
        {
          "restaurantName": "Flurys",
          "speciality": "Bakery and Confectionery",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi0F6KYNZYc0g34XLWmPJ_f2dUpAoKrmDTs4ezWvjpzz2EtVpVnkzmkGm5ntPC9fmNj_E&usqp=CAU"
        },
        {
          "restaurantName": "Bhojohori Manna",
          "speciality": "Bengali Comfort Food",
          "image":"https://media-cdn.tripadvisor.com/media/photo-s/0f/e5/55/b2/photo2jpg.jpg"
        },
        {
          "restaurantName": "Kewpie's Kitchen",
          "speciality": "Bengali Home-Style Cooking",
          "image":"https://lh5.googleusercontent.com/p/AF1QipN-56GoAfzmojB4KWA02bCfYg2ZvcWm-atEwr8r=w141-h176-n-k-no-nu"
        }
      ]
    },
    {
      "placeName": "Goa",
      "restaurants": [
        {
          "restaurantName": "Gunpowder",
          "speciality": "South Indian and Goan Fusion",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROUxXktnxWEHH6ogJrp_DkrGk1zBku10urxA&usqp=CAU"
        },
        {
          "restaurantName": "Fisherman's Wharf",
          "speciality": "Goan Seafood",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9562sjSzhuHR1L4YM_AqcE5V6XUbj3CpoEQ&usqp=CAU"
        },
        {
          "restaurantName": "Cafe Alchemia",
          "speciality": "European and Goan Cuisine",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf265vFQWAqm345_sWiAYMp6NW_-sO3PeOEA&usqp=CAU"
        },
        {
          "restaurantName": "Vinayak Family Restaurant",
          "speciality": "Traditional Goan Dishes",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStmKgW-_b4kWMNDlTSLOOlfApZsYlIoEcvBQ&usqp=CAU"
        },
        {
          "restaurantName": "A Reverie",
          "speciality": "Modern European with Goan Twist",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9V-LMMHbxcS3AnxQL4HpUp6q2xCIJCZ-qCYAjlVBQUnoOAqrMmoSdA3UVchr7Cc6nEAU&usqp=CAU"
        }
      ]
    }
  ]
}


const RestaurantSearch = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handlePlaceChange = (e) => {
    const selectedPlaceName = e.target.value;
    const selectedPlace = restaurantData.places.find(place => place.placeName === selectedPlaceName);
    setSelectedPlace(selectedPlace);
  };

  return (
    <div>
    <div style={{minHeight:'100vh', backgroundImage:`url(${Img})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', maxWidth: '100%' }}>
    <Navbar/>
    <div className="container mt-5 ">
      <h1 className="text-center  text-white" style={{borderRadius:'20%'}}><span className='bg-black p-1'>Restaurant Search</span></h1>
      <div className="form-group bg-success p-2">
        <label htmlFor="placeSelect ">Select a Place:</label>
        <select
          className="form-control"
          id="placeSelect"
          onChange={handlePlaceChange}
        >
          <option value="">-- Select a Place --</option>
          {restaurantData.places.map(place => (
            <option key={place.placeName} value={place.placeName}>
              {place.placeName}
            </option>
          ))}
        </select>
      </div>
      {selectedPlace && (
        <div className=' text-white p-3'>
          <h2 className=" p-2"><span className='bg-black p-2'>Restaurants in {selectedPlace.placeName}</span></h2>
          <div className="row">
            {selectedPlace.restaurants.map((restaurant, index) => (
              <div key={index} className="col-md-4">
                <div className="card mb-4">
                <img src={restaurant.image} className="card-img-top" alt={restaurant.restaurantName} style={{maxHeight:'230px'}} />
                  <div className="card-body">
                    <h3 className="card-title">{restaurant.restaurantName}</h3>
                    <p className="card-text">Speciality: {restaurant.speciality}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
    <Footer/>
    </div>
  
  );
};

export default RestaurantSearch;

// import React, { useState } from 'react'

// import Card from 'react-bootstrap/Card'


// const Fooddata = [
//   {
//       id: 1,
//       rname: "Massala Theoryy",
//       imgdata: "https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp",
//       address: "North Indian, Biryani, Mughlai",
//       delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
//       somedata: " 1175 + order placed from here recently",
//       price: "₹350 for one",
//       rating: "3.8",
//       arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
//       category:"punjabi"
//   },
//   {
//       id: 2,
//       rname: "Jugaadi Adda",
//       imgdata: "https://b.zmtcdn.com/data/pictures/chains/5/19295245/089cbcf1d3307542c72f77272556b28b_o2_featured_v2.jpg?output-format=webp",
//       address: "Street Food",
//       delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
//       somedata: " 2525 + order placed from here recently",
//       price: "₹25 for one",
//       rating: "3.9",
//       arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
//       category:"vadapav"
//   },
//   {
//       id: 3,
//       rname: "La Milano Pizzeria",
//       imgdata: "https://b.zmtcdn.com/data/pictures/chains/1/19708611/10f90d4a69678d98662514d173b29665_o2_featured_v2.jpg",
//       address: "Pizza, Fast Food, Pasta",
//       delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
//       somedata: " 650 + order placed from here recently",
//       price: "₹70 for one",
//       rating: "4.2",
//       arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
//       category:"Pizza"
//   },
//   {
//       id: 4,
//       rname: "Momoman",
//       imgdata: "https://b.zmtcdn.com/data/pictures/chains/1/113401/59f29399060caefcc575d59dc9402ce8_o2_featured_v2.jpg",
//       address: "Momos",
//       delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
//       somedata: " 300 + order placed from here recently",
//       price: "₹70 for one",
//       rating: "3.8",
//       arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
//       category:"Momos"
//   },
//   {
//       id: 5,
//       rname: "Jassi De Parathe",
//       imgdata: "https://b.zmtcdn.com/data/pictures/chains/5/110225/3978e28854b7496dbef9496546734811_o2_featured_v2.jpg",
//       address: "North Indian",
//       delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
//       somedata: "1050 + order placed from here recently",
//       price: "₹210 for one",
//       rating: "4.0",
//       arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
//       category:"punjabi"
//   },
//   {
//       id: 6,
//       rname: "Anjoy Latenight Meals",
//       imgdata: "https://b.zmtcdn.com/data/pictures/5/113895/3c06f6fbb8f667a2537dfdb6f060dc8b_o2_featured_v2.jpg",
//       address: "Wraps FastFood, Chines",
//       delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
//       somedata: " 1100 + order placed from here recently",
//       price: "₹100 for one",
//       rating: "3.8",
//       arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
//       category:"Frankie"
//   },
//   {
//       id: 7,
//       rname: "Hocco Eatery",
//       imgdata: "https://b.zmtcdn.com/data/pictures/chains/5/110155/811c01a5430d50d3260f77917da99e12_o2_featured_v2.jpg",
//       address: "North Indian, Fast Food",
//       delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
//       somedata: "500 + order placed from here recently",
//       price: "₹300 for one",
//       rating: "3.8",
//       arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
//       category:"punjabi"
//   },
//   {
//       id: 8,
//       rname: "Chai Wai",
//       imgdata: "https://b.zmtcdn.com/data/pictures/3/18514413/0a17b72e9fec52a3ca736f4c2ea3646f_o2_featured_v2.jpg",
//       address: "Tea, Coffee, Shake, Beverages",
//       delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
//       somedata: "500 + order placed from here recently",
//       price: "₹100 for one",
//       rating: "3.2",
//       arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
//       category:"Chai"
//   },
//   {
//       id: 9,
//       rname: "HL Frankie",
//       imgdata: "https://b.zmtcdn.com/data/pictures/7/19639627/94c0a4cf15c02d3982d154e2c5dd8cbb_o2_featured_v2.jpg",
//       address: "Burger, Sandwich, Fast Food",
//       delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
//       somedata: "2525 + order placed from here recently",
//       price: "₹100 for one",
//       rating: "3.8",
//       arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
//       category:"Frankie"
//   },
// ];


// const RestaurantSearch = () => {

//     const [menu, setMenu] = useState(Fooddata);

//     const filteritems = (curitems) => {
//         const updateitems = Fooddata.filter((cur) => {
//             return cur.category === curitems;
//         })
//         setMenu(updateitems);
//     };

//     return (
//         <>
//             <section className='iteam_section mt-2 container'>
//                 <h2 className='text-center mb-2' style={{ fontWeight: 400 }}>Search Your Food</h2>

//                 <div className="btn-container d-flex justify-content-around mt-2">
//                     <button className="btn btn-danger" onClick={() => filteritems("punjabi")}>Punjabi</button>
//                     <button className="btn btn-primary" onClick={() => filteritems("vadapav")}>vadapav</button>
//                     <button className="btn btn-success" onClick={() => filteritems("Pizza")}>Pizza</button>
//                     <button className="btn btn-danger" onClick={() => filteritems("Chai")}>Chai</button>
//                     <button className="btn btn-primary" onClick={() => filteritems("Frankie")}>Frankie</button>
//                     <button className="btn btn-primary" onClick={() => setMenu(Fooddata)}>All</button>
//                 </div>

//                 <div className='container mt-3'>
//                     <div className="row d-flex justify-content-center align-items-center">
//                         {menu.map((e) => {
//                             return (
//                                 <>
//                                     <Card key={e.id} style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style" >
//                                         <Card.Img variant="top" src={e.imgdata} style={{ height: "16rem" }} className='mt-3' />
//                                         <Card.Body>
//                                             <Card.Title>{e.rname}</Card.Title>
//                                             <Card.Text>
//                                                 Price :  {e.price}
//                                             </Card.Text>
//                                         </Card.Body>
//                                     </Card>
//                                 </>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default RestaurantSearch;