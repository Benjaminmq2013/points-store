import { CSSProperties, useState } from 'react';
import styled, { keyframes } from 'styled-components';



const Container = styled("div")<{ className?: string, hover: number }>`
  height: 80px;  
  width: 100%;
  margin: 0 auto;
  background-color: white;

  display: flex;
  align-items: center; 
  box-shadow: 0px 0px 6px #d1d1d1;

  .link_${ props => props.hover }{
    .${ props => props.className + "__icon"}{
      background-color: #e5b00e;
    }

    .${ props => props.className + "__link"}{
      border-bottom: 2px solid #e5b00e;
      padding: 13px 0;
      color: #e5b00e;
    }

  }
  
  .${ props => props.className + "__logo"} {
    margin-left: 40px;
    cursor: pointer;
  }

  .${ props => props.className + "__link"} {
    margin-right: 35px;
    cursor: pointer;
    font-size: 24px;
    color: #616161;
    transition: .3s;
    border-bottom: 2px solid transparent;
    border-top: 2px solid transparent;
    padding: 18px 0;   
    
  }
  
  .${ props => props.className + "__links_container"} {
    margin-left: auto;
    display: flex;
    align-items: center;
  }
  
  .${ props => props.className + "__icon"} {
    margin-right: 17px;
    width: 28px;
    height: 22px;   
    transition: .3s;
  }   
  
  .${ props => props.className + "__links_wrapper"}{
    display: flex;
    align-items: center;
  }
  
  @media only screen and (max-width: 850px){
    .${ props => props.className + "__logo"} {
      margin-left: 28px;
    }
  }
  @media only screen and (max-width: 700px){
    .${ props => props.className + "__logo"} {
      margin-left: 28px;
    }
    .${ props => props.className + "__link"} {
      font-size: 19px;
    }
    .${ props => props.className + "__icon"}{
      margin-right: 10px;
    }
  }
 
  `;

const Icon = styled("div")<{ src:string }>`
  background-color: #646464;
  -webkit-mask: url(logo.svg) no-repeat center;
  mask: url(${ props => props.src }) no-repeat center;
  cursor: pointer;
  `

export interface optionProps{
  title: string
  icon: string
  onClick?: () => void;
}

export interface params{  
  style?: CSSProperties
  className?: string
  Phill?: JSX.Element
  onClick?: () => void

  logo: string
  options: optionProps[]
}

/**
 * internal className:
 *  - container
 *    - __logo
 *    - __links_container
 *      - __icon
 *      - __link
 * 
 *    - header-button
 *    
 * @example
 * <Header
        className="products-header"
        options={options}
        logo="assets/aerolab-logo.svg"
        Phill={<Button className="header-button" title={`${ user.points }`} icon={ "assets/icons/coin.svg" } />}
    />
 * 
 * @param params
 * @param params.logo An URL for the logo
 * @param params.options A list of "option" element, you can import the types { options } from this component
 * @param params.Phill This is a JSX.Element, think of it like a children
 * @param params.onClick callback
 * @param params.style CSS in JS Properties
 * @param params.className className for the container of this component and prefix for the internals
 * @returns 
 */


const App = (params:params):JSX.Element => {
    const [mouseOver, setMouseOver] = useState(0)

    params = { ...{ className: 'container' }, ...params }    
    const handleMouseOver = (n:number) => setMouseOver(n)
    const handleMouseLeave = () => setMouseOver(0)

    return (
      <Container className={ params.className } hover={ mouseOver } >

        <img className={ params.className + "__logo" } src={ params.logo } alt="logo" onClick={ params.onClick } />
        <div className={ params.className + "__links_container" }>

          {params.options.map((opt, i) => (
            <div className={ `${ params.className + "__links_wrapper" } link_${i + 1}` } key={ i } >
              { opt.icon &&<Icon src={ opt.icon } 
                className={ params.className + "__icon" } 
                onMouseOver = { () => handleMouseOver(i + 1) } 
                onMouseLeave={ handleMouseLeave } 
                onClick={ opt.onClick } /> 
              } 

              <a 
                className={ params.className + "__link" } 
                onClick={ opt.onClick } 
                onMouseOver = { () => handleMouseOver(i + 1) }  
                onMouseLeave={ handleMouseLeave } >
                { opt.title }
              </a>

            </div>
          ))}

            { params.Phill }
        </div>

      </Container>
    )
}

export default App 