import { fireEvent, render, screen, within } from '@testing-library/react';
import React from 'react';
import { GhostNavbar } from '../src/GhostNavbar/GhostNavbar';

test('Checkbox click event', () => {
  render(<GhostNavbar />);

  const component = screen.getByTestId('GhostNavbar');
  const checkbox = screen.getByTestId('GhostNavbar-checkbox');

  expect(component).toBeInTheDocument();
  expect(checkbox).not.toBeChecked();

  fireEvent.click(screen.getByTestId('GhostNavbar-button'));

  expect(checkbox).toBeChecked();
});

test('Should have correct button position', () => {
  render(
    <GhostNavbar
      styles={{
        floatButtonX: 50,
        floatButtonY: 12,
      }}
    />
  );
  const btn = screen.getByTestId('GhostNavbar-button');

  fireEvent.click(screen.getByTestId('GhostNavbar-button'));

  expect(btn.style.right).toBe('50vw');
  expect(btn.style.top).toBe('12vh');
  expect(btn.style.right).toBe('50vw');
  expect(btn.style.top).toBe('12vh');
});

test('Should have correct inline styles', () => {
  render(
    <GhostNavbar
      styles={{
        navigation: {
          fontFamily: 'monospace',
        },
        navigationBackground: {
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
  expect(screen.getByTestId('GhostNavbar-button').style.border).toBe(
    '1px solid black'
  );
  expect(
    screen.getByTestId('GhostNavbar-background').style.backgroundColor
  ).toBe('aliceblue');
  expect(screen.getByTestId('GhostNavbar-icon').style.width).toBe('30px');
  expect(screen.getByTestId('GhostNavbar').style.fontFamily).toBe('monospace');
});



test('Should render children elements correctly', () => {
  render(
    <GhostNavbar>
     <ul aria-labelledby="links-heading">
       <li>My House</li>
       <li>My School</li>
     </ul>
    </GhostNavbar>
  );

  const list = screen.getByRole("list");
  const { getAllByRole } = within(list)
  const items = getAllByRole("listitem")

  expect(items.length).toBe(2)
  expect(items[0]).toHaveTextContent('My House')

});