import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;

  const { info } = resData;

  return (
    <div className="m-7 p-4 w-[250px] bg-gray-100 rounded-lg h-95 hover:shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-105 flex flex-col hover:bg-gray-200">
      <img
        className="h-40 w-55 rounded-lg justify-center items-center"
        src={CDN_URL + info?.cloudinaryImageId}
        alt="res-img"
      />
      <h3 className="font-bold py-4 text-lg">{info?.name}</h3>
      <h4>{info?.cuisines}</h4>
      <h4>{info?.avgRating} stars</h4>
      <h4>{info?.sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
