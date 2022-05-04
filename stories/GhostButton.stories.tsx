import { Meta } from '@storybook/react';
import React from 'react';
import { GhostButton } from '../src/components/GhostButton/GhostButton';

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
      floatButtonX: 40,
      navigationButton: {
        boxShadow: '0px 0px 0px ',
        borderRadius: '0px',
      },
      navigationCard:{
        backgroundColor: 'yellow',
        top: '6em'
      }
    }}
  >
    <ul>
      <li>ABOUT ME</li>
      <li>PROJECTS</li>
      <li>ELEMENTS</li>
      <li>CONTACT</li>
    </ul>
  </GhostButton>
);
