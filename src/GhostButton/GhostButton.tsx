import React, { HTMLAttributes, ReactNode, useRef, useState } from 'react';
import { HandleOutsideClick } from "./hook";
import './style.css';

interface Styles {
  // Base styles
  navigation?: React.CSSProperties;
  navigationButton?: React.CSSProperties;
  navigationIcon?: React.CSSProperties;
  navigationCard?: React.CSSProperties;
  // Style variables
  floatButtonSize?: string;
  floatButtonX?: number;
  floatButtonY?: number;
  fontColor?: string;
  fontSize?: string;
  fontHoverColor?: string;

  iconColor?:string
  iconWidth?: string;
  iconHeight?: string;
}

export interface GhostButtonProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  styles?: Styles;
  className?: string;
  id?: string;
}

export const GhostButton = (props: GhostButtonProps) => {
  
  const { children, styles, className ,id} = props;

  const [checked, setChecked] = useState(false);
  const ref= useRef(null);
  
  HandleOutsideClick(ref, setChecked)

  var cssVariables = {
    '--gb-floatButtonSize': styles?.floatButtonSize ?? 6,
    '--gb-floatButtonX': styles?.floatButtonX ?? 90,
    '--gb-floatButtonY': styles?.floatButtonY ?? 2,
    '--gb-fontColor': styles?.fontColor ?? 'black',
    '--gb-fontSize': styles?.fontSize ?? '1em',
    '--gb-fontHoverColor': styles?.fontHoverColor ?? 'rgba(127, 255, 212, 0.157)',
    '--gb-icon-color': styles?.iconColor ?? 'black',
    '--gb-icon-width': styles?.iconWidth ?? '2.6em',
    '--gb-icon-height': styles?.iconHeight ?? '2px'
  } as React.CSSProperties;

  // It tracks how to style the list based on page position
  const uniqueId = id ?? Math.floor(Math.random() * 30000000)
  let listPosition = 'left';



  if (styles?.floatButtonX && styles?.floatButtonX < 50)
    listPosition = 'right';

  return (
    <div
      className={`react-navbar-ghost-button-navigation ${className}`}
      style={{
        ...styles?.navigation,
        ...cssVariables,
      }}
      ref={ref}
    >
      <input
        type="checkbox"
        className="react-navbar-ghost-button-navigation__checkbox"
        id={`react-navbar-ghost-button-nav-toggle-${uniqueId}`}
        checked = {checked}
        onChange = {() => setChecked(!checked)}
      />
      <label
        htmlFor={`react-navbar-ghost-button-nav-toggle-${uniqueId}`}
        className="react-navbar-ghost-button-navigation__button"
        style={{
          ...styles?.navigationButton,
        }}
      >
        <span
          className="react-navbar-ghost-button-navigation__icon"
          style={{
            ...styles?.navigationIcon,
          }}
        >
          &nbsp;
        </span>
        <div
          className={`
          react-navbar-ghost-button-navigation__background 
          react-navbar-ghost-button-navigation__background--${listPosition}
          
          `}
          style={{
            ...styles?.navigationCard,
          }}
        >
          {children ? (
            children
          ) : (
            <ul>
              <li>ABOUT</li>
              <li>PROJECTS</li>
              <li>ELEMENTS</li>
              <li>CONTACT</li>
            </ul>
          )}
        </div>
      </label>
    </div>
  );
};
