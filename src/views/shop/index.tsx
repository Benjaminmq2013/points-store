import Modal from '../../components/modal';
import styled from 'styled-components';
import Pack, { params as packProps } from "../../components/stack"
import { useState } from 'react';

const Container = styled("div")`   

    
    // modal variables
    --visible-anim: scale(1);
    --hide-anim: scale(0);

    // local variables
    --modal-height: 785px;
    --modal-width: 1156px;
    --padding-x: 173px;

    .shop-modal{
        display: flex;
        justify-content: center;
        
    }
    
    .shop-modal__modal{
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

    .shop__container{
        width: calc(100% - var(--padding-x) * 2);
        padding: 0 var(--padding-x);
    }

    .shop-title{
        color: #6B6B6B;
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 26px;
        
    }

    .shop-modal__wrapper{
        margin-top: 16px;
        
    }

    .pack__container{
        display: flex;
        justify-content: space-between;
    }

    .premium-pack__title{
        color: #369CE1;
    }
  
    .gold-pack__title{
        color: #DECB26;
    }

`

interface params{
    visible: boolean;
    handleClose: () => void
}

const App = (params: params) => {
  const [selected, setSelected] = useState<"basic" | "premium" | "gold" | null>(null);

  const handleSelectBasic = () => setSelected("basic");
  const handleSelectPremium = () => setSelected("premium");
  const handleSelectGold = () => setSelected("gold");
  

  const data: packProps[] = [
    {
      title: "Basic Pack",
      selected: selected === "basic",
      tag: "30 USD",
      className: "basic-pack",
      price: 1000,
      onClick: handleSelectBasic,
    },
    {
      title: "Premium Pack",
      selected: selected === "premium",
      tag: "135 USD",
      tagSecondary: "10% off",
      iconTertiary: "assets/icons/offer.svg",
      className: "premium-pack",
      price: 5000,
      onClick: handleSelectPremium,
    },
    {
      title: "Gold Pack",
      selected: selected === "gold",
      tag: "192 USD",
      tagSecondary: "15% off",
      iconTertiary: "assets/icons/offer.svg",
      className: "gold-pack",
      price: 7500,
      onClick: handleSelectGold,
    },
  ];

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
                symbol="$"
                icon="assets/icons/coin.svg"
                iconSecondary="assets/icons/check.svg"
                iconTertiary="assets/icons/offer.svg"
              />
            ))}
          </div>
          
        </div>
      </Modal>
    </Container>
  );
};

export default App