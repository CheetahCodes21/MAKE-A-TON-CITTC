// import React from 'react';

// const restaurants = [
//   { place_id: 1, name: 'Restaurant 1', vicinty: '123 Dummy St' },
//   { place_id: 2, name: 'Restaurant 2', vicinty: '456 Dummy St' },
//   // Add as many restaurants as you need...
// ];

// const NearbyRestaurants = () => {
//   return (
//     <div>
//       <h1>Nearby Restaurants</h1>
//       {restaurants.map((restaurant) => (
//         <div key={restaurant.place_id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
//           <h2>{restaurant.name}</h2>
//           <p>{restaurant.vicinty}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NearbyRestaurants;

import React, { useState } from 'react';
import axios from 'axios';

const RestaurantFinder = () => {
  const [location, setLocation] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const searchNearbyRestaurants = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=1000&type=restaurant&key=YOUR_GOOGLE_MAPS_API_KEY`
      );

      setRestaurants(response.data.results);
    } catch (error) {
      console.error('Error fetching nearby restaurants:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Find Nearby Restaurants</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your location"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <button className="btn btn-primary" onClick={searchNearbyRestaurants}>
        Search
      </button>
      <div className="mt-3">
        {loading ? (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : restaurants.length > 0 ? (
          <ul className="list-group">
            {restaurants.map((restaurant, index) => (
              <li key={index} className="list-group-item">
                {restaurant.name}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default RestaurantFinder;
