import React, { useState } from 'react'

import logoImg from '../../assets/logo.svg'

import { Container, Content } from './headerStyles'

type HeaderProps = {
  onOpenNewTransactionModal : () => void;
}

export const Header = ({onOpenNewTransactionModal} : HeaderProps) => {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt='dt money' />

        <button type='button' onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}
