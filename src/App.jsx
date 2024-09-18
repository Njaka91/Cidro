import { createBrowserRouter } from "react-router-dom"
import Root from "./components/Root"
import { RouterProvider } from "react-router-dom"
import './assets/css/body.css'; 
import Office from "./pages/Ofiice"
import Home from "./pages/Home"
import Team from "./pages/Team";
import Cares from "./pages/Cares";

const App = () => {
  const router = createBrowserRouter ([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/lecabinet",
          element: <Office/>
        },
        {
          path:"/equipe",
          element: <Team/>
        },
        {
          path:"/nossoins",
          element: <Cares/>
        }
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App
