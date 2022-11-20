import { CSSProperties } from 'react';
import styled from 'styled-components';

const Container = styled("div")<{ visible?: boolean }>`
 

  .${(props) => props.className + "__modal"} {
    background-color: #F6FBFF;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    width: 471px;
    z-index: 1;
    box-shadow: 2px 1px 6px #71717130;
    border-top-right-radius: 26px;
    border-bottom-right-radius: 26px;
    transition: var(--animation-duration, .3s);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    /* transform: translateX(${ props => props.visible ? "var(--visible-anim, 0)" : "-100%" }) */

    transform: ${ props => props.visible 
      ? "var(--visible-anim, translateX(0))" 
      : "var(--hide-anim, translateX(-100%))" 
    }
    
  }
  
  .${(props) => props.className + "__mask"} {
    display: ${ props => props.visible ? "block" : "none" };
    height: 100vh;
    width: 100vw;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #00000019;
    cursor: pointer;
  }

  .${(props) => props.className + "__wrapper"} {
    display: flex;
    align-items: center;
    gap: 7px;
  }

  .${(props) => props.className + "__title"} {
    font-size: 24px;
    color: #43BDFC;
    font-weight: 600;
  }
  
  
  .${(props) => props.className + "__close"} {
    position: absolute;
    right: 0;
    top: 36px;
    right: 38px;
    height: 14px;
    width: 14px;
    background-color: #A9A9A9;
    cursor: pointer;
      :hover{
        background-color: #FFA8A8;
      }
  }
  
`;

const Icon = styled("div")<{ src:string }>`
  -webkit-mask: url(logo.svg) no-repeat center;
  mask: url(${ props => props.src }) no-repeat center;  
`

export interface params {
  onClick?: () => void;
  onClose?: () => void

  visible: boolean;

  title?: string,
  icon?: string
  closeIcon?: string

  style?: CSSProperties;
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

/** 
 * 
 * CSS Variables:
 * 
 * - --visible-anim  // Anim triggered when showing your modal
 * - --hide-anim // Anim triggered when hiding your modal
 * - --animation-duration // Time for you animations in miliseconds
 * 
 * internal className:
 *  - container
 *    - __mask
 *    - __modal
 *      - __wrapper
 *        - __icon
 *        - __title* 
 * 
 *      - __close
 * 
 * 
 * @param params 
 * @param params.onClick handle click 
 * @param params.onClose callback for closing modal 
 * @param params.visible show/hide modal
 * @param params.title title
 * @param params.title path for the icon (src)
 * @param params.closeIcon path for a secondary icon (src)
 * @param params.style an object with custom css properties
 * @param params.className Prefix for every internal className. This will be also the className for the container
 * @param params.children content for the modal
 * 
 * @example
 * <Modal title="History" visible={ visible } onClose = { handdleClose } icon="assets/icons/book-blue.svg" closeIcon='assets/icons/close.svg' >
      <h1>Place your content here</h1>
    </Modal>
 *  
 * @returns JSX.Element
 */

const App = (params:params):JSX.Element => {
  params = { ...{ className: 'container' }, ...params }

  return (
    <Container className={ params.className } visible={ params.visible } onClick={ params.onClick } >
      <div className={ params.className + "__mask" } onClick={ params.onClose } ></div>
      
      <div className={params.className + "__modal" } >

        <div className={ params.className + "__wrapper"}>
          {params.icon && <img className={ params.className + "__icon"} src={ params.icon } /> }
          {params.title && <h3 className={ params.className + "__title"}>{ params.title }</h3> }
        </div>

        {params.closeIcon && <Icon className={ params.className + "__close"} src={ params.closeIcon } onClick={ params.onClose } /> }

        { params.children }
      </div>
    </Container>
  )
}

export default App