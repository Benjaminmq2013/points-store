import { CSSProperties, useRef } from 'react';
import styled from 'styled-components';

const Button = styled("button")<{ isDisabled?: boolean }>`
  color: #fefefe;
  font-size: 24px;
  background-color: #0ad4fa;
  border-radius: 20px;
  border: 0;
  outline: none;
  cursor: pointer;
  padding: 7px 20px;
  transition: 0.2s;

  display: flex;
  align-items: center;
  gap: 3px;

  :hover {
    background-color: #ededed;
    color: #a3a3a3;
  }

  .${(props) => props.className + "__icon"} {
    cursor: pointer;
  }
`;

export interface params{
  title?: string
  icon?: string
  onClick?: () => void
  isDisabled?: boolean
  style?: CSSProperties
  className?: string
}

/**
 * internal className
 *  - button
 *      - __icon
 * 
 * @param params 
 * @param params.title Button title
 * @param params.Icon Button Icon (URL)
 * @param params.isDisabled Activates the btn-disabled className, you can customize it too
 * @param params.onClick callback
 * @param params.style CSS in JS Properties
 * @param params.className className for the container of this component and prefix for the internals
 * 
 * @example
 * <Button className="header-button" title={`${ user.points }`} icon={ "assets/icons/coin.svg" } />
 * 
 * @returns JSX.Element
 */

const App = (params:params):JSX.Element => {  

    params = { ...{ className: 'button' }, ...params }   

    return (
      <Button className={`${ params.className } ${ params.isDisabled ? "btn-disabled" : "" } ` } onClick={params.onClick} isDisabled={ params.isDisabled }  >        
        {params.icon && (
          <img
            src={params.icon}
            alt="icon"
            className={params.className + "__icon" }
            onClick={params.onClick}
          />
        )}

        {params.title}
      </Button>
    );
}

export default App