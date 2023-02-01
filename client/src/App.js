import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./style.scss"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Layout = () =>{
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/post/:id",
        element:<Single/>
      },
      {
        path:"/write",
        element:<Write/>
      },
    ]
     
  },
  {
    path:"/login" ,element:<Login />
  },
  {
    path:"/register" ,element:<Register />
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}



export default App;
