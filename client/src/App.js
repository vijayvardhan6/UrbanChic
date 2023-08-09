//import logo from './logo.svg';
import './App.css';
//import { children } from "react";
import Navbar from './components/Navbar/Navbar';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Signin from "./pages/Signin/Signin";
import Cart from "./pages/Cart/Cart";


const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
