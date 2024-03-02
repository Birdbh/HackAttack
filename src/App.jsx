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
import Math from "./pages/Courses/Mathematics/Math";
import ComputerLiteracy from "./pages/Courses/ComputerLiteracy/ComputerLiteracy";
import Physics from "./pages/Courses/Science/Physics";
import Chem from "./pages/Courses/Science/Chem";
import Bio from "./pages/Courses/Science/Bio";
import About from "./components/About/About";


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
          path: "/subjects", 
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
        },
        {
          path:"/math",
          element:<Math/>
        },
        {
          path:"/computer-basics",
          element:<ComputerLiteracy/>
        },
        {
          path:"/subjects/physics",
          element:<Physics/>
        },
        {
          path:"/subjects/chemistry",
          element:<Chem/>
        },
        {
          path:"/subjects/biology",
          element:<Bio/>
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
