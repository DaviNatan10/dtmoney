import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

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
      
      <NewTransactionModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle />
    </>
  )
}