import { CSSProperties } from 'react';
import styled from 'styled-components';

const Container = styled("div")`
  position: relative;
  padding: 0 23px;
  margin-top: 42px;
  height: 276px;
  width: calc(276px - (23px * 2));  
  box-shadow: 2px 2px 4px #00000020;
  background-color: white;
  border-radius: 11px;
  cursor: pointer;
  overflow: hidden;
  transition: var(--animation-duration);

  display: flex;
  flex-direction: column;
  align-items: center;

  --animation-duration: .2s;

  .${(props) => props.className + "__icon"} {
    position: absolute;
    right: 12px;
    top: 12px;
  }

  .${(props) => props.className + "__image-container"} {
    width: 252px;
    height: 182px;
    margin: 0;
    margin-top: 12px;
  }
  
  .${(props) => props.className + "__hr"} {
    border: 1px solid #D9D9D9;
    width: 228px;
    height: 0px;
    margin-bottom: 21px;
    margin-top: 0;
  }
  
  .${(props) => props.className + "__title"} {
    font-size: 16px;
    color: #A3A3A3;
    font-weight: 400;
    margin: 0;
  }
  
  .${(props) => props.className + "__subtitle"} {
    font-size: 18px;
    color: #616161;
    font-weight: 400;
    margin: 0;
    text-align: start;
  }
  
  .${(props) => props.className + "__wrapper"} {
    width: 228px;
  }
    
  .${(props) => props.className + "__panel"} {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color:#0ad2fae8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;   
    transition: var(--animation-duration);
    bottom: -100%;
  }

    :hover .${(props) => props.className + "__panel"}{
      transform: translateY(-100%);
    }

  .${"__secondary-icon"} {
    margin-top: 10px;
  }
  .${(props) => props.className + "__price"} {
    font-size: 36px;
    color: white;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
  }

 
  
`;

export interface params {
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;

  title: string;
  subtitle: string;
  price: number;
  image: string;
  icon?: string;
  iconSecondary?: string;
  iconTertiary?: string;
  children?: JSX.Element
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

  return (
    <Container className={ params.className } >
      <figure className={ params.className + "__image-container" }>
        <img src={ params.icon } alt="" className={ params.className + "__icon" }/>
        <img src={ params.image } alt="" className={ params.className + "__image" }/>
      </figure>
        
      <hr className={ params.className + "__hr"} />

      <div className={ params.className + "__wrapper" }>
        <h3 className={ params.className + "__title"}>{ params.title }</h3>
        <h3 className={ params.className + "__subtitle"}>{ params.subtitle }</h3>
      </div>

      <div className={ params.className  + "__panel" }>
        <img src={ params.iconSecondary } alt="" className={ params.className + "__icon" }/>
        <span className={ params.className + "__price"}>{ params.price }<img src={ params.iconTertiary } /> </span>
        { params.children }
      </div>

    </Container>
  )
}

export default App