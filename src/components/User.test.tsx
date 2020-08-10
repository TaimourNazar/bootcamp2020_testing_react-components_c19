import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'; 
import User from './User';
 
describe('User', () => {
  test('renders User component', async () => {
    render(<User />);
    //expect(screen.queryByText(/Welcome user:/)).toBeNull();
    expect(await screen.findByText(/Welcome user:/)).toBeInTheDocument();
  });
});

