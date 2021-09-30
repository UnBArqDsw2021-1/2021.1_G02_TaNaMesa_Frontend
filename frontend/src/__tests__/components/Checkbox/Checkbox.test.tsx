/* eslint-disable */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkbox from '../../../components/Checkbox';

describe('Checkbox', () => {
  it('renders checkbox label', () => {
    const props = {
        id: 1,
        label: 'Test Checkbox',
        checked: false,
        disabled: false,
        onClick: () => {},
    };
    render(<Checkbox {...props} />);

    expect(screen.queryByText('Test Checkbox')).toBeVisible();
  });

  it('fires onClick when pressed', () => {
    console.log = jest.fn();
    const props = {
        id: 1,
        label: 'Test Checkbox',
        checked: false,
        disabled: false,
        onClick: (checked) => {
            checked ? console.log('checked') : console.log('not checked')
        },
    };
    render(<Checkbox {...props} />);

    screen.queryByText('Test Checkbox').click();
    expect(console.log).toHaveBeenCalledWith('checked');
  });
});
