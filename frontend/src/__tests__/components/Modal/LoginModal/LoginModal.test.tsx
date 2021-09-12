import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import LoginModal from '../../../../components/Modal/LoginModal';

describe('LoginModal', () => {
  it('renders nothing when not visible', () => {
    const props = {
      title: 'Some content',
      visible: false,
      onClose: () => {
        return;
      },
    };
    render(<LoginModal {...props} />);

    expect(screen.queryByText('Some content')).not.toBeVisible();
  });

  it('renders content when visible', () => {
    const props = {
      title: 'Some content',
      visible: true,
      onClose: () => {
        return;
      },
    };
    render(<LoginModal {...props} />);

    expect(screen.getByText('Some content')).toBeVisible();
  });

  it('fires onClosed when clicking the button', () => {
    const onCloseHandler = jest.fn();
    const props = {
      title: 'Some content',
      visible: true,
      onClose: onCloseHandler,
    };
    render(<LoginModal {...props} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onCloseHandler).toHaveBeenCalled();
  });

  it('fires onClosed when pressing esc', () => {
    const onCloseHandler = jest.fn();
    const props = {
      title: 'Some content',
      visible: true,
      onClose: onCloseHandler,
    };
    render(<LoginModal {...props} />);

    fireEvent.keyDown(document.body, {
      key: 'Escape',
      keyCode: 27,
      which: 27,
    });

    expect(onCloseHandler).toHaveBeenCalled();
  });
});
