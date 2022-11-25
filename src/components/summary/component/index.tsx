import { CSSProperties } from 'react';
import styled from 'styled-components';

const Container = styled("div")<{ selected?: boolean }>`
  --padding: 173px;
  
  padding: 0 var(--padding, 173px);
  height: 378px;
  width: calc(100% - var(--padding) * 4);
  margin-top: 61px;
  box-shadow: 0px 1px 4px #58585834;
  border-radius: 13px;
  display: flex;
  align-items: center;
  flex-direction: column;
  

  .${(props) => props.className + "__wrapper"} {
    margin-top: 33px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .${(props) => props.className + "__title"} {
    margin: 0;
    color: #75D5FF;
    margin-bottom: 26px;
  }
  
  .${(props) => props.className + "__properties"} {
    display: flex;
    width: 426px;
    justify-content: space-between;
  }
  
  .${(props) => props.className + "__key"} {
    margin: 0;
    color: #ACACAC;
    font-size: 20px;
  }
  
  .${(props) => props.className + "__value"} {
    font-size: 16px;
    color: #ACACAC;

  }
  .${(props) => props.className + "__bottom-text"} {
    font-size: 12px;
    color: #C1C1C1;
    margin-top: 3px;
  }
  
  .${(props) => props.className + "__footer"} {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 25px;  
    position: absolute;
    bottom: 14px;
  }
  
  .${(props) => props.className + "__footer_link"} {
    font-size: 13px;
    color: #929292;
    text-decoration: none;
  }  

`;

export interface property{
  title: string
  value: string
  id: string
}

export interface params {

  onClick?: () => void;
  style?: CSSProperties;
  className?: string;

  title: string
  values: property[]
  button?: JSX.Element
  footerLinks: string[]
}

/** 
 * 
 * CSS Variables:
 * - --padding
 * 
 * 
 * internal className:
 *  - container
 *    - __wrapper
 *      - __title
 *        - __properties
 *          - __key
 *          - __value
 * 
 *        - button_container
 *      - __bottom-text
 * 
 *    - __footer
 *      - __footer_link
 * 
 * @param params.
 * @param params.title Title
 * @param params.values List of properties key-value for the summary, you can import { property } types from here.
 * @param params.button Button is a JSX.Element, you can send another component here.
 * @param params.footerLinks Anchor links, you can send the URL here
 * @param params.style CSSProperties
 * @param params.className className for the container and a prefix for the internals
 * 
 * @example
 * 
 * <Summary
    title="Summary:"
    values={ selected === "basic" ? basicSelected : selected === "premium" ? premiumSelected : goldSelected  }
    className="store-summary"    
  />
 * 
 *  
 * @returns JSX.Element
 */

const App = (params:params):JSX.Element => {
  params = { ...{ className: 'container' }, ...params }

  return (
    <Container className={ params.className } onClick={ params.onClick }  >          
      <div className={ params.className + "__wrapper" }>
        <h3 className= {params.className + "__title"} >{ params.title }</h3>

        {params.values.map((elem, id) => (
          <div className={ params.className + "__properties" } id={ "__properties" + elem.id } key={ id } >
            <h4 className={ params.className + "__key" }>{ elem.title }</h4>
            <span className= { params.className + "__value" }>{ elem.value }</span>
          </div>
        ))}

          <div className={ params.className + "button_container"}>
            { params.button }            
          </div>
        <span className={params.className + "__bottom-text"}>By clicking you accept our <u>Terms and conditions</u> </span>
      </div>

      <section className={ params.className + "__footer"}>
        {params.footerLinks.map((link, id) => (
          <a key={ id } href="#" className={ params.className + "__footer_link"}>{ link }</a>
        ))}
      </section>
    </Container>
  )
}

export default App