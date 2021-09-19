import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import AlertModal from 'components/Modal/AlertModal';

describe('AlertModal', () => {
  it('renders nothing when not visible', () => {
    const props = {
      children: <p>Some content</p>,
      visible: false,
      onClose: () => {
        return;
      },
    };
    render(<AlertModal {...props} />);

    expect(screen.queryByText('Some content')).not.toBeVisible();
  });

  it('renders content when visible', () => {
    const props = {
      children: <p>Some content</p>,
      visible: true,
      onClose: () => {
        return;
      },
    };
    render(<AlertModal {...props} />);

    expect(screen.getByText('Some content')).toBeVisible();
  });

  it('renders icon on modal', () => {
    const props = {
      children: <p>Some content</p>,
      visible: true,
      icon: 'simbolo_cozinha',
      onClose: () => {
        return;
      },
    };
    render(<AlertModal {...props} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'simbolo_cozinha.svg');
    expect(image).toHaveAttribute('alt', 'alertModal');
  });

  it('fires onClosed when pressing esc', () => {
    const onCloseHandler = jest.fn();
    const props = {
      title: 'Some content',
      visible: true,
      onClose: onCloseHandler,
    };
    render(<AlertModal {...props} />);

    fireEvent.keyDown(document.body, {
      key: 'Escape',
      keyCode: 27,
      which: 27,
    });

    expect(onCloseHandler).toHaveBeenCalled();
  });
});
