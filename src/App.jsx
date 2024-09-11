import { createBrowserRouter } from "react-router-dom"
import Root from "./components/Root"
import { RouterProvider } from "react-router-dom"
import './assets/css/body.css'; 

const App = () => {
  const router = createBrowserRouter ([
    {
      path: "/",
      element: <Root/>
    }
  ])
  return <RouterProvider router={router}/>
}

export default App
