import styled, { keyframes } from 'styled-components';


// Animations
export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


export const swipeDown = keyframes`
  from{
    transform: translateY(-80px);
  }
`

export const swipeUp = keyframes`
  from{
    transform: translateY(+80px);
  }
`
export const swipeRight = keyframes`
  from{
    transform: translateX(-80px);
  }
`

// Styles

export const Container = styled.div`

  --view-padding: 132px;

  .products-header{
    animation: ${swipeDown} .3s linear both;
    animation-delay: .2s;
  }

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
    
    animation: ${swipeRight} .3s linear both;
    animation-delay: .2s;
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

    animation: ${swipeUp} .5s linear both;
    animation-delay: .1s;
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
  .products-grid button img {
    background-color: initial;
    padding: initial;
  }

  .buy-button__icon{
    animation: ${ rotate } 2s linear infinite ; 
    margin-left: 10px;
    position: absolute;
    right: 18px;
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
    .buy-button{
      padding-left: 40px;
      padding-right: 40px;
    }
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
    
    .buy-button{
      font-size: 11px;
    }
  }

  @media only screen and (min-width: 680px){
    .mobile-menu{
      display: none;
    }
  }
  @media only screen and (max-width: 680px){
    --view-padding: 20px;   
    .products-filters__container {
      margin-top: 43px;
    }
    .product-filters__tags{
      margin-right: auto;
    }
    .product-filters__buttons{
      gap: 0;
      justify-content: space-between;
      width: 100%;
      margin: 0;
    }
    .filter-button{
      font-size: 15px;
    }
    .header-button{
      font-size: 13px;
      padding: 5px 18px;
      margin-right: 19px;
    }

    .link_1{
      display: none;
    }
    .link_2{
      display: none;
    }

    .products-header__link{
      margin-right: 14px;
    }

    .products-header__logo{
      margin-left: 16px;
    }

    .header-button__icon{
      height: 20px;
      width: 20px;
    }

    .product-title{
      font-size: 17px;
    }
    .product-subtitle{
      font-size: 17px;
    }

    .product-navigate__buttons{
      right: 19px;
      top: -8px;
    }
    .products-grid{
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
    }
  }

  @media only screen and (max-width: 425px){
    .filter-button{
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  @media only screen and (max-width: 393px){
    .filter-button{
      padding-left: 10px;
      padding-right: 10px;
      font-size: 14px;
    }

    .products-grid{
      grid-template-columns: 1fr;
      justify-items: center;
    }

    .product-navigate__buttons{
      height: 69px;
      width: 69px;
    }
  }
`;