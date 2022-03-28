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
  iconColor?: string;

  fontColor?: string;
  fontSize?: string;
  fontHoverColor?: string;

}

export interface GhostNavbarProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  styles?: Styles;
  className?: string;
}

export const GhostNavbar = (props: GhostNavbarProps) => {
  const { styles, children, className } = props;

  var cssVariables = {
    '--gn-floatButtonSize': styles?.floatButtonSize ?? 1,
    '--gn-floatButtonX': styles?.floatButtonX ?? '5%',
    '--gn-floatButtonY': styles?.floatButtonY ?? '2%',
    '--gn-listHoverColor-1': styles?.listHoverColor?.[0] ?? 'transparent',
    '--gn-listHoverColor-2': styles?.listHoverColor?.[1] ?? '#fff',
    '--gn-fontColor': styles?.fontColor ?? 'pink',
    '--gn-fontSize': styles?.fontSize ?? '3em',
    '--gn-fontHoverColor': styles?.fontHoverColor ?? 'blue',
    '--gn-icon-color': styles?.iconColor ?? 'black'
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
        >        &nbsp;</span>
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
