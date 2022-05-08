import { useEffect, useState } from "react";
import { formatDate, transformToCurrency } from "../../helpes";
import {
  Container,
  Tittle,
  Table,
  TableHead,
  TableBody,
  ShowQuantityButton,
  ActionButton,
  TablePagination,
  PaginationButton,
  ArrowRightIcon,
  ArrowLeftIcon,
} from "./styles";
import { helperActionsTexts, helperStatusTexts } from "./table.conf";

type TableStatus = "pack" | "shipping";

export type LastOrdersTableData = {
  id: number;
  orderId: string;
  date: string;
  total: number;
  buyer: string;
  status: TableStatus;
};

type LastOrdersTableProps = {
  data: LastOrdersTableData[];
};

export function LastOrdersTable({ data = [] }: LastOrdersTableProps) {
  const [items, setItems] = useState(data);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.floor(data.length / 4);

  useEffect(() => {
    const start = (currentPage - 1) * 4;
    const end = currentPage * 4;

    setItems(data.slice(start, end));
    setCurrentPage(currentPage);
  }, [currentPage, data]);

  function setPage(page: number) {
    return () => setCurrentPage(page);
  }

  function nextPage() {
    setCurrentPage((prev) => prev + 1);
  }

  function prevPage() {
    setCurrentPage((prev) => prev - 1);
  }

  return (
    <Container>
      <Tittle>Ultimos pedidos realizados</Tittle>

      <Table>
        <TableHead>
          <tr>
            <th>Pedido</th>

            <th>Data e Horário</th>

            <th>Produtos</th>

            <th>Total</th>

            <th>Comprador</th>

            <th>Status dos Pedidos</th>

            <th>Ação Recomendada</th>
          </tr>
        </TableHead>

        <TableBody>
          {items.map((row) => (
            <tr key={row.id}>
              <td>{row.orderId}</td>

              <td>{formatDate(row.date)}</td>

              <td>
                <ShowQuantityButton>Ver(Quantidade)</ShowQuantityButton>
              </td>

              <td> {transformToCurrency(row.total, 2)}</td>

              <td>{row.buyer}</td>

              <td>{helperStatusTexts[row.status]}</td>

              <td>
                <ActionButton>{helperActionsTexts[row.status]}</ActionButton>
              </td>
            </tr>
          ))}
        </TableBody>
      </Table>

      <TablePagination>
        <PaginationButton disabled={currentPage === 1} onClick={prevPage}>
          <ArrowLeftIcon />
        </PaginationButton>

        {Array.from({ length: totalPages }, (_, i) => (
          <PaginationButton
            key={i}
            onClick={setPage(i + 1)}
            isCurrentPage={currentPage === i + 1}
          >
            {i + 1}
          </PaginationButton>
        ))}

        <PaginationButton
          disabled={currentPage >= totalPages}
          onClick={nextPage}
        >
          <ArrowRightIcon />
        </PaginationButton>
      </TablePagination>
    </Container>
  );
}
