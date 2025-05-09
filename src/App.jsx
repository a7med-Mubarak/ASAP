
import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './modules/Home/Components/Home/Home'
import Analysis from './modules/Match analysis/Components/Match analysis/Analysis'
import NotFound from './modules/Shared/Components/NotFound/NotFound'
import MatchDay from './modules/MatchDay/Components/MatchDay'
import ContactUs from './modules/Contact Us/Components/ContactUs'
import AboutUs from './modules/AboutUs/Components/AboutUs'

function App() {

  const routes = createHashRouter(
    [
      {
        errorElement: <NotFound />,
        children: [
          { index: true, element: <Home /> },
          { path: 'home', element: <Home /> },
          { path: 'Analysis', element: <Analysis /> },
          { path: 'MatchDay', element: <MatchDay /> },
          { path: 'ContactUs', element: <ContactUs /> },
          { path: 'AboutUs', element: <AboutUs /> },
        ]
      }
    ],
    {
      future: {
        v7_startTransition: true
      }
    }
  )

  return <RouterProvider router={routes} />
}

export default App
