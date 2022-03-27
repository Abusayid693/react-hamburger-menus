import React from 'react';
import "./style.css";

export const GhostButton = () => {
  return (
    <div className="s-navigation">
      <input
        type="checkbox"
        className="s-navigation__checkbox"
        id="s-nav-toggle"
      />
      <label htmlFor="s-nav-toggle" className="s-navigation__button">
        <span className="s-navigation__icon"></span>&nbsp;
        <div className="s-navigation__background s-navigation__background--left">
          <ul>
            <li>Home </li>
            <li>Contact</li>
            <li>Contact</li>
          </ul>
        </div>
      </label>
    </div>
  );
};
