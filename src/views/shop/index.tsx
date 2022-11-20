import Modal from '../../components/modal';
import styled from 'styled-components';
import Pack, { params as packProps } from "../../components/stack"
import { useState } from 'react';
import Summary, { property } from "../../components/summary"
import Button from "../../components/button"

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

  #__properties1 span {
    color: #369ce1;
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

`;


interface params{
    visible: boolean;
    handleClose: () => void
}

const links:string[] = [ "Contact us", "Terms and conditions", "Refund policies" ]

const App = (params: params) => {
  const [selected, setSelected] = useState<"basic" | "premium" | "gold" | null>(null);

  const handleSelectBasic = () => setSelected("basic");
  const handleSelectPremium = () => setSelected("premium");
  const handleSelectGold = () => setSelected("gold");
  

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


  const summaryOptions:property[] = [
    { title: "You selected:", value: "5000 coins - premium-pack", id: "1" },
    { title: "Price:", value: "$ 135USD ", id: "2" },
    { title: "Quantity:", value: "1", id: "3" },
    { title: "Payment Method:", value: "Credit Card: 5552", id: "4" }
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
            {data.map((elem) => (
              <Pack
                {...elem}
                name="selected"
                icon="assets/icons/coin.svg"
                iconSecondary="assets/icons/check.svg"
                iconTertiary="assets/icons/offer.svg"
              />
            ))}
          </div>
          
        </div>

        <Summary title='Summary:' values={ summaryOptions } button={ <Button title='Chargue Now' className="shop-button" icon='assets/icons/cart.svg' />  } footerLinks={ links } />

      </Modal>
    </Container>
  );
};

export default App