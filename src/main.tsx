import './sass/importIcons.scss'
import './sass/importClasses.scss'
import './sass/importComponents.scss'
import ReactDOM from 'react-dom/client'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//pages
import App from './App.tsx'
import Home from './pages/Home/Home.tsx';
import NotFound from './pages/404/NotFound.tsx';


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<NotFound/>,
    children:[
      {
        path:"/",
        element: <Home />
      },
    ]
  }
],
{
  basename: "/tasks-react"
}
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)