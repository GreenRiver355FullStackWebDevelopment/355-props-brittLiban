import Restaurant from "./Restaurant.jsx";
import { restaurants } from '../data/data.js'

function RestaurantContainer() {
    return (
      
      <div className="restaurantContainer">
        {restaurants.map((restaurant) => (
            //passing it as a prop
          <Restaurant restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    );
  }
  
export default RestaurantContainer


