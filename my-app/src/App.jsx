import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet
} from "react-router-dom";
import './App.css';
import "./bootstrap.min.css"
import "./responsive.css"
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import Courses from "./pages/Courses/Courses";



function App() {

  const Layout = () =>{
    return (
      <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
    
          <Layout />

      ),
      children: [
        {
          path: "/profile",
          element: <Profile />
        },
        {
          path: "/courses", 
          element: <Courses />
        },
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/login",
          element:<Login />
        }
        
      ],
    }
    
  
  ]);
  return (
      <div className="body">
      <RouterProvider router={router}/>
    
      </div>
    
  );
}

export default App;
