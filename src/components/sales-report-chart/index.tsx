import { Container } from "./styles";
import dynamic from "next/dynamic";
import { theme } from "../../styles";
import dayjs from "dayjs";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

import { options } from "./chart.conf";


type ChartSires = {
  name: string;
  data: number[];
};

type SalesReportChartProps = {
  data: ChartSires[];
};

export function SalesReportChart({ data }: SalesReportChartProps) {
  return (
    <Container>
      <Chart height={340} options={options} series={data} type="area" />
    </Container>
  );
}
