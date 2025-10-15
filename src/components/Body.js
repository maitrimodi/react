import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://pastebin.com/raw/0QcdEDBL');

    const json = await data.json();

    // optional chaining
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
    const filteredOutput = listOfRestaurants.filter(
      (res) => res.name == event.target.value
    );
    setListOfRestaurants(filteredOutput);
  };

  // conditional rendering

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.rating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={handleSearch}
        />
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
