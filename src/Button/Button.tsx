import React, { HTMLAttributes, ReactNode } from 'react';
import './style.css';

interface Styles {
  navigation?: Object;
  navigationButton?: Object;
  navigationIcon?: Object;
  navigationBackground?: Object;
  floatButtonSize?: number;
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  styles?: Styles;
}

export const Button = (props: Props) => {

  const {styles , children} = props

  var cssVariables = { "--my-css-var": styles?.floatButtonSize ?? 1 } as React.CSSProperties;

  return (
    <div className="navigation" {...props} style={styles?.navigation}>
      <input type="checkbox" className="navigation__checkbox" id="nav-toggle" />
      <label
        htmlFor="nav-toggle"
        className="navigation__button"
        style={{ ...styles?.navigationButton, ...cssVariables } }
      >
        <span
          className="navigation__icon"
          style={props.styles?.navigationIcon}
        ></span>
        &nbsp;
      </label>
      <div
        className="navigation__background"
        style={{
          ...styles?.navigationBackground,
          ...cssVariables
        }}
      >
        &nbsp;
      </div>
      <nav className="navigation__nav">
        {props.children ? (
          props.children
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
