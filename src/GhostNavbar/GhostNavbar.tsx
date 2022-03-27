import React, { HTMLAttributes, ReactNode } from 'react';
import './style.css';

interface Styles {
  navigation?: React.CSSProperties;
  navigationButton?: React.CSSProperties;
  navigationIcon?: React.CSSProperties;
  navigationBackground?: React.CSSProperties;
  floatButtonSize?: number;
  floatButtonX?: string;
  floatButtonY?: string;
  listHoverColor?: [string, string];
  fontColor?: string;
  fontSize?: string;
  fontHoverColor?: string;
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  styles?: Styles;
  className?: string;
}

export const GhostNavbar = (props: Props) => {
  const { styles, children, className } = props;

  var cssVariables = {
    '--my-css-var': styles?.floatButtonSize ?? 1,
    '--floatButtonX': styles?.floatButtonX ?? '85%',
    '--floatButtonY': styles?.floatButtonY ?? '2%',
    '--listHoverColor-1': styles?.listHoverColor?.[0] ?? 'transparent',
    '--listHoverColor-2': styles?.listHoverColor?.[1] ?? '#fff',
    '--fontColor': styles?.fontColor ?? 'pink',
    '--fontSize': styles?.fontSize ?? '3em',
    '--fontHoverColor': styles?.fontHoverColor ?? 'blue'
  } as React.CSSProperties;

  return (
    <div
      className={`react-navbar-ghost-navigation ${className}`}
      {...props}
      style={{
        ...styles?.navigation,
        ...cssVariables,
      }}
    >
      <input
        type="checkbox"
        className="react-navbar-ghost-navigation__checkbox"
        id="nav-toggle"
      />
      <label
        htmlFor="nav-toggle"
        className="react-navbar-ghost-navigation__button"
        style={styles?.navigationButton}
      >
        <span
          className="react-navbar-ghost-navigation__icon"
          style={styles?.navigationIcon}
        ></span>
        &nbsp;
      </label>
      <div
        className="react-navbar-ghost-navigation__background"
        style={styles?.navigationBackground}
      >
        &nbsp;
      </div>
      <nav className="react-navbar-ghost-navigation__nav">
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
      </nav>
    </div>
  );
};
