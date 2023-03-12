import 'rsuite/styles/index.less';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './App.css';

import AppLayout from './AppLayout';
import Home from './components/home';
import AboutUS from './components/about-us';
import Contact from './components/contact';
import ConsulenzaAziendale from './components/consulenza-aziendale';

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
      ]
    }
  ])
  return (
      <RouterProvider  router={appRouter}/>
  );
}

export default App;
