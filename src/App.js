import 'rsuite/styles/index.less';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './App.css';

import AppLayout from './AppLayout';
import Home from './components/home';
import AboutUS from './components/about-us';
import Contact from './components/contact';
import ConsulenzaAziendale from './components/consulenza-aziendale';
import Termsconditions from './components/terms-conditions';
import Shopify from './components/shopify';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/aboutus',
          element: <AboutUS />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/consulenza-aziendale',
          element: <ConsulenzaAziendale />,
        },
        {
          path: '/terms-conditions',
          element: <Termsconditions />,
        },
        {
          path: '/shopify',
          element: <Shopify />
        }
      ]
    }
  ])
  return (
      <RouterProvider  router={appRouter}/>
  );
}

export default App;
