import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import Header from '../Header';
import { screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

it('Should load header component with login button', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole('button', { name: 'Login' });

  // const loginBtn = screen.getByText('Login');

  expect(loginBtn).toBeInTheDocument();
});

it('Should change login button to logout on click', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole('button', { name: 'Login' });

  fireEvent.click(loginBtn);

  const logoutBtn = screen.getByRole('button', { name: 'Logout' });

  expect(logoutBtn).toBeInTheDocument();
});
