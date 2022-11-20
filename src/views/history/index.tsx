import Modal from '../../components/modal';
import Item from "../../components/Item"
import styled from 'styled-components';

const Container = styled("div")`
    
    .history-modal__modal{
        padding: 0 23px;
        width: calc(426px - 46px);
        display: flex;
        flex-direction : column;
        align-items: center;
        justify-content: start;
        
    }
    .history-modal__wrapper{
        margin-top: 24px;
        margin-bottom: 14px;
    }
    .history-modal__title{
        margin: 0;
    }
`

interface params{
    visible: boolean;
    handleClose: () => void
}

const App = (params:params) => {

  return (
    <Container>
        <Modal className="history-modal" title="History" visible={ params.visible } onClose = { params.handleClose } icon="assets/icons/book-blue.svg" closeIcon='assets/icons/close.svg' >
            <Item image='assets/product-pics/iPadMini-x1.png' title='Phones' subtitle="iPhone 8" iconSecondary='assets/icons/coin.svg' icon="assets/icons/buy-blue.svg" span='12.00' />
        </Modal>
    </Container>
  )
}

export default App