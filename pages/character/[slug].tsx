import Layout from '@components/layout';
import Header from '@components/Header/Header';
import CardList from '@components/CardList/CardList';
import Content from '@components/Content/Content';
import MainCard from '@components/MainCard/MainCard';
import Head from 'next/head';

import { GetServerSideProps } from 'next';
import { CharacterProps, RequestAnswerCardType, RequestAnswerType } from '@myTypes/main';

import { getAllCards, getCard } from '../../lib/api/cards';

export default function Character({ cards, card, pages }: CharacterProps) {
  const title = `${card.name} | DISNEY CARDS`;
  return (
    <Layout>
      <Header />
      <Head>
        <title>{title}</title>
      </Head>
      <Content pages={pages} title={`Character | ${card.name}`}>
        <CardList cards={cards} />
        <MainCard card={card} />
      </Content>
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const card: RequestAnswerCardType = await getCard(context);
  const cards: RequestAnswerType = await getAllCards(context);
  context.res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
  return {
    props: { card: card.data, cards: cards.data, pages: cards.info.totalPages },
  };
};
