import { Meta } from '@storybook/react';
import React from 'react';
import { GhostButton } from '../src/GhostButton/GhostButton';

const meta: Meta = {
  title: 'Ghost Button',
  component: GhostButton,
};

export default meta;

export const Default = () => (
  <GhostButton
    styles={{
      navigation: { fontFamily: 'Arial, Helvetica, sans-serif' },
      fontColor: 'grey',
      floatButtonX: 10
    }}
  />
);
