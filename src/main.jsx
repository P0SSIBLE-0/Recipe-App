import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Details from './pages/Details'
import ContextProvider from './context/recipeContext.jsx';
import NotFound from './pages/NotFound.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/recipe-item/:id" element={<Details />} />
      <Route path='*' element={<NotFound />}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
