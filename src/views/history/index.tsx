import Modal from '../../components/modal';
import Item from "../../components/Item"
import styled from 'styled-components';
import fetchData from '../../api/fetchData';
import { T } from '../../interface';

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
    history: T.HistoryEntity[] | null | undefined
}

const App = (params: params) => {   

  return (
    <Container>
      <Modal
        className="history-modal"
        title="History"
        visible={params.visible}
        onClose={params.handleClose}
        icon="assets/icons/book-blue.svg"
        closeIcon="assets/icons/close.svg"
      >
        {params.history?.map((elem, i) => (
          <Item
            image={ elem.img.url }
            title={ elem.category }
            subtitle={ elem.name }
            iconSecondary="assets/icons/coin.svg"
            icon="assets/icons/buy-blue.svg"
            key={ i }
            span={`${ elem.cost }`}
          />
        ))}
      </Modal>
    </Container>
  );
};

export default App