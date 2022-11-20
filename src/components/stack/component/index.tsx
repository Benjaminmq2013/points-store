import { CSSProperties } from 'react';
import styled from 'styled-components';

const Container = styled("div")<{ selected?: boolean }>`

  --animation-duration: .3s;


  width: 253px;
  height: 71px;
  box-shadow: ${ props => props.selected ? "0px 1px 4px #58585865" : "0px 1px 4px #58585839" };
  transform: translateY( ${ props => props.selected ? "0" : "7px" });
  border-radius: 13px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--animation-duration, .3s);

  

  .${(props) => props.className + "__span"} {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #6A6A6A;
    gap: 1px;
  }

  .${(props) => props.className + "__icon"} {
    margin-top: 4px;
    height: 30px;
    width: 30px;
  }
  
  .${(props) => props.className + "__tag"} {
    position: absolute;
    top: 5px;
    left: 5px;
    font-size: 13px;
    color: white;
    height: 19px;
    width: 76px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;

    background-color: grey;
  }
  
  .${(props) => props.className + "__title"} {
    color: #C4C4C4;
    font-size: 13px;
    bottom: -23px;
    position: absolute;
    
  }
  
  .${(props) => props.className + "__name_container"} {
    position: absolute;
    top: -22px;
    left: 0;
    height: 17px;
    max-height: 17px;
    overflow: hidden;
  }

  .${(props) => props.className + "__name"} {
    font-size: 13px;
    color: #28D63A;
    display: flex;    
    align-items: center;
    z-index: 3;
    transition: var(--animation-duration, .3s);
    transform: translateY( ${ props => props.selected ? "0" : "13px" });
  }

  .${(props) => props.className + "__tagSecondary"} {
    position: absolute;
    bottom: 6px;
    right: 13px;
    font-size: 11px;
    color: #369CE1;
    
  }
  
  
  .${(props) => props.className + "__icon_Tertiary"} {
    height: 10px;
    width: 10px;
    margin-right: 4px;    
  }
  
  
  
  

`;

const Icon = styled("div")<{ src?:string }>`
  -webkit-mask: url(${ props => props.src }) no-repeat center;
  mask: url(${ props => props.src }) no-repeat center;  
  background-color: #28D63A;
  height: 9px;
  width: 9px;
  margin-top: 5px;
  margin-right: 3px;
  margin-left: 12px;
`



export interface params {
  onClick?: () => void;
  
  icon?: string;
  title?: string;
  selected?:boolean;
  name?: string;
  tag?: string;  
  price?: number;

  iconSecondary?: string;
  tagSecondary?: string;
  iconTertiary?: string;

  style?: CSSProperties;
  className?: string;
}

/** 
 * 
 * CSS Variables:
 * 
 * 
 * 
 * internal className:
 *  
 * 
 * 
 * @param params 
 * 
 * 
 * @example
 * 
 *  
 * @returns JSX.Element
 */

const App = (params:params):JSX.Element => {
  params = { ...{ className: 'container' }, ...params }

  return (
    <Container className={ params.className } onClick={ params.onClick } selected={ params.selected } >  
        
      <div className={ params.className + "__span"}>
        <img src={ params.icon } alt="" className={ params.className + "__icon" } />
        { params.price }
      </div>

      <div className={ params.className + "__name_container"}>
        <span className={ params.className + "__name" }>
          <Icon src={ params.iconSecondary } className={ params.className  + "__icon_secondary"} />
          { params.name }
        </span>
      </div>


      <div className={ params.className + "__tag" }>        
        { params.tag }         
      </div>

      { params.tagSecondary && <span className={ params.className + "__tagSecondary" }>
        <img src={ params.iconTertiary } className={ params.className  + "__icon_Tertiary"} />
        { params.tagSecondary }
      </span>}

      <div className={ params.className + "__title" }>{ params.title }</div>
    </Container>
  )
}

export default App