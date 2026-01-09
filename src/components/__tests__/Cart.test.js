import { act } from 'react';
import RestaurantMenu from '../RestaurantMenu';
import Header from '../Header';
import Cart from '../Cart';
import { fireEvent, render, screen } from '@testing-library/react';
import MOCK_DATA from '../mocks/mockResMenu.json';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import '@testing-library/jest-dom';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it('Should load restaurant menu component', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText('Burger (5)');
  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId('foodItems');
  expect(foodItems.length).toBe(5);

  const addButton = screen.getAllByRole('button', { name: 'ADD' });
  fireEvent.click(addButton[0]);
  fireEvent.click(addButton[1]);
  fireEvent.click(addButton[2]);

  const cartItems = screen.getByText('3');
  expect(cartItems).toBeInTheDocument();

  expect(screen.getAllByTestId('cartItems').length).toBe(3);

  const clearCartBtn = screen.getByRole('button', { name: 'Clear Cart' });
  fireEvent.click(clearCartBtn);

  expect(screen.getByText('Cart is Empty!')).toBeInTheDocument();
});
