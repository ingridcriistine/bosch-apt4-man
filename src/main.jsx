import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Api from './Api.jsx'
import Mapa from './Mapa.jsx'
import Produtos from './Produtos.jsx'
import Graficos from './Graficos.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/produtos",
    element: <Produtos/>,
  },
  {
    path: "/api",
    element: <Api />,
  },
  {
    path: "/mapa",
    element: <Mapa/>,
  },
  {
    path: "/graficos",
    element: <Graficos />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
