import React from 'react';
import { render } from '@testing-library/react';
import App from '../../App';

describe('App', () => {
  it('render ta na mesa application name', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('Tá Na Mesa');
    expect(linkElement).toBeInTheDocument();
  });
});
