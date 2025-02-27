import { useEffect } from "react";
import { Container } from "./styles";


export function TransactionTable() {

  useEffect(() => {
    fetch("http://localhost:3000/api/transactions")
      .then((response) => response.json())
      .then((data) => console.log(data))
  }, []);
  

  return(
    <Container>
      <table>
        <thead>
          <th>Titulo</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
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