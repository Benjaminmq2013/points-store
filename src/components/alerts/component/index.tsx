import { CSSProperties, useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled("div")<{ visible: boolean, bgColor?: string }>`
  position: fixed;
  right: 10px;
  top: 90px;
  background-color: ${props => props.bgColor ? props.bgColor : "#FF8585" };
  height: 89px;
  width: 390px;
  border-radius: 100px;
  font-size: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .4s;
  z-index: 100;

  transform: translateX(${ props => props.visible ? "0%" : "110%" });

  @media only screen and (max-width: 400px){
    height: 70px;
    width: auto;
    padding: 0 30px;
    font-size: 17px;
  }
`;


/**
 * 
 * css variables:
 * --animation-duration: .2s;
 * 
 * Internal className:
 * 
 * 
 * @param params 
 * @returns JSX.Element and callback (message:string) => void
 */

export interface params {
  onClick?: () => void;
  children?: JSX.Element | JSX.Element[];

  style?: CSSProperties;
  className?: string;
}

export interface alertProps {
  active: boolean, 
  message: string,
  color?: string
}

const App = (params:params) => {
  params = { ...{ className: 'container' }, ...params }

  const INITIAL_STATE:alertProps = { active: false, message: "" }
  const [alert, setAlert] = useState<alertProps>(INITIAL_STATE)

  const createAlert = (message: string, color?: string) => setAlert({ active: true, message, color: color  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert({ ...INITIAL_STATE, color: alert.color })
    }, 4000)

    return () => clearTimeout(timer)
    
  }, [alert.active])
  
  const Alert:JSX.Element = (
    <Container className={params.className} visible={ alert.active } bgColor={ alert.color } >
      {alert.message}
      {params.children}
    </Container>
  );
  return { Alert, createAlert }
}

export default App