// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/about'
import Explore from './pages/explore'
import ExploreByTag from './pages/explore-by-tag'
import Search from './pages/search'
import Library from './pages/library'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <About />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/explore",
      element: <Explore />,
    },
    {
      path: "/explore-by-tag",
      element: <ExploreByTag />,
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "/library",
      element: <Library />,
    },
  ]);

  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="flex flex-start flex-col items-start col-span-1">
        <a className="link" href="/about">About</a>
        <a className="link" href="/explore">Explore</a>
        <a className="link" href="/explore-by-tag">Explore By Tag</a>
        <a className="link" href="/search">Search</a>
        <a className="link" href="/library">Library</a>
      </div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
