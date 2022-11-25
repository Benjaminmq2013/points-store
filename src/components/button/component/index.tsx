import { CSSProperties, useRef } from 'react';
import styled from 'styled-components';

const Button = styled("button")<{ isDisabled? : boolean }>`
    color: #fefefe;
    font-size: 24px;
    background-color: #0AD4FA;
    border-radius: 20px;
    border: 0;
    outline: none;
    cursor: pointer;
    padding: 7px 20px;
    transition: .2s;

    display: flex;
    align-items: center;
    gap: 3px;


    
    :hover{
        background-color: #EDEDED;
        color: #A3A3A3;
    }

    .${ props => props.className + "__icon" }{
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
 * @returns 
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