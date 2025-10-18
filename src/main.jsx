import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/home',
          element : <Home></Home>
      },
      {
        path:'/about',
          element : <About></About>
      },
      {
        path:'/home',
          element : <Home></Home>
      },
      {
        path:'/home',
          element : <Home></Home>
      },{
        path:'/home',
          element : <Home></Home>
      }

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
