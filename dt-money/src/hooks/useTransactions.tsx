import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { Transaction } from '../components/TransactionsTable/transactionsTable';
import { api } from '../services/api';

// type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;
type TransactionInput = Pick<Transaction, 'title' | 'value' | "category" | 'type'>;




type TransactionsContextData = {
  transactionList: Transaction[];

  createTransaction : (transaction : TransactionInput) => Promise<void>

}

type TransactionsProviderProps = {

  children: ReactNode;
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactionList, setTransactionList] = useState<Transaction[]>([]);

  useEffect(() => {

    api.get('/transactions')
      .then(response => setTransactionList(response.data.transactions))
  }, [])

   const createTransaction = async (transactionInput: TransactionInput) => {

    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    })
    const {transaction} = response.data

    setTransactionList(oldState => [...oldState, transaction])
  }

  return (
    <TransactionsContext.Provider value={
      {transactionList, createTransaction}      
    }>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions ( ) {
  const context = useContext(TransactionsContext)

  return context;
}