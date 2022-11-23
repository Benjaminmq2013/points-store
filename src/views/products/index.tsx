
import styled from 'styled-components';


import Header, { optionProps } from "../../components/header"
import Button from "../../components/button"
import Hero from "../../components/hero"
import Card from '../../components/card';
import History from "../history"
import Shop from "../shop"

import useHandleMenu from '../../hooks/useHandleMenu';
import useProcess from '../../hooks/useProcess';
import useHandleFilters from '../../hooks/useHandleFilters';


const Container = styled.div`

  --view-padding: 132px;

  .header-button {
    background-color: #ededed;
    color: #616161;
    margin-right: 42px;
    flex-direction: row-reverse;
    padding-right: 10px;
    :hover {
      background-color: #f5f5f5;
    }
  }

  .products-filters__container {
    display: flex;
    align-items: center;
    height: 49px;
    padding: 0 var(--view-padding);
    margin-top: 64px;
  }

  .product-filters__tags{
    display: flex;
    align-items: center;
    height: inherit;
    gap: 25px;
  }

  .product-title{
    color: #616161;
    font-size: 24px;
  }
  
  .product-subtitle{
    font-size: 24px;
    color: #A3A3A3;
  }
  .product-title__hr{
    border: 1px solid #D9D9D9;
    width: 0;
    height: 100%;
  }

  .product-filters__buttons{
    display: flex;
    gap: 22px;
    margin-left: 22px;
  }

  .filter-button{
    background-color: #EDEDED;
    color: #A3A3A3;
  }
  .filter-button:hover{
    background-color: #0AD4FA;
    color: white;
  }
  .btn-selected{
    background-color: #0AD4FA;
  }

  .product-navigate__buttons{
    display: flex;
    gap: 12px;
    margin-left: auto;
    cursor: pointer;
  }

  .products-grid{
    padding: 0 var(--view-padding);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
  }

  .product__hr{
    border: 1px solid #D9D9D9;
    margin-top: 25px;
    width: calc( 100% - calc(var(--view-padding) * 2));
  }

  .buy-button{
    background-color: white;
    color: #616161;
    font-size: 18px;
    padding: 11px 60px;
    margin-top: 17px;
      :hover{
        /* box-shadow: 0px 0px 6px white; */
        background-color: #70eaff;
        color: white;
      }
  }
  
  .products-foter{
    margin-top: 60px;
    margin-bottom: 74px;
    padding: 0 var(--view-padding);
  }

  .row{
    display: flex;
    max-width: 100%;
  }

  .product-footer_hr{
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }

`;

// SVG with dynamic color
const Icon = styled("div")<{ src: string }>`
  background-color: #D9D9D9;
  -webkit-mask: url(${props => props.src}) no-repeat center;
  mask: url(${ props => props.src }) no-repeat center;
  height: 48px;
  width: 48px;
  transition: .3s;

  :hover{
    background-color: #36afff;
  }
`



const App = ():JSX.Element => {
  
  const { filteredProducts, handleHighest, handleLowest, handleRecent } = useHandleFilters()
  const { handleVisible, visible, handleClose } = useHandleMenu()  
  const { user } = useProcess()

  
  const { 
    handleVisible: handleModalVisible, 
    visible:modalVisible, 
    handleClose:handleCloseModal 
  } = useHandleMenu()  
   
  
  const options: optionProps[] = [
    { title: "History", icon: "assets/icons/book.svg", onClick: handleVisible },
    { title: "Get points", icon: "assets/icons/cash.svg", onClick: handleModalVisible },
    { title: user.name, icon: "" },
  ];
  
  return (
    <Container>
      <Header
        options={options}
        logo="assets/aerolab-logo.svg"
        Phill={<Button className="header-button" title={`${ user.points }`} icon={ "assets/icons/coin.svg" } />}
      />

      <Hero src="assets/header-x1.png" title='Electronics' />

      <div className="products-filters__container">

        <div className="product-filters__tags">
          <span className="product-title">16 of 32 products</span>
          <hr className="product-title__hr" />
          <span className="product-subtitle">Sort By:</span>
        </div>

        <div className="product-filters__buttons">
          <Button title='Most recent' onClick={ handleRecent } className="filter-button" />
          <Button title='Lowest price' onClick={ handleLowest } className="filter-button" />
          <Button title='Highest price' onClick={ handleHighest } className="filter-button" />
        </div>

        <div className="product-navigate__buttons">          
          <Icon className="navigate-button" src="assets/icons/arrow-left.svg" ></Icon>
          <Icon className="navigate-button" src="assets/icons/arrow-right.svg" ></Icon>
        </div>
      </div>
      <hr className="product__hr" />


      <div className="products-grid">
        {filteredProducts.map(product => (
          <Card 
            key={ product._id }
            icon='assets/icons/buy-blue.svg' 
            image={ product.img.url } 
            title={ product.category } 
            subtitle={ product.name } 
            price = { product.cost }
            iconSecondary='assets/icons/buy-white.svg' 
            iconTertiary='assets/icons/coin.svg' 
            children={ <Button title='Redeem mow' onClick={() => {}} className="buy-button" /> } 
          />
        ))}
        
      </div>

      <footer className="products-foter">
        <div className="row">
          <span className="product-title">16 of 32 products</span>
          <div className="product-navigate__buttons">          
            <Icon className="navigate-button" src="assets/icons/arrow-left.svg" ></Icon>
            <Icon className="navigate-button" src="assets/icons/arrow-right.svg" ></Icon>
          </div>
        </div>
        <hr className="product__hr product-footer_hr" />
      </footer>

      <History visible={ visible } handleClose={ handleClose } />
      <Shop handleClose={ handleCloseModal } visible={ modalVisible } />
      
    </Container>
  );
}

export default App