import { http, HttpResponse } from 'msw';
import { API_SERVICE_URL } from '../settings';
import mockCardData from './mockCardData';

const handlers = [
  http.get(API_SERVICE_URL + `/character/112`, () => {
    return HttpResponse.json({ data: mockCardData });
  }),
];

export { handlers };
