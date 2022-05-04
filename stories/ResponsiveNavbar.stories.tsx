import { Meta } from '@storybook/react';
import React from 'react';
import "../dist/style.css";
// import { ResponsiveNavbar } from '../src/components/ResponsiveNavbar/ResponsiveNavbar';
import { ResponsiveNavbar } from '../src/components/ResponsiveNavbar/ResponsiveNavbar';

const meta: Meta = {
  title: 'ResponsiveNavbar',
  component: ResponsiveNavbar,
};

export default meta;

export const Default = () => (
  <ResponsiveNavbar
    logo={<p style={{fontSize:'1.6em', fontWeight: 300}}>Logo</p>}
    styles={{
      navigation: { fontFamily: 'Arial, Helvetica, sans-serif' },
      navigationBarSmall: {
        backgroundColor: 'aliceblue',
      },
      navigationBarLarge:{
          backgroundColor:'red'
      },
      navigationCardSmall:{
          backgroundColor: 'aliceblue'
      }
    }}
  />
);
