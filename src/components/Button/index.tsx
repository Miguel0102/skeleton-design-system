import './Button.scss';
import * as CSS from 'csstype';
import React from 'react';
import { Images } from '../../assets/images/images.index';
export interface IPropsButton {
  label?: string;
  className?: string;
  onClick?: () => void;
  type?: 'submit' | 'button';
  isDisabled?: boolean;
  children?: JSX.Element;
  isLoading?: boolean;
  styleInLine?: CSS.Properties<string | number>;
}

const Button: React.FC<IPropsButton> = (props) => {
  return (
    <button
      type={props.type}
      onClick={
        props.isLoading || props.isDisabled
          ? () => {
              return;
            }
          : props.onClick
      }
      disabled={props.isDisabled}
      className={`btn__button ${props.className ? props.className : ''} ${
        props.isDisabled ? 'disabled' : ''
      } ${props.isLoading ? 'loading' : ''}`}
      style={props.styleInLine}
    >
      {props.isLoading && (
        <div className="loader__container">
          <div className="loader"></div>
        </div>
      )}

      {!props.children ? (
        <>
          <span className="btn__label">{props.label}</span>
          <div
            className="btn__icon"
            dangerouslySetInnerHTML={{ __html: Images.iconButton }}
          ></div>
        </>
      ) : (
        <>{props.children}</>
      )}
    </button>
  );
};

export default Button;
