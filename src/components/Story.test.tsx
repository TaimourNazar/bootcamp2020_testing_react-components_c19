import React from 'react';
import axios from 'axios';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Story from './Story';
 
jest.mock('axios');
 
describe('Story API testing', () => {
  test('On button click fetch data from API and display them', async () => {
    const stories = [
      { objectID: '1', title: 'Hello' },
      { objectID: '2', title: 'React' },
      { objectID: '3', title: 'Testing' },
      { objectID: '4', title: 'Library' },
    ];
 
    axios.get.mockImplementationOnce(() =>Promise.resolve({ data: { hits: stories } }));
 
    render(<Story />);

    await userEvent.click(screen.getByRole('button'));
    const items = await screen.findAllByRole('listitem');
    expect(items).toHaveLength(4);
  });
});

jest.mock('axios');
 
describe('Story API testing with act', () => {
  test('On button click fetch data from API and display them', async () => {
    const stories = [
      { objectID: '1', title: 'Hello' },
      { objectID: '2', title: 'React' },
      { objectID: '3', title: 'Testing' },
      { objectID: '4', title: 'Library' },
    ];
 
    const promise = Promise.resolve({ data: { hits: stories } });
 
    axios.get.mockImplementationOnce(() => promise);
 
    render(<Story />);
 
    await userEvent.click(screen.getByRole('button')); 
    await act(() => promise); 
    expect(screen.getAllByRole('listitem')).toHaveLength(4);
  }); 
});