import Layout from '@components/layout';
import Header from '@components/Header/Header';
import Sword from '@components/Loader/Sword';
import CardList from '@components/CardList/CardList';
import Content from '@components/Content/Content';
import MainCard from '@components/MainCard/MainCard';
import Head from 'next/head';

import { GetServerSideProps } from 'next';
import { CardCharacterCategory, RequestAnswerCardType, RequestAnswerType } from '@myTypes/main';

import { useRouter } from 'next/router';
import { getAllCards, getCard } from '../../lib/api/cards';

export default function Character({
  cards,
  card,
}: {
  card: CardCharacterCategory;
  cards: CardCharacterCategory[];
}) {
  const router = useRouter();
  const title = `${card.name} | DISNEY CARDS`;

  return (
    <Layout>
      <Header fetching={false} setError={() => {}} />
      {router.isFallback ? (
        <Sword />
      ) : (
        <>
          <Head>
            <title>{title}</title>
          </Head>
          <Content title={`Character | ${card.name || 'kek'}`}>
            <CardList cards={cards} />
            <MainCard card={card} />
          </Content>
        </>
      )}
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const card: RequestAnswerCardType = await getCard(context);
  const cards: RequestAnswerType = await getAllCards(context);

  return {
    props: { card: card.data, cards: cards.data },
  };
};
