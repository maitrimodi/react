import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
    console.log('params', resId);
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API);
    const json = await data.json();
    setResInfo(json);
    console.log('menu', json);
  };

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
