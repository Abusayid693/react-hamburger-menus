import React, { HTMLAttributes, ReactNode } from 'react';
import './style.css';


interface Styles {
  navigation?: Object
  navigationButton?:Object
  navigationIcon?:Object

}

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  styles?: Styles
}

export const Button = (props: Props) => {
  return (
    <div className="navigation" {...props} style={{

    }}>
      <input type="checkbox" className="navigation__checkbox" id="nav-toggle" />
      <label htmlFor="nav-toggle" className="navigation__button">
        <span className="navigation__icon"></span>&nbsp;
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="" className="navigation__link">
              ABOUT
            </a>
          </li>
          <li className="navigation__item">
            <a href="" className="navigation__link">
              PROJECTS
            </a>
          </li>
          <li className="navigation__item">
            <a href="" className="navigation__link">
              EXPERIENCES
            </a>
          </li>
          <li className="navigation__item">
            <a href="" className="navigation__link">
              BLOGS
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
