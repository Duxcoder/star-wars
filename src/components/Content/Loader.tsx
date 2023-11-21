import { LoaderContentType } from '../../types';
import { defaultRequestOptionsData } from '../../settings';
import { checkNumber } from '../../utils/utils';
import { setupStore } from '../../redux';
import { APICards } from '../../services/service';
import { redirect } from 'react-router-dom';

export async function loader({ request, params }: LoaderContentType) {
  const { category, search, currentPage } = defaultRequestOptionsData;

  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search');

  const options = {
    category: params.category ?? category,
    text: searchTerm || search,
    cardsPerPage: params.cardsPerPage || 10,
    startPage: checkNumber(params.page, currentPage),
  };

  const p = setupStore().dispatch(APICards.endpoints.fetchAllCards.initiate(options));
  try {
    const {
      data,
      info: { totalPages },
    } = await p.unwrap();
    return {
      cardsPages: data,
      pages: totalPages,
      params,
    };
  } catch (e) {
    return redirect('/');
  } finally {
    p.unsubscribe();
  }
}
