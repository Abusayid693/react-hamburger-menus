import React, { HTMLAttributes, ReactNode } from 'react';
import './style.css';

interface Styles {
  navigation?: React.CSSProperties;
  navigationButton?: React.CSSProperties;
  navigationIcon?: React.CSSProperties;
  navigationBackground?: React.CSSProperties;

  floatButtonX?: number;
  floatButtonY?: number;
  listHoverColor?: [string, string];

  iconColor?: string;
  iconWidth?: string;
  iconHeight?: string;

  fontColor?: string;
  fontSize?: string;
  fontHoverColor?: string;
}

export interface GhostNavbarProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  styles?: Styles;
  className?: string;
  id?: string;

  leftReveal?: boolean;
  rightReveal?: boolean;
  backgroundBox?: boolean;
  backgroundCircle?: boolean;
}

export const GhostNavbar = (props: GhostNavbarProps) => {
  const { styles, children, className, id, rightReveal, backgroundBox } = props;

  var cssVariables = {
    '--gn-floatButtonX': styles?.floatButtonX ?? 5,
    '--gn-floatButtonY': styles?.floatButtonY ?? 2,
    '--gn-listHoverColor-1': styles?.listHoverColor?.[0] ?? 'transparent',
    '--gn-listHoverColor-2': styles?.listHoverColor?.[1] ?? '#fff',
    '--gn-fontColor': styles?.fontColor ?? 'pink',
    '--gn-fontSize': styles?.fontSize ?? '3em',
    '--gn-fontHoverColor': styles?.fontHoverColor ?? 'blue',
    '--gn-icon-color': styles?.iconColor ?? 'black',
    '--gn-icon-width': styles?.iconWidth ?? '2.6em',
    '--gn-icon-height': styles?.iconHeight ?? '2px',
  } as React.CSSProperties;

  const uniqueId = id ?? Math.floor(Math.random() * 30000000);
  const floatButtonWidth = styles?.navigationButton?.width ?? '6em';
  const floatButtonHeight = styles?.navigationButton?.height ?? '6em';
  const classId = 'react-hamburger-menus-navbar-ghost';
  
  const revealType = rightReveal ? 'right-screen' : 'left-screen';
  const backgroundType = backgroundBox ? 'square-box' : 'circle-box';

  return (
    <div
      className={`${classId}-navigation ${className}`}
      {...props}
      style={{
        ...styles?.navigation,
        ...cssVariables,
      }}
      data-testid={'GhostNavbar'}
    >
      <input
        type="checkbox"
        className={`${classId}-navigation__checkbox`}
        id={`${classId}-navigation-toggle-${uniqueId}`}
      />
      <label
        htmlFor={`${classId}-navigation-toggle-${uniqueId}`}
        className={`${classId}-navigation__button`}
        // style={styles?.navigationButton}
        style={{
          ...styles?.navigationButton,
          width: floatButtonWidth,
          height: floatButtonHeight,
        }}
      >
        <span
          className={`${classId}-navigation__icon`}
          style={styles?.navigationIcon}
        >
          {' '}
          &nbsp;
        </span>
      </label>
      <div
        className={`${classId}-navigation__background ${classId}-navigation__background--${backgroundType}`}
        style={{
          ...styles?.navigationBackground,
          width: floatButtonWidth,
          height: floatButtonHeight,
        }}
      >
        &nbsp;
      </div>
      <nav
        className={`${classId}-navigation__nav ${classId}-navigation__nav--${revealType}`}
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
      </nav>
    </div>
  );
};
