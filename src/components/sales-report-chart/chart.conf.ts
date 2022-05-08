import { theme } from "../../styles";
import dayjs from "dayjs"

export const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: "#CACCCF",
    fontFamily: "Lato, sans-serif",
  },
  grid: {
    show: true,
    borderColor: "#D7DBDE",
    strokeDashArray: 4,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: true,
  },
  title: {
    text: "Relatório de Vendas",
    align: "left",
    style: {
      fontSize: "20px",
      fontWeight: "700",
      lineHeight: "26px",
      letterSpacing: "0.2px",
      color: theme.text.primary,
    },
  },
  colors: ["#3374AB", "#613062"],
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.neutralGray,
    },
    axisTicks: {
      color: theme.text.secondary,
    },
    labels: {
      formatter: function (value: string) {
        return dayjs(value).format("YYYY-MM");
      },
    },
    categories: [
      "2020-08-18T00:00:00.000Z",
      "2020-09-19T00:00:00.000Z",
      "2020-10-20T00:00:00.000Z",
      "2020-11-21T00:00:00.000Z",
      "2020-12-22T00:00:00.000Z",
      "2021-01-23T00:00:00.000Z",
      "2021-02-24T00:00:00.000Z",
      "2021-03-24T00:00:00.000Z",
      "2021-04-24T00:00:00.000Z",
      "2021-05-24T00:00:00.000Z",
      "2021-06-24T00:00:00.000Z",
      "2021-07-24T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.7,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.4,
      opacityTo: 0.2,
    },
  },
  legend: {
    position: "top",
    fontWeight: 700,
    fontSize: "12px",
    horizontalAlign: "right",
    markers: {
      width: 20,
      height: 2,
      fillColors: [theme.brand, theme.pulperGradient],
    },
  },
} as any;

