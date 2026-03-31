import { render, screen } from '@testing-library/react';
import App from './App';

test('renders tailwind setup message', () => {
  render(<App />);
  const headingElement = screen.getByText(
    /tailwind is installed and running in this react app/i
  );
  expect(headingElement).toBeInTheDocument();
});
