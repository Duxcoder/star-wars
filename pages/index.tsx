import React from 'react';
import { GetServerSideProps } from 'next';
import Layout from '../components/layout';
import Head from 'next/head';
import { CardCharacterCategory, RequestAnswerType } from '../@types';
import { API_SERVICE_URL } from '../lib/constants';
export default function Index({
  cards,
}: {
  children: React.ReactNode;
  cards: CardCharacterCategory[];
}) {
  return (
    <Layout>
      <Head>
        <title>Disney | Home</title>
      </Head>
      <section>
        {cards.map((cardInfo) => (
          <p key={cardInfo._id}>{cardInfo.name}</p>
        ))}
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (arg) => {
  console.log(arg);
  const response = await fetch(API_SERVICE_URL + '/character/?page=1&pageSize=10');
  const { data }: RequestAnswerType = await response.json();

  return {
    props: { cards: data },
  };
};
