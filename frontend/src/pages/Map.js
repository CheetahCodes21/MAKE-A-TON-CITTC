import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NearbyRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const ipGeolocationApiKey = '21ebf50babe24ed085ea81457b5bbd3f'; // Replace with your IP Geolocation API key
  const googlePlacesApiKey = 'YOUR_GOOGLE_PLACES_API_KEY'; // Replace with your Google Places API key

  useEffect(() => {
    // Step 1: Use the IP Geolocation API to get latitude and longitude for the user's IP
    axios
      .get(`https://api.geoapify.com/v1/ipinfo?apiKey=${ipGeolocationApiKey}`)
      .then(function (response) {
        const { latitude, longitude } = response.data.location;

        // Step 2: Use the obtained latitude and longitude to find nearby restaurants
        const radius = 1000; // Radius in meters
        const type = 'restaurant';

        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${googlePlacesApiKey}`;

        axios
          .get(url)
          .then(function (response) {
            // Handle the response data which contains nearby restaurants
            setRestaurants(response.data.results);
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [ipGeolocationApiKey, googlePlacesApiKey]);

  return (
    <div>
      <h1>Nearby Restaurants</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.place_id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NearbyRestaurants;
