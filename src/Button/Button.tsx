import React, { HTMLAttributes, ReactNode } from 'react';
import './style.css';

interface Styles {
  navigation?: Object;
  navigationButton?: Object;
  navigationIcon?: Object;
  navigationBackground?: Object;
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  styles?: Styles;
}

export const Button = (props: Props) => {
  return (
    <div className="navigation" {...props} style={props.styles?.navigation}>
      <input type="checkbox" className="navigation__checkbox" id="nav-toggle" />
      <label
        htmlFor="nav-toggle"
        className="navigation__button"
        style={props.styles?.navigationButton}
      >
        <span
          className="navigation__icon"
          style={props.styles?.navigationIcon}
        ></span>
        &nbsp;
      </label>
      <div
        className="navigation__background"
        style={props.styles?.navigationBackground}
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
