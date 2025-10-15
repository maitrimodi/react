import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;

  const { info } = resData;

  return (
    <div className="res-card">
      <img
        className="res-img"
        src={CDN_URL + info?.cloudinaryImageId}
        alt="res-img"
      />
      <h3>{info?.name}</h3>
      <h4>{info?.cuisines}</h4>
      <h4>{info?.avgRating} stars</h4>
      <h4>{info?.sla?.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
