import React from 'react'
import { Summary } from '../Summary/summary'
import { TransactionsTable } from '../TransactionsTable/transactionsTable'
import { Container } from './dashboardStyles' 

export const Dashboard = () => {
  return (
    <Container>
      <Summary /> 
      
      <TransactionsTable />
    </Container>
  )
}
