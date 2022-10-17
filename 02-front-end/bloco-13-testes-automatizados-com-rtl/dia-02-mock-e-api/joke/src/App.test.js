 
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };
  //jeito 1
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

    //jeito 2
  // global.fetch = jest.fn(() => Promise.resolve({
  //   json: () => Promise.resolve(joke),
  // }));

  //jeito 3
  // global.fetch = jest.fn(async () => ({
  //   json: async () => joke
  // }));

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});
it('fetches a new joke on button click', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(joke),
  });
  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  const button = screen.getByRole('button');
  const newJoke = {
    id: 'AAXnyImyPCd',
    joke: "Don't trust atoms. They make up everything.",
    status: 200,
  };
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(newJoke),
  });
  userEvent.click(button);
  const newRenderedJoke = await screen.findByText("Don't trust atoms. They make up everything.");
  expect(newRenderedJoke).toBeInTheDocument();
  const pastJoke = screen.queryByText('Whiteboards ... are remarkable.');
  expect(pastJoke).not.toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(2);
});