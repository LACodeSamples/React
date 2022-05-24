import { Container } from './summaryStyles'

import incomeImage from '../../assets/entradas.svg'
import outcomeImage from '../../assets/saidas.svg'
import totalImage from '../../assets/total.svg'
import { useContext, useEffect, useState } from 'react'
import { useTransactions } from '../../hooks/useTransactions'

export const Summary = () => {

  const { transactionList } = useTransactions();

  const summary = transactionList.reduce((acc, transaction) => {
    if (transaction.type === "deposit") {
      acc.deposits += transaction.value
      acc.total += transaction.value
    };
    if (transaction.type === "withdraw") {
      acc.withdraws += transaction.value;
      acc.total -= transaction.value
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })



  return (
    <Container>


      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImage} alt="Entradas" />
        </header>


        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImage} alt="Saídas" />
        </header>

        <strong> {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.withdraws)}</strong>
      </div>

      <div className='highLightBackground'>
        <header>
          <p>Total</p>
          <img src={totalImage} alt="Total" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.total)}</strong>
      </div>

    </Container>
  )
}
