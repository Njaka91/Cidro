import { createBrowserRouter } from "react-router-dom"
import Root from "./components/Root"
import { RouterProvider } from "react-router-dom"
import './assets/css/body.css'; 
import Office from "./pages/Ofiice"

const App = () => {
  const router = createBrowserRouter ([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path:"/lecabinet",
          element: <Office/>
        }
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App
