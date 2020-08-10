import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppSearch from './AppSearch';
 
describe('AppSearch', () => {
  test('Check search & textbox in AppSearch component', () => {
    render(<AppSearch />);
 
    //screen.debug();
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('Event Testing in AppSearch component', async () => {
    render(<AppSearch />);
 
    await userEvent.type(screen.getByRole('textbox'), 'React-Testing-Libraray'); 
    expect(screen.getByText(/Typescript and React-Testing-Libraray/)).toBeInTheDocument();
  });
});