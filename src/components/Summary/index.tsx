import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'
import { Container } from "./styles";

export function Summary (){
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong> -R$500,00</strong>
      </div>
      <div className="highlightbackground">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}