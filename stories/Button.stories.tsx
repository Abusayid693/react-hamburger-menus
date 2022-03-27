import { Meta } from '@storybook/react';
import React from "react";
import { Button } from '../src/Button/Button';

const meta: Meta = {
    title: 'Button',
    component: Button,
  };
  
  export default meta

  export const Default = ()=> <Button/>