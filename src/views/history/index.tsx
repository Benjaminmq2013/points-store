import Modal from '../../components/modal';
import Item from "../../components/Item"
import styled from 'styled-components';
import { T } from '../../interface';

const Container = styled("div")`

  .history-modal__modal {
    padding: 0 23px;
    width: calc(426px - 23px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  .history-modal__wrapper {
    margin-top: 24px;
    margin-bottom: 14px;
  }

  .history-modal__title {
    margin: 0;
  }
  .history_container {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;
    margin: 0 10px 30px 10px ;
    padding: 0 20px 10px 20px;

    ::-webkit-scrollbar{
      background-color: #e3e3e3;
      border-radius: 10px;
      width: 4px;
    }

    ::-webkit-scrollbar-thumb{
      background-color: #b3b3b3;
      border-radius: 10px;
      width: 4px;
    }
  }
  @media only screen and (max-width: 500px){
    .history-modal__modal{
      width: calc(100vw - 24px);
      border-radius: 0;
      padding: 0 12px;
    }
    .container__image{
      height: 60px;
      width: 83px;
    }
    .container__image_container{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 98px;
    }
    .history_container .container{
      padding-right: 8px;
    }
    .history_container{
      padding-left: 11px;
      padding-right: 11px;
      margin-left: 0;
      margin-right: 0;
    }
    

  }

`;

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
        <div className="history_container">
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
        </div>
      </Modal>
    </Container>
  );
};

export default App