import { render, screen } from "@testing-library/react";
import React from 'react';
import { GhostNavbar } from "../src/GhostNavbar/GhostNavbar";


test('Should render GhostNavbar component', ()=>{
  render(<GhostNavbar/>)
  const component = screen.getByTestId('GhostNavbar')
  expect(component).toBeInTheDocument();
  expect(component).toHaveTextContent("Hello")
})
