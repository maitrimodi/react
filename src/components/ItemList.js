import { CDN_URL } from '../utils/constants';

const ItemList = ({ items, dummy }) => {
  console.log('items data', items, dummy);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between my-15 border-b py-10"
        >
          <div className="flex flex-col text-left">
            <div className="justify-start my-4">
              {item.card.info.isVeg === 1 ? (
                <span className="p-0.5 border-4 border-green-400 rounded-lg">
                  🟢
                </span>
              ) : (
                <span className="p-0.5 border-4 border-red-400 rounded-lg">
                  🔴
                </span>
              )}
            </div>
            <div className="text-xl font-bold">{item.card.info.name}</div>
            <div>
              <span className="line-through text-gray-500 mr-2">
                ₹{item.card.info.price / 100}
              </span>
              <span className="font-bold">
                ₹{item.card.info.finalPrice / 100}
              </span>
            </div>
            <div>
              {item.card.info.ratings?.aggregatedRating?.rating ? (
                <div>
                  ★ {item.card.info.ratings?.aggregatedRating?.rating}(
                  {item.card.info.ratings?.aggregatedRating?.ratingCount})
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="text-xl">{item.card.info.description}</div>
          </div>
          <div className="absoulte">
            <img
              className="h-30 w-35 rounded-lg block"
              src={CDN_URL + item.card.info.imageId}
            />
            <button className="p-2 px-8 border rounded-lg font-bold text-green-600 shadow-lg my-2">
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
