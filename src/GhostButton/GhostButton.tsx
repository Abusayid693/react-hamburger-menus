import React, { HTMLAttributes, ReactNode } from 'react';
import './style.css';

interface Styles {
  navigation?: React.CSSProperties;
  navigationButton?: React.CSSProperties;
  navigationIcon?: React.CSSProperties;
  navigationCard?: React.CSSProperties;

  floatButtonSize?: string;
  floatButtonX?: number;
  floatButtonY?: number;
  fontColor?: string;
  fontSize?: string;
  fontHoverColor?: string;

  iconColor?:string
}

export interface GhostButtonProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  styles?: Styles;
  className?: string;
}

export const GhostButton = (props: GhostButtonProps) => {
  const { children, styles, className } = props;

  var cssVariables = {
    '--floatButtonSize': styles?.floatButtonSize ?? 6,
    '--floatButtonX': styles?.floatButtonX ?? 90,
    '--floatButtonY': styles?.floatButtonY ?? 2,
    '--fontColor': styles?.fontColor ?? 'black',
    '--fontSize': styles?.fontSize ?? '1em',
    '--fontHoverColor': styles?.fontHoverColor ?? 'rgba(127, 255, 212, 0.157)',
    '--icon-color': styles?.iconColor ?? 'black'
  } as React.CSSProperties;

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
    >
      <input
        type="checkbox"
        className="react-navbar-ghost-button-navigation__checkbox"
        id="react-navbar-ghost-button-nav-toggle"
      />
      <label
        htmlFor="react-navbar-ghost-button-nav-toggle"
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
