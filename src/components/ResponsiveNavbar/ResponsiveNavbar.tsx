import React, { HTMLAttributes, ReactNode, useState } from 'react';
import { UseMedia } from '../../hooks';
import './style.css';


interface Styles {
  navigation?: React.CSSProperties;
  navigationButton?: React.CSSProperties
}


export interface ResponsiveNavbarProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  styles?: any;
  className?: string;
  id?: string;
  logo?: ReactNode;
}

const ResponsiveNavbar = (props: ResponsiveNavbarProps) => {
  const { children, styles, className, logo } = props;

  const [media, setMedia] = useState();
  UseMedia('min-width', 1000, setMedia);

  const classId = 'rhm-rn';
  const uniqueId = Math.floor(Math.random() * 30000000);

  return (
    <div className={`${classId}-navigation`}>
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
            }}
          >
            {logo && <span>{logo}</span>}
            <span
              className={`${classId}-navigation__icon`}
              data-testid={'GhostNavbar-icon'}
            >
              {' '}
              &nbsp;
            </span>
          </label>
        </React.Fragment>
      )}
      <nav className={`${classId}-navigation__nav`}>
        {media && logo && (
          <ul>
            <li>{logo}</li>
          </ul>
        )}
        {children ?? (
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

export default ResponsiveNavbar;
