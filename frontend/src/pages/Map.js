import React from 'react';

const restaurants = [
  { place_id: 1, name: 'Restaurant 1', vicinty: '123 Dummy St' },
  { place_id: 2, name: 'Restaurant 2', vicinty: '456 Dummy St' },
  // Add as many restaurants as you need...
];

const NearbyRestaurants = () => {
  return (
    <div>
      <h1>Nearby Restaurants</h1>
      {restaurants.map((restaurant) => (
        <div key={restaurant.place_id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
          <h2>{restaurant.name}</h2>
          <p>{restaurant.vicinty}</p>
        </div>
      ))}
    </div>
  );
};

export default NearbyRestaurants;