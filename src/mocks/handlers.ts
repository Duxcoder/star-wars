import { http, HttpResponse } from 'msw';
import { API_SERVICE_URL } from '../settings';
import mockCardData from './mockCardData';

const handlers = [
  http.get(API_SERVICE_URL + `people/2`, () => {
    return HttpResponse.json(mockCardData);
  }),
];

export { handlers };
