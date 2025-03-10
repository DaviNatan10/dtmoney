import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";

Modal.setAppElement('#root');

export function App(){
  const [isNewTransactionModalOpen,setIsNewTransctionModalOpen]= useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransctionModalOpen(true);
  }
  function handleCloseNewTransactionModal(){
    setIsNewTransctionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />


      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
        >
          <h2>Cadastrar Transação</h2>
        </Modal>

      <GlobalStyle />
    </>
  )
}