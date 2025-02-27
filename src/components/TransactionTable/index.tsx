import { Container } from "./styles";

export function TransactionTable() {
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