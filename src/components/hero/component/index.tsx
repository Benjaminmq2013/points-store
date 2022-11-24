import { CSSProperties } from 'react';
import styled from 'styled-components';

const Container = styled("div") <{ src: string }>`
  height: 412px;
  width: 100%;
  background-image: url(${ props => props.src });
  background-position: center;
  background-size: 100%;
  position: relative;
  
  .${(props) => props.className + "__header"} {
    margin: 0;
    position: absolute;
    color: white;
    bottom: 33px;
    left: 122px;
    
    font-size: 64px;
  }
  
  @media only screen and (max-width: 1080px){
    height: 279px;
  }
  
  @media only screen and (max-width: 768px){
    height: 208px;

    .${(props) => props.className + "__header"} {
      left: 67px;
      font-size: 49px;
    }
  }

  @media only screen and (max-width: 415px){
    .${props => props.className + "__header"}{
      font-size: 30px;
      left: 20px;
    }
  }
  `;

export interface params {
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;
  title?: string;
  src: string;
}

/**
 * 
 * @param params 
 * @returns 
 */

const App = (params:params):JSX.Element => {
    params = { ...{ className: 'container' }, ...params }

    return (
      <Container className={params.className} src={params.src}>
        {params.title && (
          <h2 className={params.className + "__header"}>{params.title}</h2>
        )}
      </Container>
    );
}

export default App