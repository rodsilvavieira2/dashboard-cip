import type { NextPage } from "next";
import Head from "next/head";
import {
  Card,
  Header,
  LastOrdersTable,
  SalesReportChart,
  Sidebar,
} from "../components";
import { HomeCardWrapper, HomeContainer, HomeMain } from "../styles/pages";
import { chartData, homeCards, tableDate } from "../styles/pages/home.conf";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SIP - DASHBOARD</title>
      </Head>
      <HomeContainer>
        <Sidebar />

        <HomeMain>
          <Header />

          <HomeCardWrapper>
            {homeCards.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </HomeCardWrapper>

          <SalesReportChart data={chartData} />

          <LastOrdersTable data={tableDate} />
        </HomeMain>
      </HomeContainer>
    </>
  );
};

export default Home;
