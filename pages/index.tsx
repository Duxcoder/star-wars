import Layout from '../components/layout';
import Head from 'next/head';

import { CardCharacterCategory, RequestAnswerType } from '../@types';
import { API_SERVICE_URL, defaultQuery } from '../lib/constants';

import { ReactNode } from 'react';
import { GetServerSideProps } from 'next';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';

export default function Index({ cards }: { children: ReactNode; cards: CardCharacterCategory[] }) {
  return (
    <Layout>
      <Head>
        <title>Disney | Home</title>
      </Head>
      <Header fetching={false} setError={() => {}} />
      <Content title={'Character'} cards={cards} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryPath = new URLSearchParams({ ...defaultQuery, ...query });
  const response = await fetch(`${API_SERVICE_URL}/character/?${queryPath.toString()}`);
  const { data }: RequestAnswerType = await response.json();

  return {
    props: { cards: data },
  };
};
