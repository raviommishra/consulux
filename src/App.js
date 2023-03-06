import 'rsuite/styles/index.less';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './App.css';

import AppLayout from './AppLayout';
import Home from './components/home';
import AboutUS from './components/about-us';

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
          path: '/aboutus',
          element: <AboutUS />,
        }
      ]
    }
  ])
  return (
      <RouterProvider  router={appRouter}/>
  );
}

export default App;
