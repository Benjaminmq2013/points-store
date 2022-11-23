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
 * 
 * @param params 
 * @returns 
 */

const App = (params:params):JSX.Element => {
    params = { ...{ className: 'container' }, ...params }

    return <Icon src={ params.src } className={ params.className } />
}

export default App