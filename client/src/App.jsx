import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";

import Homepage from "./routes/homepage/homepage.jsx"
import ListPage from "./routes/listPage/Listpage.jsx";
import Layout from "./routes/layout/Layout.jsx";
import SinglePage from "./routes/singlePage/SInglePage.jsx";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children : [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        
      ]
    },
  ]);

  return <RouterProvider router={router} />  
}

export default App