import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';
import { afterAll, beforeAll, beforeEach } from 'jest-circus';

describe('Contact Us Page Test Cases', () => {
  // afterAll(() => {
  //   console.log('After all test cases in Contact.test.js');
  // });

  // beforeAll(() => {
  //   console.log('Before all test cases in Contact.test.js');
  // });

  // beforeEach(() => {
  //   console.log('Before each test case in Contact.test.js');
  // });

  it('Should load contact us component', () => {
    render(<Contact />);
    const heading = screen.getByRole('heading');

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test('Should load button inside contact component', () => {
    render(<Contact />);
    const button = screen.getByText('Submit');

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test('Should load input name inside contact component', () => {
    render(<Contact />);
    const name = screen.getByPlaceholderText('name');

    // Assertion
    expect(name).toBeInTheDocument();
  });

  test('Should load 3 input boxes on the contact conponent', () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole('textbox');

    expect(inputBoxes.length).toBe(3);
  });
});
