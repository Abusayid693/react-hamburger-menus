import { Meta } from '@storybook/react';
import React from 'react';
import { GhostNavbar } from '../src/components/GhostNavbar/GhostNavbar';

const meta: Meta = {
  title: 'Ghost Navbar',
  component: GhostNavbar,
};

export default meta;

export const Default = () => (
  <>
  <GhostNavbar
    // rightReveal
    // backgroundBox
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
  <h1 style={{position: 'fixed', zIndex: 100}}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fuga blanditiis ipsum consequatur eaque sequi voluptatem perspiciatis totam praesentium consectetur dolore unde sit nulla ipsa, saepe earum, deserunt quae amet?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempora autem modi? Cum omnis aliquam dolorum in molestias inventore suscipit doloribus commodi quas consequuntur nisi sint, molestiae non dignissimos fuga!
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus aspernatur, expedita adipisci numquam excepturi nobis fugiat asperiores explicabo velit eos animi porro laudantium facere molestias, cumque ab placeat aliquid provident.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illum beatae impedit ex tempore odit deserunt veniam praesentium repudiandae eum nihil vero corporis tempora a vel pariatur sapiente, iste magni.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias sunt quibusdam accusamus velit, sed et. Sequi aliquid ut numquam fugit unde! Reprehenderit eaque odio asperiores inventore. Assumenda esse autem ratione. 
</h1>
</>
);
