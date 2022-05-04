import React, { HTMLAttributes, ReactNode, useState } from 'react';
import { UseMedia } from '../../hooks';
import { amplifyString } from '../../utils';
import './style.css';

interface Styles {
  navigation?: React.CSSProperties;
  navigationBarSmall?: React.CSSProperties;
  navigationCardSmall?: React.CSSProperties;
  navigationButtonSmall?: React.CSSProperties;

  navigationBarLarge?: React.CSSProperties;

  iconColor?: string;
  iconWidth?: string | number;
  iconHeight?: string | number;

  animationDelay?: number | string;
}

export interface ResponsiveNavbarProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  styles?: Styles;
  className?: string;
  id?: string;
  logo?: ReactNode;
}

export const ResponsiveNavbar = (props: ResponsiveNavbarProps) => {
  const { children, styles, className, logo } = props;

  const [media, setMedia] = useState();
  UseMedia('min-width', 1000, setMedia);

  const classId = 'rhm-rn';
  const uniqueId = Math.floor(Math.random() * 30000000);

  const navigationCardStyle = !media
    ? { ...styles?.navigationBarLarge, ...styles?.navigationCardSmall }
    : { ...styles?.navigationBarLarge };

  const animationDelay = amplifyString(styles?.animationDelay, '0.1s', 's');
  const iconWidth = amplifyString(styles?.iconWidth, '2.6em', 'em');
  const iconHeight = amplifyString(styles?.iconHeight, '2px', 'px');

  let cssVariables = {
    '--rn-icon-color': styles?.iconColor ?? 'black',
    '--rn-icon-width': iconWidth,
    '--rn-icon-height': iconHeight,
    '--rn-animation-delay': animationDelay,
  } as React.CSSProperties;

  return (
    <div
      className={`${classId}-navigation ${className}`}
      style={{ ...styles?.navigation, ...cssVariables }}
    >
      {!media && (
        <React.Fragment>
          <input
            type="checkbox"
            className={`${classId}-navigation__checkbox`}
            id={`${classId}-navigation-toggle-${uniqueId}`}
          />
          <label
            htmlFor={`${classId}-navigation-toggle-${uniqueId}`}
            className={`${classId}-navigation__button`}
            style={{
              justifyContent: logo ? 'space-between' : 'flex-end',
              ...styles?.navigationBarSmall,
            }}
          >
            {logo && <span>{logo}</span>}
            <span
              className={`${classId}-navigation__icon`}
              data-testid={'GhostNavbar-icon'}
              style={{
                ...styles?.navigationButtonSmall,
              }}
            >
              {' '}
              &nbsp;
            </span>
          </label>
        </React.Fragment>
      )}
      <nav className={`${classId}-navigation__nav`} style={navigationCardStyle}>
        {media && logo && (
          <ul className={`${classId}-navigation__logo`}>
            <li>{logo}</li>
          </ul>
        )}
        {children ?? (
          <ul>
            <li>ABOUT</li>
            <li>PROJECTS</li>
            <li>ELEMENTS</li>
            {/* <li>CONTACT</li> */}
          </ul>
        )}
      </nav>
    </div>
  );
};
