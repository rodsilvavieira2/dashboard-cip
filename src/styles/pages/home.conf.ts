import { CardProps } from "../../components/card";

import bank from "../../../public/card-icons/bank.svg";
import crutch from "../../../public/card-icons/crutch.svg";
import firstAid from "../../../public/card-icons/first-aid.svg";
import operationTheater from "../../../public/card-icons/operation-theater.svg";
import { LastOrdersTableData } from "../../components";

export const homeCards: (CardProps & { id: number })[] = [
  {
    id: 1,
    type: "number",
    label: "Unidades Registradas",
    amount: 1,
    iconUrl: firstAid,
  },
  {
    id: 2,
    type: "number",
    label: "Novos Clientes",
    amount: 104,
    iconUrl: crutch,
  },
  {
    id: 3,
    type: "number",
    label: "Vendas Realizadas",
    amount: 7270,
    iconUrl: operationTheater,
  },
  {
    id: 4,
    type: "currency",
    label: "Lucro Liquido (gereal)",
    amount: 427.3005,
    iconUrl: bank,
  },
];

export const tableDate: LastOrdersTableData[] = [
  {
    id: 1,
    orderId: "0112466",
    date: "2021/07/30 15:49:00 UTC",
    total: 200,
    buyer: "Comprador A",
    status: "pack",
  },
  {
    id: 2,
    orderId: "0112466",
    date: "2021/07/30 14:17:00 UTC",
    total: 200,
    buyer: "Comprador B",
    status: "pack",
  },
  {
    id: 3,
    orderId: "0112466",
    date: "2021/07/29 22:07:00 UTC",
    total: 200,
    buyer: "Comprador C",
    status: "pack",
  },
  {
    id: 4,
    orderId: "0112466",
    date: "2021/07/30 11:45:00 UTC",
    total: 200,
    buyer: "Comprador D",
    status: "pack",
  },
  {
    id: 5,
    orderId: "0112466",
    date: "2021/07/30 12:22:00 UTC",
    total: 200,
    buyer: "Comprador E",
    status: "shipping",
  },
  {
    id: 6,
    orderId: "0112466",
    date: "2021/07/30 15:49:00 UTC",
    total: 200,
    buyer: "Comprador F",
    status: "pack",
  },
  {
    id: 7,
    orderId: "0112466",
    date: "2021/07/30 14:17:00 UTC",
    total: 200,
    buyer: "Comprador G",
    status: "pack",
  },
  {
    id: 8,
    orderId: "0112466",
    date: "2021/07/29 22:07:00 UTC",
    total: 200,
    buyer: "Comprador H",
    status: "pack",
  },
  {
    id: 9,
    orderId: "0112466",
    date: "2021/07/30 11:45:00 UTC",
    total: 200,
    buyer: "Comprador I",
    status: "pack",
  },
  {
    id: 10,
    orderId: "0112466",
    date: "2021/07/30 12:22:00 UTC",
    total: 200,
    buyer: "Comprador J",
    status: "shipping",
  },
  {
    id: 11,
    orderId: "0112466",
    date: "2021/07/30 12:22:00 UTC",
    total: 200,
    buyer: "Comprador L",
    status: "shipping",
  },
  {
    id: 12,
    orderId: "0112466",
    date: "2021/07/30 15:49:00 UTC",
    total: 200,
    buyer: "Comprador M",
    status: "pack",
  },
  {
    id: 13,
    orderId: "0112466",
    date: "2021/07/30 14:17:00 UTC",
    total: 200,
    buyer: "Comprador N",
    status: "pack",
  },
  {
    id: 14,
    orderId: "0112466",
    date: "2021/07/29 22:07:00 UTC",
    total: 200,
    buyer: "Comprador O",
    status: "pack",
  },
  {
    id: 15,
    orderId: "0112466",
    date: "2021/07/30 11:45:00 UTC",
    total: 200,
    buyer: "Comprador P",
    status: "pack",
  },
  {
    id: 16,
    orderId: "0112466",
    date: "2021/07/30 12:22:00 UTC",
    total: 200,
    buyer: "Comprador Q",
    status: "shipping",
  },
  {
    id: 17,
    orderId: "0112466",
    date: "2021/07/30 14:17:00 UTC",
    total: 200,
    buyer: "Comprador R",
    status: "pack",
  },
  {
    id: 18,
    orderId: "0112466",
    date: "2021/07/29 22:07:00 UTC",
    total: 200,
    buyer: "Comprador S",
    status: "pack",
  },
  {
    id: 19,
    orderId: "0112466",
    date: "2021/07/30 11:45:00 UTC",
    total: 200,
    buyer: "Comprador T",
    status: "pack",
  },
  {
    id: 20,
    orderId: "0112466",
    date: "2021/07/30 12:22:00 UTC",
    total: 200,
    buyer: "Comprador U",
    status: "shipping",
  },
];

export const chartData = [
  { name: "Vendas de 2020", data: [31, 140, 2, 100, 200, 250, 300, 201, 300] },
  { name: "Vendas de 2021", data: [31, 120, 11, 28, 61, 18, 109, 201, 300] },
];
