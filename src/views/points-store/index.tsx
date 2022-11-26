
import { useState } from 'react';


// Make hover on these elements and watch the docs!
import Modal from '../../components/modal';
import Pack, { params as packProps } from "../../components/stack"
import Summary, { property } from "../../components/summary"
import Button from "../../components/button"
import Icon from "../../components/Icon"
import Alerts from "../../components/alerts"


import getPointsHandler from '../../middleware/handleGetPoints';


// Styled-Container
import { Container } from "./style"


interface params{
  visible: boolean;
  isLoading: boolean;
  handleClose: () => void
  updateUserInfo: () => void
}

const links:string[] = [ "Contact us", "Terms and conditions", "Refund policies" ]

const App = (params: params) => {
  const { Alert, createAlert } = Alerts({})
  const [selected, setSelected] = useState<"basic" | "premium" | "gold" | null>(null);

  const handleSelectBasic = () => setSelected("basic");
  const handleSelectPremium = () => setSelected("premium");
  const handleSelectGold = () => setSelected("gold");
  
  const handleGetPoints = getPointsHandler({ createAlert, selected, isLoading: params.isLoading, updateUserInfo: params.updateUserInfo })
  

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
            <Button title="Chargue Now" className="shop-button" icon={ "assets/icons/cart.svg"} onClick={ handleGetPoints } /> 
            {params.isLoading && <Icon className="loading-icon store-loading-icon" src="assets/icons/loading.svg" /> }
          </>
          }
          footerLinks={links}
        />
      </Modal>

      { Alert }
    </Container>
  );
};

export default App