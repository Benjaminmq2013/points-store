import { CSSProperties } from 'react';
import styled from 'styled-components';

const Icon = styled("div")<{ src: string }>`
  background-color: #909090;
  -webkit-mask: url(${props => props.src}) no-repeat center;
  mask: url(${ props => props.src }) no-repeat center;
  mask-size: 100%;
  height: 48px;
  width: 48px;
  transition: .3s;

  :hover{
    background-color: #36afff;
  }
`

export interface params {
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;  

  src: string;
}

/**
 * Reusable SVG container
 * -The target is to have a customizable SVG container
 * -You can set colors to it by just assigning a background-color
 * 
 * internal className:
 *  - container
 * 
 * @param params
 * @param params.src src for the Icon
 * @param params.onClick callback
 * @param params.style CSS in JS Properties
 * @param params.className className for the container of this component and prefix for the internals
 * 
 * @example 
 * <Icon className="navigate-button" src="assets/icons/arrow-left.svg" onClick={ handleLastPage } ></Icon>
 * 
 * @returns JSX.Element
 */

const App = (params:params):JSX.Element => {
    params = { ...{ className: 'container' }, ...params }

    return <Icon src={ params.src } className={ params.className } onClick={ params.onClick } />
}

export default App