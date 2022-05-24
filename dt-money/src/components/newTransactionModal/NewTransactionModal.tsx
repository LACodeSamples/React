import React, {
  FormEvent,
  useContext,
  useState
} from 'react'

import Modal from 'react-modal'
import { Container, OperationContainer, RadioBox } from './newTransactionModalStyle';

import closeImg from '../../assets/botaoFechar.svg'
import entradas from '../../assets/entradas.svg'
import saidas from '../../assets/saidas.svg'
import { useTransactions } from '../../hooks/useTransactions';


type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {

  const {createTransaction} = useTransactions();

  
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();

    await createTransaction({
      value,
      category,
      title,
      type
    })

    setTitle('')
    setValue(0)
    setCategory('')
    setType('deposit')

   onRequestClose();

  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button className='react-modal-close' type="button" onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar modal"></img>
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>cadastrar transação</h2>

        <input
          placeholder='Título'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder='Valor'
          value={value}
          
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <OperationContainer>

          <RadioBox

            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={entradas} alt="Fechar modal"></img>
            <span>
              Entrada
            </span>
          </RadioBox>

          <RadioBox
            isActive={type === 'withdraw'}
            type="button"
            onClick={() => setType('withdraw')}
            activeColor="red"
          >
            <img src={saidas} alt="Fechar modal"></img>
            <span>
              Saída
            </span>
          </RadioBox>
        </OperationContainer>

        <input
          placeholder='Categoria'
          value={category}
          
          onChange={(event) => setCategory(event.target.value)}
        />

        <button
          type="submit"
        >Cadastrar</button>
      </Container >

    </Modal >
  )
}
