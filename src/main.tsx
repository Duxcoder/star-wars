import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import MainCard from './components/MainCard/MainCard';
import NotFoundPage from './components/404/404';
import Sword from './components/Spinners/Sword';
import './index.css';
import './assets/fonts/fonts.css';

import { loader as LoaderContent } from './components/Content/Loader';
import { loader as LoaderMainCard } from './components/MainCard/MainCard';
import { initialCategory, RouteLinks } from './settings';

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Sword />
        <Navigate to={`/${initialCategory}/400/1`} />
      </>
    ),
  },
  {
    path: '/:category/:cardsPerPage/:page',
    element: <App />,
    loader: LoaderContent,
    children: [
      {
        path: 'details/:id',
        element: <MainCard />,
        loader: LoaderMainCard,
      },
    ],
  },
  {
    path: RouteLinks.notFound,
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
