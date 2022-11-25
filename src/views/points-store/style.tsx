import styled from 'styled-components';


export const Container = styled("div")`
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

@media only screen and (max-width: 1400px){
  --modal-height: 700px;
  --padding: 90px;
  .shop-modal__wrapper{
    margin-top: 30px;
  }
  .shop-title{
    margin-top: 0;
    margin-bottom: 15px;
  }
  .shop-modal__title{
    font-size: 19px;
    margin: 0;
    margin-bottom: 4px;
  }

  .store-summary__key{
    font-size: 16px;
    font-weight: normal;
  }
  .store-summary__value{
    
    font-size: 16px;
  }
  .store-summary{
  }
  .store-summary__wrapper{
    margin-top: 19px;
  }
  
}
@media only screen and (max-width: 1200px){
  --modal-height: 785px;
  --modal-width: 857px;
  
  .pack__container{
    flex-direction: column;
    align-items: center;
  }
  .shop-modal__modal{
    overflow-y: scroll;
  }
  .basic-pack, .premium-pack, .gold-pack{
    width: 307px;
    margin-bottom: 51px;
  }
  .store-summary{
    margin-top: 0;
    height: 170px;
    width: 339px;
    padding: 0;
  }
  .store-summary__title{
    font-size: 16px;
    margin-bottom: 22px;
  }
  .store-summary__value{
    font-size: 12px;
    margin-right: 20px;
  }
  .store-summary__wrapper{
    width: 100%;
  }
  .store-summary__key{
    margin-left: 32px;
  }
  
  .store-summary__properties{
    width: 100%;
    padding: 0 20px;
  }
  .store-summary__footer{
    bottom: -65px;
  }
  .store-summary__footer_link{
    margin-bottom: 30px;
  }
  
}

@media only screen and (max-width: 1200px){
  --modal-width: 100vw;
  --modal-height: 100vh;
  .shop-modal__modal{
    border-radius: 0;
  }
  .shop__container{
    width: initial;
  }
}

@media only screen and (max-width: 480px){
  .shop-title{
    font-size: 15px;
    margin-top: 16px;
  }
}
`;