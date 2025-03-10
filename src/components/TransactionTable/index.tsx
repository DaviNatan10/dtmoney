import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";


export function TransactionTable() {

  useEffect(() => {
    api.get('transactions')
      .then((response) => console.log(response.data))
  }, []);
  

  return(
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
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2025</td>
          </tr>
           
          <tr>
            <td>Compras Basicas</td>
            <td className="withdraw"> - R$1.700</td>
            <td>Finalizada</td>
            <td>20/02/2025</td>
          </tr>
        </tbody>
      </table>

    </Container>
  )
}