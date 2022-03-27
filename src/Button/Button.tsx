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
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  styles?: Styles;
}

export const Button = (props: Props) => {
  const { styles, children } = props;

  var cssVariables = {
    '--my-css-var': styles?.floatButtonSize ?? 1,
    '--floatButtonX': styles?.floatButtonX ?? '85%',
    '--floatButtonY': styles?.floatButtonY ?? '2%',
    '--listHoverColor-1': styles?.listHoverColor?.[0] ?? 'transparent',
    '--listHoverColor-2': styles?.listHoverColor?.[1] ?? '#fff',
  } as React.CSSProperties;

  return (
    <div
      className="navigation"
      {...props}
      style={{
        ...styles?.navigation,
        ...cssVariables,
      }}
    >
      <input type="checkbox" className="navigation__checkbox" id="nav-toggle" />
      <label
        htmlFor="nav-toggle"
        className="navigation__button"
        style={styles?.navigationButton }
      >
        <span
          className="navigation__icon"
          style={styles?.navigationIcon}
        ></span>
        &nbsp;
      </label>
      <div
        className="navigation__background"
        style={styles?.navigationBackground
        }
      >
        &nbsp;
      </div>
      <nav className="navigation__nav">
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
