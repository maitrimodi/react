import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>Muse</h1>
      <h2>Menu</h2>
      <ul>
        {resInfo.map((item) => (
          <li key={item.id}>
            <img
              src={item.img}
              style={{
                height: '90px',
                width: '90px',
                marginTop: '10px',
                marginLeft: '15px',
              }}
            />
            <div
              style={{
                display: 'inline-block',
                marginLeft: '20px',
              }}
            >
              {item.name} - ${item.price} (Price for two)
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
