import { createBrowserRouter } from "react-router-dom"
import Root from "./components/Root"
import { RouterProvider } from "react-router-dom"
import './assets/css/body.css'; 
import Office from "./pages/Ofiice"
import Home from "./pages/Home"
import ErroPage from "./pages/ErrorPage";
import Appointment from "./pages/Appointment";
import CGU from "./pages/CGU";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  const router = createBrowserRouter ([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErroPage/>,
      children: [
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/le-cabinet",
          element: <Office/>
        },
        {
          path:"/prendre-rendez-vous",
          element: <Appointment/>
        },
        {
          path:"/cgu",
          element: <CGU/>
        },
        {
          path:"/politique-de-confidentialite",
          element: <PrivacyPolicy/>
        },
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App
