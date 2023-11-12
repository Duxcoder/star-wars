import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './assets/fonts/fonts.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { loader as LoaderContent } from './components/Content/Content';
import { loader as LoaderMainCard } from './components/MainCard/MainCard';
import { RouteLinks } from './settings';
import MainCard from './components/MainCard/MainCard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/people/10/1" />,
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
    element: 'not found 404',
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
