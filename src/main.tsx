import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './assets/fonts/fonts.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { loader as Loader } from './components/MyContent/MyContent';
import { RouteLinks } from './settings';

const router = createBrowserRouter([
  {
    path: '/:category?/:cardsPerPage?/:page?/:search?',
    element: <App />,
    loader: Loader,
  },
  {
    path: RouteLinks.notFound,
    element: 'not found 404',
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
