
import Root from "../Layouts/Root";
import Home from "../Components/Home";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import About from "../Components/About";
import Career from "../Components/Career";
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/career',
            element: <Career></Career>
        },
      ]
        },
  ]);



export default router;