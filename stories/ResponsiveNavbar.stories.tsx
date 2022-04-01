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
//   logo={<h3>Rehan</h3>}
  />
);
