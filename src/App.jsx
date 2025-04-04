import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './modules/Home/Components/Home/Home'
import Analysis from './modules/Match analysis/Components/Match analysis/Analysis'
import NotFound from './modules/Shared/Components/NotFound/NotFound'

function App() {


  const routes = createBrowserRouter([
    {
      errorElement:<NotFound/>,
      children:[
        {index:true,element:<Home/>},
        {path:'home',element:<Home/>},
        {path:'Analysis',element:<Analysis/>}
      ]
    }
  ])



  return <RouterProvider router={routes} />
}

export default App
