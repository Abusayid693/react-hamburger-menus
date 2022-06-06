import React, { HTMLAttributes, ReactNode, useRef, useState } from 'react';
import { HandleOutsideClick } from '../../hooks/useOffset';
import { amplifyString } from "../../utils";
import './style.css';

interface Styles {
  navigation?: React.CSSProperties;
  navigationButton?: React.CSSProperties;
  navigationIcon?: React.CSSProperties;
  navigationCard?: React.CSSProperties;
}

export interface GhostButtonProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  styles?: Styles;
  className?: string;
  id?: string;
  icon?: ReactNode;
  sticky?:boolean;


  floatButtonSize?: string;
  floatButtonX?: number;
  floatButtonY?: number;
  fontColor?: string;
  fontSize?: string | number;
  listHoverColor?: string;

  iconColor?: string;
  iconWidth?: string | number;
  iconHeight?: string | number;

  zIndex?:number
}

const defaultStyles = {
  floatButtonX: 90,
  floatButtonY: 2,
};

export const GhostButton = (
  props: GhostButtonProps = { ...defaultStyles }
) => {
  const { children, styles, className, id, icon, sticky } = props;

  const [checked, setChecked] = useState(false);
  const ref = useRef(null);

  HandleOutsideClick(ref, setChecked);


  const iconWidth = amplifyString(props?.iconWidth, '2.6em', 'px');
  const iconHeight = amplifyString(props?.iconHeight, '2px', 'px');
  const fontSize = amplifyString(props?.fontSize, '1em', 'px');

  var cssVariables = {
    '--gb-floatButtonSize': props?.floatButtonSize ?? 6,
    '--gb-fontColor': props?.fontColor ?? 'black',
    '--gb-fontSize': fontSize,
    '--gb-listHoverColor':
    props?.listHoverColor ?? 'rgba(127, 255, 212, 0.157)',
    '--gb-icon-color': props?.iconColor ?? 'black',
    '--gb-icon-width': iconWidth,
    '--gb-icon-height': iconHeight,
    '--z-index' : props?.zIndex ?? 1000
  } as React.CSSProperties;

  // It tracks how to style the list based on page position
  const uniqueId = id ?? Math.floor(Math.random() * 30000000);
  const classId = 'rhm-gb';

  let listPosition = 'left';
  if (props?.floatButtonX && props?.floatButtonX < 50) listPosition = 'right';

  return (
    <div
      className={`${classId}-navigation ${className}`}
      style={{
        ...styles?.navigation,
        ...cssVariables,
          right: props?.floatButtonX + 'vw',
          top: props?.floatButtonY + 'vh',
          position: sticky? 'fixed' : 'unset'
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
