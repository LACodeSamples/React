import { Container } from './summaryStyles'

import incomeImage from '../../assets/entradas.svg'
import outcomeImage from '../../assets/saidas.svg'
import totalImage from '../../assets/total.svg'

export const Summary = () => {
  return (
    <Container>

      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImage} alt="Entradas" />
        </header>

        
        <strong>18.000</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImage} alt="Saídas" />
        </header>
        
        <strong> -18.000</strong>
      </div>

      <div className='highLightBackground'>
        <header>
          <p>Total</p>
          <img src={totalImage} alt="Total" />
        </header>
        <strong>0</strong>
      </div>

    </Container>
  )
}
