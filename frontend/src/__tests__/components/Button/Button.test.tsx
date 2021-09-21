/* eslint-disable */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../../../components/Button';

describe('Button', () => {
  it('renders button text', () => {
    const props = {
      color: '#8E3031',
      onClick: () => {},
    };
    render(<Button {...props}>Test Button</Button>);

    expect(screen.queryByText('Test Button')).toBeVisible();
  });

  it('fires onClick when pressed', () => {
    console.log = jest.fn();
    const props = {
      color: '#8E3031',
      onClick: () => {
        console.log('button clicked');
      },
    };
    render(<Button {...props}>Test Button</Button>);

    screen.queryByText('Test Button').click();

    expect(console.log).toHaveBeenCalledWith('button clicked');
  });
});
