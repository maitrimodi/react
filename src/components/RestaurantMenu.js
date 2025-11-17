import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { CDN_URL } from '../utils/constants';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const dummy = 'Dummy Data';
  const [showIndex, setShowIndex] = useState(1);
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  console.log('ESINFO', resInfo);

  const categories =
    resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

  console.log('categories', categories);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-extrabold ml-5 my-6">{name}</h1>
      <p className="text-lg">
        {cuisines.join(',')} - {costForTwoMessage}
      </p>

      {/* categories accordions */}
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          data={category?.card?.card}
          key={index}
          showItems={index === showIndex}
          setShowIndex={() =>
            setShowIndex((prevIndex) => (prevIndex === index ? null : index))
          }
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
