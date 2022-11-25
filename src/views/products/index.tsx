

// Make hover on these elements and watch the docs!
import Header, { optionProps } from "../../components/header"
import Button from "../../components/button"
import Hero from "../../components/hero"
import Card from '../../components/card';
import History from "../history"
import Shop from "../points-store"
import Icon from "../../components/Icon"
import Alert from "../../components/alerts"
import Menu from "../../components/menu"

import useHandleMenu from '../../hooks/useHandleMenu';
import useGetData from '../../hooks/useGetData';
import useHandleFilters from '../../hooks/useHandleFilters';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import fetchData from '../../api/fetchData';
import { setLoading } from '../../store/slices/shop';
import useAlert from '../../hooks/useAlert';
import { T } from '../../interface';


import { Container } from './styles';



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
                  className="buy-button"
                  isDisabled = { user.points < product.cost }
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
      <Menu className="mobile-menu" options={[ {title: "Get points", icon: "assets/icons/cash.svg", onClick: handleModalVisible  }, { title: "History", icon: "assets/icons/book-grey.svg", onClick: handleVisible } ]} />

      <Alert className="alert-error" title='You need 3000 points more to claim it!' visible={ alertVisible.error } handleHideAlert={ handleHideError } />
      <Alert className="alert-success" title='Purchase successful!' visible={ alertVisible.success } handleHideAlert={ handleHideSucess } />
      <Alert className="alert-warning" title='7500 points were added!' visible={ alertVisible.warning } handleHideAlert={ handleHideWarning } />
      
          
    </Container>
  );
}

export default App