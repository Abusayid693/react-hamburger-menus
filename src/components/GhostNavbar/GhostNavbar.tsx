import React, { HTMLAttributes, ReactNode } from 'react';
import { amplifyString } from '../../utils';
import './style.css';


interface Styles {
  navigation?: React.CSSProperties;
  navigationButton?: React.CSSProperties;
  navigationIcon?: React.CSSProperties;
  navigationBackground?: React.CSSProperties;
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
  
  floatButtonX?: number;
  floatButtonY?: number;
  listHoverColor?: [string, string];

  iconColor?: string;
  iconWidth?: string | number;
  iconHeight?: string | number;

  fontColor?: string;
  fontHoverColor?: string;
  fontSize?: string | number;

  zIndex?:number
}

const defaultStyles = {
  floatButtonX: 90,
  floatButtonY: 2,
};

export const GhostNavbar = (
  props: GhostNavbarProps = { ...defaultStyles }
) => {
  const { styles, children, className, id, rightReveal, backgroundBox } = props;


  const iconWidth = amplifyString(props?.iconWidth, '2.6em', 'px');
  const iconHeight = amplifyString(props?.iconHeight, '2px', 'px');
  const fontSize = amplifyString(props?.fontSize, '3em', 'px');

  var cssVariables = {
    '--gn-listHoverColor-1': props?.listHoverColor?.[0] ?? 'transparent',
    '--gn-listHoverColor-2': props?.listHoverColor?.[1] ?? '#fff',
    '--gn-fontColor': props?.fontColor ?? 'pink',
    '--gn-fontSize': fontSize,
    '--gn-fontHoverColor': props?.fontHoverColor ?? 'blue',
    '--gn-icon-color': props?.iconColor ?? 'black',
    '--gn-icon-width': iconWidth,
    '--gn-icon-height': iconHeight,
    '--z-index' : props?.zIndex ?? 1000
  } as React.CSSProperties;

  const uniqueId = id ?? Math.floor(Math.random() * 30000000);
  const floatButtonWidth = styles?.navigationButton?.width ?? '6em';
  const floatButtonHeight = styles?.navigationButton?.height ?? '6em';
  const classId = 'rhm-gn';

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
        data-testid={'GhostNavbar-checkbox'}
      />
      <label
        htmlFor={`${classId}-navigation-toggle-${uniqueId}`}
        className={`${classId}-navigation__button`}
        style={{
          ...styles?.navigationButton,
          width: floatButtonWidth,
          height: floatButtonHeight,
          right: props?.floatButtonX + 'vw',
          top: props?.floatButtonY + 'vh',
        }}
        data-testid={'GhostNavbar-button'}
      >
        <span
          className={`${classId}-navigation__icon`}
          style={styles?.navigationIcon}
          data-testid={'GhostNavbar-icon'}
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
          right: props?.floatButtonX + 'vw',
          top: props?.floatButtonY + 'vh',
        }}
        data-testid={'GhostNavbar-background'}
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
