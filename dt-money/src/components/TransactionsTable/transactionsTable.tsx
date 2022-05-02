import React from 'react'
import { Container } from './transactionsTableStyles'

export const TransactionsTable = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              Compra de canetas
            </td>
            <td>
              - R$20.00
            </td>
            <td>
              Materiais de Consumo
            </td>
            <td>
              28/04/2022
            </td>
          </tr>
          <tr>
            <td>
              Venda de canetas
            </td>
            <td>
              R$20.00
            </td>
            <td>
              Materiais de Consumo
            </td>
            <td>
              28/04/2022
            </td>
          </tr>
          <tr>
            <td>
              Venda de canetas
            </td>
            <td>
              R$20.00
            </td>
            <td>
              Materiais de Consumo
            </td>
            <td>
              28/04/2022
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
