import { createRoot } from 'react-dom/client'
import './index.css'
import 'swiper/css';
import SingleProduct from './Shop/SingleProduct.jsx';


// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';



import App from './App.jsx'
import Home from './home/Home.jsx';
import Blog from './blog/Blog.jsx';
import Shop from './Shop/Shop.jsx';
import CartPage from './shop/CartPage.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {path:"/",
        element: <Home/>},{
          path:"/blog",
          element: <Blog/>
        },
        {
          path:"/shop",
          element: <Shop/>
        },
        {
            path: "shop/:id",
            element: <SingleProduct/>
        },
        {
        path: "/cart-page",
        element: <CartPage/>
        }

    ],
  },
]);

createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)


