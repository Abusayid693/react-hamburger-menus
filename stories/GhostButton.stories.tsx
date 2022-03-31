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
    icon={
      <p style={{ fontSize: '19px', borderBottom: '1px solid grey' }}>Users</p>
    }
    styles={{
      navigation: { fontFamily: 'Arial, Helvetica, sans-serif' },
      fontColor: 'grey',
      navigationButton: {
        boxShadow: '0px 0px 0px ',
        borderRadius: '0px',
      },
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
