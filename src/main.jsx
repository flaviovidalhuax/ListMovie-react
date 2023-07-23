import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Infopage from './NewPage/Infopage.jsx'

const router=createBrowserRouter([{
  path:'/',
  element:<App/>
},
{
  path:'/movie',
  element: <Infopage/>
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
     <RouterProvider router={router}>
        <App />
    </RouterProvider>
  
  </React.StrictMode>,
)
