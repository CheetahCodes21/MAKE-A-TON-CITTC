import React, { useState } from 'react';

const restaurantData = {
  "places": [
    {
      "placeName": "Mumbai",
      "restaurants": [
        {
          "restaurantName": "The Taj Mahal Palace",
          "speciality": "Indian and International Cuisine"
        },
        {
          "restaurantName": "Leopold Cafe",
          "speciality": "Multi-Cuisine"
        },
        {
          "restaurantName": "Britannia & Co.",
          "speciality": "Parsi Cuisine"
        },
        {
          "restaurantName": "Gajalee",
          "speciality": "Seafood"
        },
        {
          "restaurantName": "Dishkiyaoon",
          "speciality": "Modern Indian"
        }
      ]
    },
    {
      "placeName": "Delhi",
      "restaurants": [
        {
          "restaurantName": "Indian Accent",
          "speciality": "Modern Indian"
        },
        {
          "restaurantName": "Karim's",
          "speciality": "Mughlai Cuisine"
        },
        {
          "restaurantName": "Paranthe Wali Gali",
          "speciality": "Street Food"
        },
        {
          "restaurantName": "Bukhara",
          "speciality": "North Indian Cuisine"
        },
        {
          "restaurantName": "Pind Balluchi",
          "speciality": "Punjabi Cuisine"
        }
      ]
    },
    {
      "placeName": "Bangalore",
      "restaurants": [
        {
          "restaurantName": "Karavalli",
          "speciality": "Coastal South Indian"
        },
        {
          "restaurantName": "Toit Brewpub",
          "speciality": "Craft Beer and Pub Food"
        },
        {
          "restaurantName": "Mavalli Tiffin Room (MTR)",
          "speciality": "South Indian Vegetarian"
        },
        {
          "restaurantName": "Windmills Craftworks",
          "speciality": "International Cuisine"
        },
        {
          "restaurantName": "Vidyarthi Bhavan",
          "speciality": "South Indian Breakfast"
        }
      ]
    },
    {
      "placeName": "Jaipur",
      "restaurants": [
        {
          "restaurantName": "Suvarna Mahal",
          "speciality": "Rajasthani Cuisine"
        },
        {
          "restaurantName": "Lakshmi Misthan Bhandar",
          "speciality": "Rajasthani Sweets"
        },
        {
          "restaurantName": "Niros",
          "speciality": "Multi-Cuisine"
        },
        {
          "restaurantName": "Handi",
          "speciality": "North Indian and Mughlai"
        },
        {
          "restaurantName": "Chokhi Dhani",
          "speciality": "Rajasthani Village Experience"
        }
      ]
    },
    {
      "placeName": "Chennai",
      "restaurants": [
        {
          "restaurantName": "Saravana Bhavan",
          "speciality": "South Indian Vegetarian"
        },
        {
          "restaurantName": "Murugan Idli Shop",
          "speciality": "Idli and Dosa"
        },
        {
          "restaurantName": "A2B - Adyar Ananda Bhavan",
          "speciality": "South Indian Fast Food"
        },
        {
          "restaurantName": "Kaiyendhi Bhavan",
          "speciality": "Tamil Nadu Cuisine"
        },
        {
          "restaurantName": "Dakshin",
          "speciality": "South Indian Coastal Cuisine"
        }
      ]
    },
    {
      "placeName": "Kolkata",
      "restaurants": [
        {
          "restaurantName": "Peter Cat",
          "speciality": "Continental and Chelo Kebabs"
        },
        {
          "restaurantName": "Oh! Calcutta",
          "speciality": "Bengali Cuisine"
        },
        {
          "restaurantName": "Flurys",
          "speciality": "Bakery and Confectionery"
        },
        {
          "restaurantName": "Bhojohori Manna",
          "speciality": "Bengali Comfort Food"
        },
        {
          "restaurantName": "Kewpie's Kitchen",
          "speciality": "Bengali Home-Style Cooking"
        }
      ]
    },
    {
      "placeName": "Goa",
      "restaurants": [
        {
          "restaurantName": "Gunpowder",
          "speciality": "South Indian and Goan Fusion"
        },
        {
          "restaurantName": "Fisherman's Wharf",
          "speciality": "Goan Seafood"
        },
        {
          "restaurantName": "Cafe Alchemia",
          "speciality": "European and Goan Cuisine"
        },
        {
          "restaurantName": "Vinayak Family Restaurant",
          "speciality": "Traditional Goan Dishes"
        },
        {
          "restaurantName": "A Reverie",
          "speciality": "Modern European with Goan Twist"
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
    <div className="container mt-5">
      <h1 className="text-center">Restaurant Search</h1>
      <div className="form-group">
        <label htmlFor="placeSelect">Select a Place:</label>
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
        <div>
          <h2 className="mt-4">Restaurants in {selectedPlace.placeName}</h2>
          <div className="row">
            {selectedPlace.restaurants.map((restaurant, index) => (
              <div key={index} className="col-md-4">
                <div className="card mb-4">
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
  );
};

export default RestaurantSearch;
