import React, { HTMLAttributes, ReactNode, useRef, useState } from 'react';
import { HandleOutsideClick } from './hook';
import './style.css';

interface Styles {
  // Base styles
  navigation?: React.CSSProperties;
  navigationButton?: React.CSSProperties;
  navigationIcon?: React.CSSProperties;
  navigationCard?: React.CSSProperties;
  // Style variables
  floatButtonSize?: string;
  floatButtonX?: number;
  floatButtonY?: number;
  fontColor?: string;
  fontSize?: string;
  listHoverColor?: string;

  iconColor?: string;
  iconWidth?: string;
  iconHeight?: string;
}

export interface GhostButtonProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  styles?: Styles;
  className?: string;
  id?: string;
  icon?: ReactNode;
}

const defaultStyles = {
  floatButtonX: 90,
  floatButtonY: 2,
};

export const GhostButton = (
  props: GhostButtonProps = { styles: defaultStyles }
) => {
  const { children, styles, className, id, icon } = props;

  const [checked, setChecked] = useState(false);
  const ref = useRef(null);

  HandleOutsideClick(ref, setChecked);

  var cssVariables = {
    '--gb-floatButtonSize': styles?.floatButtonSize ?? 6,
    '--gb-fontColor': styles?.fontColor ?? 'black',
    '--gb-fontSize': styles?.fontSize ?? '1em',
    '--gb-listHoverColor':
      styles?.listHoverColor ?? 'rgba(127, 255, 212, 0.157)',
    '--gb-icon-color': styles?.iconColor ?? 'black',
    '--gb-icon-width': styles?.iconWidth ?? '2.6em',
    '--gb-icon-height': styles?.iconHeight ?? '2px',
  } as React.CSSProperties;

  // It tracks how to style the list based on page position
  const uniqueId = id ?? Math.floor(Math.random() * 30000000);
  const classId = 'rhm-gb';

  let listPosition = 'left';
  if (styles?.floatButtonX && styles?.floatButtonX < 50) listPosition = 'right';

  return (
    <div
      className={`${classId}-navigation ${className}`}
      style={{
        ...styles?.navigation,
        ...cssVariables,
      }}
      ref={ref}
      data-testid={'GhostButton'}
    >
      <input
        type="checkbox"
        className={`${classId}-navigation__checkbox`}
        id={`${classId}-nav-toggle-${uniqueId}`}
        checked={checked}
        onChange={() => setChecked(!checked)}
        data-testid={'GhostButton-checkbox'}
      />
      <label
        htmlFor={`${classId}-nav-toggle-${uniqueId}`}
        className={`${classId}-navigation__button`}
        style={{
          ...styles?.navigationButton,
          right: styles?.floatButtonX + 'vw',
          top: styles?.floatButtonY + 'vh',
        }}
        data-testid={'GhostButton-button'}
      >
        {icon ?? (
          <span
            className={`${classId}-navigation__icon`}
            style={{
              ...styles?.navigationIcon,
            }}
            data-testid={'GhostButton-icon'}
          >
            &nbsp;
          </span>
        )}
        <div
          className={`
          ${classId}-navigation__card
          ${classId}-navigation__card--${listPosition}
          
          `}
          style={{
            ...styles?.navigationCard,
          }}
          data-testid={'GhostButton-card'}
        >
          {children ?? (
            <ul>
              <li>ABOUT</li>
              <li>PROJECTS</li>
              <li>ELEMENTS</li>
              <li>CONTACT</li>
            </ul>
          )}
        </div>
      </label>
    </div>
  );
};
