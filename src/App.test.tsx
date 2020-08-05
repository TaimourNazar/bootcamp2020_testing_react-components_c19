import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('check react test', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/react test/i);
  expect(linkElement).toBeInTheDocument();
});

test('check react test component', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/react test component/i);
  expect(linkElement).toBeInTheDocument();
});

test('check and save to reload', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/and save to reload/i);
  expect(linkElement).toBeInTheDocument();
});
