import { CSSProperties, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled("div")<{ visible: boolean }>`
  position: fixed;
  right: 10px;
  top: 90px;
  background-color: #FF8585;
  height: 89px;
  width: 390px;
  border-radius: 100px;
  font-size: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .4s;

  transform: translateX(${ props => props.visible ? "0%" : "110%" });
`;

export interface params {
  onClick?: () => void;
  handleHideAlert: () => void;

  title: string;
  visible: boolean;
  children?: JSX.Element | JSX.Element[];

  style?: CSSProperties;
  className?: string;
}

/**
 * 
 * css variables:
 * --animation-duration: .2s;
 * 
 * Internal className:
 * 
 * 
 * @param params 
 * @returns 
 */

const App = (params:params):JSX.Element => {
  params = { ...{ className: 'container' }, ...params }

  useEffect(() => {
    setTimeout(() => {
      if(params.visible === true) params.handleHideAlert()
    }, 4000)
  }, [params.visible])
  

  return (
    <Container className={ params.className } visible={ params.visible }  >
      { params.title }
      { params.children }
    </Container>
  )
}

export default App