import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
} from '../utils/cartSlice';

const Cart = () => {
  //
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item));
  };

  return (
    <div className="text-center  bg-gray-200">
      <h1 className="font-bold text-2xl pt-5">Cart</h1>
      <div className="flex">
        <div className="absolute left-34 top-82">
          <img
            className="h-10 w-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYbP-248zDkKcJG_swsx0pK2Hhe8hwE0fHQ&s"
          />
          <div className="border-l-2 border-dotted border-gray-400 h-68 ml-4"></div>
          <img
            className="h-10 w-10 shadow shadow-gray-400"
            src="data:image/png;base64,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"
          />
          <div className="border-l-2 border-dotted border-gray-400 h-22 ml-4"></div>
          <img
            className="h-10 w-10 shadow shadow-gray-400"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPsSPoBLbqwfdw3nvC5dmCpKji4rfRlGxohg&s"
          />
        </div>
        <div className=" w-7/10">
          <div className=" bg-white text-left  ml-40 mt-10 flex">
            <div className="mx-10 my-10 mr-80">
              <h1 className="font-bold text-2xl">Account</h1>
              <h4 className="text-gray-400 text-lg">
                To place your order now, log in to your existing account or sign
                up.
              </h4>
              <div className="mt-10 flex">
                <button className="border border-green-600 p-3 mr-5 px-7">
                  <h6 className="text-green-600">Have an account?</h6>
                  <h1 className="text-green-600 text-lg font-bold">LOG IN </h1>
                </button>
                <button className="bg-green-600 p-3 px-10.5 py-3.5 mr-5">
                  <h6 className="text-white">New to Muse?</h6>
                  <h1 className="text-white text-lg font-bold">SIGN UP</h1>
                </button>
              </div>
            </div>
            <div className="justify-end mt-10 mr-20">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGLT0Z1axK-zXsvV11JckqQ--eYbFByndgvg&s" />
            </div>
          </div>
          <div className="bg-white text-left ml-40 my-5 flex">
            <h1 className="font-bold text-2xl mx-10 my-10 mr-80 text-gray-400">
              Delivery Address
            </h1>
          </div>
          <div className="bg-white text-left ml-40 my-5 flex">
            <h1 className="font-bold text-2xl mx-10 my-10 mr-80 text-gray-400">
              Payment
            </h1>
          </div>
        </div>

        <div className="bg-white ml-10 mr-40 my-10 w-3/10">
          <div className="mt-5 ml-10 flex">
            <img
              className="h-25 w-25"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-nNiTVa29HQqfj_cQARHb7QhNrd5kaAF8mw&s"
            />
            <div>
              <h1 className="font-bold text-xl ml-5">Mogo Pizza </h1>
              <h2>Ahmedabad</h2>
              <div className=" w-20 h-2 border-b-5 border-black mt-8 ml-5"></div>
            </div>
            <div>
              {cartItems.length === 0 ? (
                <h1 className="ml-10 mt-15">Cart is Empty!</h1>
              ) : (
                <button
                  className="ml-30 mt-15 p-2 bg-black text-white "
                  onClick={handleClearCart}
                >
                  Clear Cart
                </button>
              )}
            </div>
          </div>
          {cartItems.map((item) => (
            <div
              key={item.card.info.id}
              className="flex ml-10 mt-10 items-center border-b border-black pb-5"
            >
              {item.card.info.isVeg === 1 ? (
                <span className="mr-5">🟢</span>
              ) : (
                <span>🔴</span>
              )}
              <div className="text-lg text-gray-600 text-left w-60 text-wrap">
                {item.card.info.name}
              </div>
              <div>₹{item.card.info.finalPrice / 100}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
