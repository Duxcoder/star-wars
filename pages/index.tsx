import Layout from '@components/layout';
import Header from '@components/Header/Header';
import Content from '@components/Content/Content';
import CardList from '@components/CardList/CardList';
import Head from 'next/head';

import { CardCharacterCategory, RequestAnswerType } from '@myTypes/main';
import { ReactNode } from 'react';
import { GetServerSideProps } from 'next';

import { getAllCards } from '../lib/api/cards';

export default function Index({ cards }: { children: ReactNode; cards: CardCharacterCategory[] }) {
  return (
    <Layout>
      <Head>
        <title>Disney | Home</title>
      </Head>
      <Header setError={() => {}} />
      <Content title={'Character'}>
        <CardList cards={cards} />
      </Content>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cards: RequestAnswerType = await getAllCards(context);
  return {
    props: { cards: cards.data },
  };
};
