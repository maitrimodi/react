import { fireEvent, render, screen } from '@testing-library/react';
import Body from '../Body';
import '@testing-library/jest-dom';
import MOCK_DATA from '../mocks/mockResListData.json';
import { act } from 'react';
import { BrowserRouter } from 'react-router-dom';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it('Should Search Res List for pizza input', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const cardsBeforeSearch = screen.getAllByTestId('resCard');
  expect(cardsBeforeSearch.length).toBe(8);

  const searchBtn = screen.getByRole('button', { name: 'Search' });

  const searchInput = screen.getByTestId('searchInput');

  fireEvent.change(searchInput, { target: { value: 'pizza' } });
  fireEvent.click(searchBtn);

  // screen should load 1 card

  const resCards = screen.getAllByTestId('resCard');
  expect(resCards.length).toBe(1);
});

it('Should Filter top rated restaurants', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const cardsBeforeSearch = screen.getAllByTestId('resCard');
  expect(cardsBeforeSearch.length).toBe(8);

  const topRatedBtn = screen.getByRole('button', {
    name: 'Top Rated Restaurants',
  });

  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId('resCard');
  expect(cardsAfterFilter.length).toBe(5);
});
