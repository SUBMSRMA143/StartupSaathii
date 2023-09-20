import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from './components/1st_page/MainPage.jsx';
import Login from './components/login/Login.jsx';
import Join from './components/join_Starvest/Join.jsx';
import OurServices from './components/1st_page/OurServices/OurServices.jsx';
import Reviews from './components/Reviews/Reviews.jsx';
import RoadMap from './components/RoadMap/RoadMap.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/join-starvest",
        element: <Join />
      },
      {
        path: "/ourServices",
        element: <OurServices />
      },
      {
        path: "/reviews",
        element: <Reviews />
      },
      {
        path: "/roadmap",
        element: <RoadMap />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
