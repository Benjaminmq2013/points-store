import { CSSProperties } from 'react';
import styled from 'styled-components';

const Container = styled("div")<{ columns: number }>`
  bottom: 0;
  position: fixed;
  width: 100vw;
  height: 73px;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  .${props => props.className + "__option"}{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #828282;
    background-color: white;
    border: 0;
    gap: 5px;
  }
`;

export interface option{
  title: string,
  icon: string
  onClick?: () => void
}

export interface params {
  onClick?: () => void
  style?: CSSProperties
  className?: string

  options: option[]
}

/**
 * Internal className:
 *  - container
 *    - __option
 *      - option-icon
 * 
 * @param params
 * @param params.options a list of options, you can import the { option } type from here
 * @param params.onClick callback
 * @param params.style CSS in JS Properties
 * @param params.className className for the container of this component and prefix for the internals
 * 
 * <Menu 
 *  className="mobile-menu" 
 *  options={[ 
 *    {title: "Get points", icon: "assets/icons/cash.svg", onClick: handleModalVisible  }, 
 *    { title: "History", icon: "assets/icons/book-grey.svg", onClick: handleVisible } 
 *  ]} 
 * />
 * 
 * @returns JSX.Element
 */

const App = (params:params):JSX.Element => {
    params = { ...{ className: 'container' }, ...params }

    return (
      <Container className={ params.className } columns={params.options.length} >
        {params.options.map((elem, i) => (
          <button className={params.className + "__option"} key={ i } onClick={elem.onClick} >
            <img src={ elem.icon } alt="option-icon" />
            { elem.title }
          </button>
        ))}
      </Container>
    )
}

export default App