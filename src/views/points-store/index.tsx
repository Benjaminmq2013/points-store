import Modal from '../../components/modal';
import styled from 'styled-components';
import Pack, { params as packProps } from "../../components/stack"
import { useState } from 'react';
import Summary, { property } from "../../components/summary"
import Button from "../../components/button"
import Icon from "../../components/Icon"
import fetchData from '../../api/fetchData';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../store/slices/shop';

const Container = styled("div")`
  // modal variables
  --visible-anim: scale(1);
  --hide-anim: scale(0);

  // local variables
  --modal-height: 785px;
  --modal-width: 1156px;
  --padding-x: 173px;

  .shop-modal {
    display: flex;
    justify-content: center;
  }

  .shop-modal__modal {
    width: var(--modal-width);
    height: var(--modal-height);
    left: calc(50% - (var(--modal-width) / 2));
    top: calc(50% - (var(--modal-height)) / 2);
    border-radius: 26px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }

  .shop__container {
    width: calc(100% - var(--padding-x) * 2);
    padding: 0 var(--padding-x);
  }

  .shop-title {
    color: #6b6b6b;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 26px;
  }

  .shop-modal__wrapper {
    margin-top: 16px;
  }

  .pack__container {
    display: flex;
    justify-content: space-between;
  }
  .premium-pack__title {
    color: #369ce1;
  }
  .gold-pack__title {
    color: #decb26;
  }

  .basic-pack__tag {
    background-color: #33e646;
  }
  .premium-pack__tag {
    background-color: #369ce1;
  }
  .gold-pack__tag {
    background-color: #ebcb00;
  }

 
  #__properties5 span {
    color: #369ce1;
  }
  #__properties9 span {
    color: #d7bb00;
  }

  .shop-button {
    margin-top: 57px;
    width: 282px;
    height: 55px;
    background-color: #2ADBFF;
    display: flex;
    justify-content: center;
    color: white;
    border-radius: 15px;
    gap: 15px;
    font-size: 17px;
    
    :hover{
      background-color: #4ae1ff;  
      box-shadow: 0px 0px 6px #d2d2d2;  
    }
  }

  .shop-button__icon{
    width: 22px;
    height: 19px;
  }

  .store-loading-icon{
    position: absolute;
    right: initial;
    bottom: 10px;
    right: -40px;
    height: 31px;
    width: 31px;
  }

  .store-summarybutton_container{
    display: flex;
    position: relative;
  }

`;


interface params{
    visible: boolean;
    isLoading: boolean;
    handleClose: () => void
    updateUserInfo: () => void
}

const links:string[] = [ "Contact us", "Terms and conditions", "Refund policies" ]

const App = (params: params) => {
  const [selected, setSelected] = useState<"basic" | "premium" | "gold" | null>(null);

  const handleSelectBasic = () => setSelected("basic");
  const handleSelectPremium = () => setSelected("premium");
  const handleSelectGold = () => setSelected("gold");
  const handleLoading = (loading: boolean) => dispatch(setLoading(loading))
  
  const dispatch = useDispatch() 
   

  const handleGetPoints = () => {
    if( params.isLoading ) {
      console.log(params.isLoading)
      console.log("Espera un momento...") 
      return
    }

    fetchData({ 
      method: "post", 
      entryPoint: "/user/points", 
      data: { "amount": selected === "basic" ? 1000 : selected === "premium" ? 5000 : selected === "gold" ? 7500 : 0 },
      
      onLoading: (loading: boolean) => handleLoading(loading), 
      then: params.updateUserInfo
    })

  }

  

  const data: packProps[] = [
    {
      title: "Basic Pack",
      selected: selected === "basic",
      tag: "$ 30 USD",
      className: "basic-pack",
      price: 1000,
      onClick: handleSelectBasic,
    },
    {
      title: "Premium Pack",
      selected: selected === "premium",
      tag: "$ 135 USD",
      tagSecondary: "10% off",
      iconTertiary: "assets/icons/offer.svg",
      className: "premium-pack",
      price: 5000,
      onClick: handleSelectPremium,
    },
    {
      title: "Gold Pack",
      selected: selected === "gold",
      tag: "$ 192 USD",
      tagSecondary: "15% off",
      iconTertiary: "assets/icons/offer.svg",
      className: "gold-pack",
      price: 7500,
      onClick: handleSelectGold,
    },
  ];


  const basicSelected:property[] = [
    { title: "You selected:", value: "1000 coins - basic-pack", id: "1" },
    { title: "Price:", value: "$ 30USD ", id: "2" },
    { title: "Quantity:", value: "1", id: "3" },
    { title: "Payment Method:", value: "Credit Card: 5552", id: "4" }
  ]
  const premiumSelected:property[] = [
    { title: "You selected:", value: "5000 coins - premium-pack", id: "5" },
    { title: "Price:", value: "$ 135USD ", id: "6" },
    { title: "Quantity:", value: "1", id: "7" },
    { title: "Payment Method:", value: "Credit Card: 5552", id: "8" }
  ]
  const goldSelected:property[] = [
    { title: "You selected:", value: "7500 coins - gold-pack", id: "9" },
    { title: "Price:", value: "$ 192USD ", id: "10" },
    { title: "Quantity:", value: "1", id: "11" },
    { title: "Payment Method:", value: "Credit Card: 5552", id: "12" }
  ]

  return (
    <Container>
      <Modal
        className="shop-modal"
        title="Buy more coins"
        visible={params.visible}
        onClose={params.handleClose}
        icon="assets/icons/coin.svg"
        closeIcon="assets/icons/close.svg"
      >
        <div className="shop__container">
          <h2 className="shop-title">Packs available</h2>

          <div className="pack__container">
            {data.map((elem, id) => (
              <Pack
                {...elem}
                name="selected"
                icon="assets/icons/coin.svg"
                iconSecondary="assets/icons/check.svg"
                iconTertiary="assets/icons/offer.svg"
                key={ id }
              />
            ))}
          </div>
        </div>

        <Summary
          title="Summary:"
          values={ selected === "basic" ? basicSelected : selected === "premium" ? premiumSelected : goldSelected  }
          className="store-summary"
          button={ 
          <>
            <Button title="Chargue Now" className="shop-button" icon="assets/icons/cart.svg" onClick={ handleGetPoints } /> 
            {params.isLoading && <Icon className="loading-icon store-loading-icon" src="assets/icons/loading.svg" /> }
          </>
          }
          footerLinks={links}
        />
      </Modal>
    </Container>
  );
};

export default App