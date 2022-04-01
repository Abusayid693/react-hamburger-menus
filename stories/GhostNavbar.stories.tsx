import { Meta } from '@storybook/react';
import React from 'react';
import { GhostNavbar } from '../src/components/GhostNavbar/GhostNavbar';

const meta: Meta = {
  title: 'Ghost Navbar',
  component: GhostNavbar,
};

export default meta;

export const Default = () => (
  <GhostNavbar
    rightReveal
    backgroundBox
    
    styles={{
      navigation: {
        fontFamily: 'font-family: "Lato", sans-serif;',
        fontWeight: '300',
      },
      iconWidth: '30px',
      fontColor: '#fff',
      navigationButton: {
      },
    }}
  />
);
