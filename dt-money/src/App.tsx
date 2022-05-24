import { useState } from 'react';
import Modal from 'react-modal';
import { GlobalStyle } from '../src/styles/global'

import { Dashboard } from './components/Dashboard/dashboard';
import { Header } from './components/Header/header';

import { NewTransactionModal } from './components/newTransactionModal/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';
Modal.setAppElement('#root');

export const App = () => {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true)
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
