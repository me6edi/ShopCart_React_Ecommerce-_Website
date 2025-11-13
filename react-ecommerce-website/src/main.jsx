import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/css";
import SingleProduct from "./Shop/SingleProduct.jsx";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// fonts and icons
import "./assets/css/icofont.min.css";
import "./assets/css/animate.css";
import "./assets/css/style.min.css";

import App from "./App.jsx";
import Home from "./home/Home.jsx";
import Blog from "./blog/Blog.jsx";
import Shop from "./Shop/Shop.jsx";
import About from "./about/About.jsx";
import CartPage from "./shop/CartPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleBlog from "./blog/SingleBlog.jsx";
import Contact from "./contactPage/Contact.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import LoginDemo from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:id", element: <SingleBlog /> },
      { path: "/shop", element: <Shop /> },
      { path: "/shop/:id", element: <SingleProduct /> },
      { path: "/cart-page", element: <CartPage /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  {
    path: "/login",
    element: <LoginDemo />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
