import { Meta } from '@storybook/react';
import React from 'react';
import { GhostNavbar } from '../src/GhostNavbar/GhostNavbar';

const meta: Meta = {
  title: 'Ghost Navbar',
  component: GhostNavbar,
};

export default meta;

export const Default = () => (
  <GhostNavbar styles={{ navigation: { fontFamily: 'font-family: "Lato", sans-serif;', fontWeight:'300' } }} />
);
