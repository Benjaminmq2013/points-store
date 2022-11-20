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
    <Container className={ params.className } onClick={ params.onClick }  >          
      <div className={ params.className + "__wrapper" }>
        <h3 className= {params.className + "__title"} >{ params.title }</h3>

        {params.values.map(elem => (
          <div className={ params.className + "__properties" } id={ "__properties" + elem.id } >
            <h4 className={ params.className + "__key" }>{ elem.title }</h4>
            <span className= { params.className + "__value" }>{ elem.value }</span>
          </div>
        ))}

        { params.button }
        <span className={params.className + "__bottom-text"}>By clicking you accept our <u>Terms and conditions</u> </span>
      </div>

      <section className={ params.className + "__footer"}>
        {params.footerLinks.map(link => (
          <a href="#" className={ params.className + "__footer_link"}>{ link }</a>
        ))}
      </section>
    </Container>
  )
}

export default App