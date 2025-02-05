import Home from "./pages/home/Home"
import Product from "./pages/products/Product";
import Users from "./pages/users/Users";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import "./styles/global.scss"
import {
  createBrowserRouter,
  RouterProvider,
 Outlet,
} from "react-router-dom";
// import Menu from "./components/menu/Menu";

function App() {

  const Layout = ()=>{
    return(
      <div className="main">
        <Navbar />
        <div className="container">
          {/* <div className="menuContainer">
            <Menu/>
          </div> */}
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
   {
    path:"/",
    element:<Layout />,
    children:[
      {
        path: "/",
        element: (
          <Home />
        ),
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "products",
        element: <Product />,
      },
    ]
   },
   {
    path: "login",
    element: <Login />,
  },
  ]);

  return (
    <RouterProvider router={router} />

  )
}

export default App
