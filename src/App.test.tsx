import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('check react test', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Demo/i);
  expect(linkElement).toBeInTheDocument();
});

test('check react test component', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/React Test Component/i);
  expect(linkElement).toBeInTheDocument();
});

test('check and save to reload', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Demo: React Testing Library/i);
  expect(linkElement).toBeInTheDocument();
});
