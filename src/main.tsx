import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  RouterProvider } from 'react-router-dom';
import './index.css';
import ErrorPage from './error-page';

import App from './App.tsx'
import Home from './pages/home';
import Contact from './pages/contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
