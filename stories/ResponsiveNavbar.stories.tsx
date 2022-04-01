import { Meta } from '@storybook/react';
import React from 'react';
import ResponsiveNavbar from '../src/components/ResponsiveNavbar/ResponsiveNavbar';

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
      navigationBar: {
        backgroundColor: 'aliceblue',
      },
      navigationMobileButton: {
        backgroundColor: 'aliceblue',
      },
    }}
  />
);
