
import styled from 'styled-components';

import Header, { optionProps } from "../../components/header"
import Button from "../../components/button"
import Hero from "../../components/hero"
import Card from '../../components/card';
import History from "../history"
import Shop from "../points-store"
import Icon from "../../components/Icon"
import Alert from "../../components/alerts"

import useHandleMenu from '../../hooks/useHandleMenu';
import useGetData from '../../hooks/useGetData';
import useHandleFilters from '../../hooks/useHandleFilters';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import fetchData from '../../api/fetchData';
import { setLoading } from '../../store/slices/shop';
import { rotate } from './animations';
import useAlert from '../../hooks/useAlert';
import { T } from '../../interface';


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

      :hover{
        background-color: #0AD4FA;
        color: white;
      }

      :active{
        transform: scale(.95);
      }
  }
  
  
  .btn-selected{
    background-color: #0AD4FA;
    color: white;
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
    position: relative;
      :hover{
        /* box-shadow: 0px 0px 6px white; */
        background-color: #70eaff;
        color: white;
      }
  }

  .btn-disabled{
    background-color: #FF7A7A;
    color: white;
    padding-left: 30px;
    padding-right: 40px;
    display: flex;
    flex-direction: row-reverse;
    :hover{
      color: white;
      background-color: #FF7A7A;
    }
  }

  .buy-button__icon{
    animation: ${ rotate } 2s linear infinite ; 
    margin-left: 10px;
    position: absolute;
    right: 30px;
    height: 16px;
    width: 16px;
  }
  
  .products-footer{
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

  .products-header__links_container div:last-of-type a {
    
    :hover{
      color: #616161;
      border: transparent;
    }

  }

  .loading-icon{
    animation: ${rotate} 2s linear infinite;
    right: 25px;
    bottom: 25px;
    height: 50px;
    width: 50px;
    position: fixed;
    background-color: #319DFC;
      :hover{
        background-color: #319DFC;
      }
  }

  

  .alert-warning{
    background-color: #5A8CD8;
  }

  .alert-success{
    background-color: #5AD866;
  }
  
  .points-remaining{
    color: white;
    font-size: 12px;
    margin-top: 4px;
  }

  /* responsive design */
  @media only screen and (max-width: 1700px){
    .products-grid{
      grid-template-columns: repeat(4, 1fr)
    }
  }
  
  @media only screen and (max-width: 1400px){
    --view-padding: 50px;    
  }
  
  @media only screen and (max-width: 1150px){
    .products-grid{
      grid-template-columns: repeat(3, 1fr);
    }
    .products-filters__container{
      flex-direction: column;
      position: relative;
    }
    .product-filters__tags{
      margin-bottom: 18px;
    }
    .product__hr{
      margin-top: 70px;
    }
    .product-navigate__buttons{
      margin: 0;
      position: absolute;
      right: 59px;
      top: 0;
      div{
        height: 40px;
        width: 40px;
        }
    }

    .row{
      position: relative;
    }
    
  }

  @media only screen and (max-width: 1150px){
    .header-button{
      margin-right: 28px;
    }

    .products-footer{
      margin-top: 35px;
      margin-bottom: 48px;
    }
  }
`;

// SVG with dynamic color
// const Icon = styled("div")<{ src: string }>`
//   background-color: #D9D9D9;
//   -webkit-mask: url(${props => props.src}) no-repeat center;
//   mask: url(${ props => props.src }) no-repeat center;
//   height: 48px;
//   width: 48px;
//   transition: .3s;

//   :hover{
//     background-color: #36afff;
//   }
// `





const App = ():JSX.Element => {
  const data = useSelector((state: RootState) => state.shopReducer.products )
  
  const { alertVisible, handleHideError, handleHideSucess, handleHideWarning, handleShowError, handleShowSucess, handleShowWarning } = useAlert()
  
  const { filteredProducts, filters, handleHighest, handleLowest, handleRecent, handleNextPage, handleLastPage  } = useHandleFilters()
  const { handleVisible, visible, handleClose } = useHandleMenu()  
  const { user, getUser, isLoading } = useGetData()

  const dispatch = useDispatch()
  const handleLoading = (loading: boolean) => dispatch(setLoading(loading))

  const handleRedeem = (product: T.products) => {    
    if( isLoading ) return    
    if( user.points < product.cost ){
      handleShowError()
      return
    }
    
    fetchData({ 
      method: "post", 
      entryPoint: "/redeem", 
      data: { "productId": product._id },
      
      onLoading: (loading: boolean) => handleLoading(loading), 
      then: () => {
        getUser()
        handleShowSucess()
      }
    })

  }
  
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
        className="products-header"
        options={options}
        logo="assets/aerolab-logo.svg"
        Phill={<Button className="header-button" title={`${ user.points }`} icon={ "assets/icons/coin.svg" } />}
      />

      <Hero src="assets/header-x1.png" title='Electronics' />

      <div className="products-filters__container">

        <div className="product-filters__tags">
          <span className="product-title">{ filters.pagination * 16 } of { data.length } products</span>
          <hr className="product-title__hr" />
          <span className="product-subtitle">Sort By:</span>
        </div>

        <div className="product-filters__buttons">
          <Button title='Most recent' onClick={ handleRecent } className={`filter-button ${ filters.sortBy === 'recent' && "btn-selected" }`} />
          <Button title='Lowest price' onClick={ handleLowest } className={`filter-button ${ filters.sortBy === 'lowest' && "btn-selected" }`} />
          <Button title='Highest price' onClick={ handleHighest } className={`filter-button ${ filters.sortBy === 'highest' && "btn-selected" }`} />
        </div>

        <div className="product-navigate__buttons">          
          <Icon className="navigate-button" src="assets/icons/arrow-left.svg" onClick={ handleLastPage } ></Icon>
          <Icon className="navigate-button" src="assets/icons/arrow-right.svg" onClick={ handleNextPage } ></Icon>
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
            className={user.points < product.cost ? "not-enough-money" : ""}
            children={ 
              <>
                <Button 
                  title={ user.points < product.cost ? "Not enough points" : "Redeem mow" } 
                  className={`buy-button ${user.points < product.cost ? "btn-disabled" : ""}`} 
                  icon={ isLoading === true ? "assets/icons/loading.svg" : ""} 
                  onClick={() => handleRedeem( product )} 
                  /> 
                {user.points < product.cost && <span className="points-remaining">You need { product.cost - user.points } points more</span>}
              </>
            } 
          />
        ))}
        
      </div>

      <footer className="products-footer">
        <div className="row">
          <span className="product-title">{ filters.pagination * 16 } of { data.length } products</span>
          <div className="product-navigate__buttons">          
            <Icon className="navigate-button" src="assets/icons/arrow-left.svg" onClick={ handleLastPage } ></Icon>
            <Icon className="navigate-button" src="assets/icons/arrow-right.svg" onClick={ handleNextPage } ></Icon>
          </div>
        </div>
        <hr className="product__hr product-footer_hr" />
      </footer>
      
      {isLoading && <Icon className="loading-icon" src="assets/icons/loading.svg" /> }
      <History visible={ visible } handleClose={ handleClose } history = { user.redeemHistory } />
      <Shop handleClose={ handleCloseModal } visible={ modalVisible } updateUserInfo={ getUser } isLoading={ isLoading } onSuccessAlert={ handleShowWarning } />

      <Alert className="alert-error" title='You need 3000 points more to claim it!' visible={ alertVisible.error } handleHideAlert={ handleHideError } />
      <Alert className="alert-success" title='Purchase successful!' visible={ alertVisible.success } handleHideAlert={ handleHideSucess } />
      <Alert className="alert-warning" title='7500 points were added!' visible={ alertVisible.warning } handleHideAlert={ handleHideWarning } />
      
          
    </Container>
  );
}

export default App