import { API_SERVICE_URL, defaultQuery } from '@constants';
import { GetServerSidePropsContext } from 'next/types';

export const getAllCards = async ({ query }: GetServerSidePropsContext) => {
  const searchParams = {
    page: (query.page as string) || defaultQuery.page,
    pageSize: (query.pageSize as string) || defaultQuery.pageSize,
    name: (query.name as string) || defaultQuery.name,
  };
  const queryPath = new URLSearchParams(searchParams);
  const response = await fetch(`${API_SERVICE_URL}/character/?${queryPath.toString()}`);
  return await response.json();
};

export const getCard = async ({ params }: GetServerSidePropsContext) => {
  const id = params?.slug || 1;
  const response = await fetch(`${API_SERVICE_URL}/character/${id}`);
  return await response.json();
};
