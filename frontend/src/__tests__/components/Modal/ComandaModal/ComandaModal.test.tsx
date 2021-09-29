import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import ComandaModal from '../../../../components/Modal/ComandaModal';

describe('ComandaModal', () => {
  it('renders nothing when not visible', () => {
    const props = {
      visible: false,
      onClose: () => {
        return;
      },
    };
    render(<ComandaModal {...props} />);

    expect(screen.queryByText('Comandas')).not.toBeVisible();
  });

  it('renders content when visible', () => {
    const props = {
      visible: true,
      onClose: () => {
        return;
      },
    };
    render(<ComandaModal {...props} />);

    expect(screen.getByText('Comandas')).toBeVisible();
  });

  it('fires onClosed when clicking the button', () => {
    const onCloseHandler = jest.fn();
    const props = {
      visible: true,
      onClose: onCloseHandler,
    };
    render(<ComandaModal {...props} />);

    const button = document.querySelector('.close-button button');
    fireEvent.click(button);

    expect(onCloseHandler).toHaveBeenCalled();
  });

  it('fires onClosed when pressing esc', () => {
    const onCloseHandler = jest.fn();
    const props = {
      visible: true,
      onClose: onCloseHandler,
    };
    render(<ComandaModal {...props} />);

    fireEvent.keyDown(document.body, {
      key: 'Escape',
      keyCode: 27,
      which: 27,
    });

    expect(onCloseHandler).toHaveBeenCalled();
  });

  it('simulates input', async () => {
    const props = {
      visible: true,
      onClose: () => {
        return;
      },
    };
    render(<ComandaModal {...props} />);
    const input = screen.getByTestId('name') as HTMLInputElement;
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'Ítalo' } });
    expect(input.value).toBe('Ítalo');
  });

  it('verifies input', async () => {
    const props = {
      visible: true,
      onClose: () => {
        return;
      },
    };
    render(<ComandaModal {...props} />);
    const input = screen.getByTestId('name') as HTMLInputElement;
    expect(input).toBeInTheDocument();
  });
});
