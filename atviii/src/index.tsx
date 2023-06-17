import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Cliente from './pages/Cliente';
import Produto from './pages/Produto';
import Servico from './pages/Servico';
import CadastroCliente from './pages/CadastroCliente';
import CadastroProduto from './pages/CadastroProduto';
import CadastroServico from './pages/CadastroServico';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'cliente',
    element: <Cliente />
  },
  {
    path: 'produto',
    element: <Produto />
  },
  {
    path: 'servico',
    element: <Servico />
  },
  {
    path: 'cadastro/cliente',
    element: <CadastroCliente />
  },
  {
    path: 'cadastro/produto',
    element: <CadastroProduto />
  },
  {
    path: 'cadastro/servico',
    element: <CadastroServico />
  }
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
