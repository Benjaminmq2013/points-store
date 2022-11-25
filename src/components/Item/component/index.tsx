import { CSSProperties } from 'react';
import styled from 'styled-components';

const Container = styled("div")`
  width: calc(100% - 14px );
  height: 100px;
  background-color: white;
  border-radius: 12px;
  margin-top: 25px;
  box-shadow: 2px 2px 4px #00000028;
  padding-right: 14px;
  display: flex;
  align-items: center;
  transition: .2s;
  cursor: pointer;
    :hover{
      transform: scale(1.02);
    }

  
  .${(props) => props.className + "__row"} {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .${(props) => props.className + "__image_container"} {
    width: 114px;
    height: 82px;
    margin: 0;
    overflow: hidden;
  }
  .${(props) => props.className + "__image"} {
    object-fit: cover;
    height: inherit;
  }
  .${(props) => props.className + "__icon"} {
    width: 26px;
    height: 26px;
    margin-bottom: 4px;
    margin-right: 3px;
  }

  .${(props) => props.className + "__secondary-icon"} {
    width: 31px;
    height: 31px;
    margin-top: 4px;
  }

  .${(props) => props.className + "__column"} {
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
  }
  
  .${(props) => props.className + "__wrapper"} {  
    display: flex;
    flex-direction: column;
    align-items: flex-end;   
    margin-left: auto;
  }
  .${(props) => props.className + "__span"} {  
    margin-right: 12px;
    color: #616161;
    font-size: 18px;
  }
  .${(props) => props.className + "__title"} {
    color: #A3A3A3;
  }
`;

export interface params {
  onClick?: () => void
  style?: CSSProperties
  className?: string

  title: string
  subtitle?: string,
  span?: string
  icon: string
  iconSecondary?: string
  image: string;
}

/**
 * internal className:
 * - container 
 *    - __row
 *      - __image_container
 *        - __image
 * 
 *    - __column
 *      - __title
 *      - __subtitle
 * 
 *    - __wrapper
 *      - __icon
 *      - __row
 *        - __span
 *        - __secondary-icon
 * 
 * 
 * @param params
 * @param params.title Title for the item
 * @param params.subtitle Subtitle
 * @param params.span optional span
 * @param params.icon URL for an icon
 * @param params.icon URL for an optional and secondary icon
 * @param params.onClick callback
 * @param params.style CSS in JS Properties
 * @param params.className className for the container of this component and prefix for the internals
 * 
 * @example
 * <Item
      image={ elem.img.url }
      title={ elem.category }
      subtitle={ elem.name }
      iconSecondary="assets/icons/coin.svg"
      icon="assets/icons/buy-blue.svg"
      key={ i }
      span={`${ elem.cost }`}
    />
 * 
 * @returns JSX.Element
 */

const App = (params:params):JSX.Element => {
    params = { ...{ className: 'container' }, ...params }

    return (
      <Container className={ params.className } >
        <div className={ params.className + "__row" }>
          <figure className={params.className + "__image_container"} >
            <img src={ params.image } className={ params.className + "__image" } />
          </figure>

          <div className={ params.className + "__column" }>
            <span className={ params.className + "__title" } >{ params.title }</span>
            <span className={ params.className + "__subtitle" } >{ params.subtitle }</span>
          </div>

          <div className={ params.className + "__wrapper" }>
            <img src={ params.icon } alt="" className={ params.className + "__icon"} />
            <div className={ params.className + "__row"}>
              <span className={ params.className + "__span" } >{ params.span }</span>
              <img src={ params.iconSecondary } alt="" className={ params.className + "__secondary-icon"} />
            </div>
          </div>
          
        </div>
      </Container>
    )
}

export default App