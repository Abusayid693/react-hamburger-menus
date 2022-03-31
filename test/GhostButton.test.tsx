import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { GhostButton } from '../src/GhostButton/GhostButton';


test('Checkbox click event and HandleOutsideClick hook', () => {
  render(<GhostButton />);
  const checkbox = screen.getByTestId('GhostButton-checkbox');
  expect(checkbox).not.toBeChecked();

  fireEvent.click(screen.getByTestId('GhostButton-button'));
  expect(checkbox).toBeChecked();

  fireEvent.mouseDown(document);
  expect(checkbox).not.toBeChecked();
});

test('Should have correct button position', () => {
    render(
      <GhostButton
        styles={{
          floatButtonX: 60,
          floatButtonY: 19,
        }}
      />
    );
    const btn = screen.getByTestId('GhostButton-button');
    
    expect(btn.style.right).toBe('60vw');
    expect(btn.style.top).toBe('19vh');
    expect(btn.style.right).toBe('60vw');
    expect(btn.style.top).toBe('19vh');
  });


  test('Should have correct inline styles', () => {
    render(
      <GhostButton
        styles={{
          navigation: {
            fontFamily: 'monospace',
          },
          navigationCard: {
            backgroundColor: 'aliceblue',
          },
          navigationButton: {
            border: '1px solid black',
          },
          navigationIcon: {
            width: '30px',
          },
        }}
      />
    );
    expect(screen.getByTestId('GhostButton-button').style.border).toBe(
      '1px solid black'
    );
    expect(
      screen.getByTestId('GhostButton-card').style.backgroundColor
    ).toBe('aliceblue');
    expect(screen.getByTestId('GhostButton-icon').style.width).toBe('30px');
    expect(screen.getByTestId('GhostButton').style.fontFamily).toBe('monospace');
  });
  