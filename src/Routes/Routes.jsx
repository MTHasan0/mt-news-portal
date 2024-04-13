
import Root from "../Layouts/Root";
import Home from "../Components/Home";

import {
  createBrowserRouter

} from "react-router-dom";
import About from "../Components/About";
import Career from "../Components/Career";
import Login from "../Components/Login";
import Register from "../Components/Register";
import NewsDetails from "../Components/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('news.json')
      },
      {
        path: '/newsDetails/:id',
        element: <PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes>,
        
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/career',
        element: <Career></Career>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },

    ]
  },
]);



export default router;