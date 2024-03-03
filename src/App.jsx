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
import Mission from './components/Mission/Mission';
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
import Contact from "./pages/Contact/Contact";
import LearningPlatform from "./pages/Courses/LearningPlatform";
import ComputerNetworksQuiz from "./pages/Quiz/Quiz";


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

          path: "/about",
          element: <About/>
        },
        {
          path: "/contact-us",
          element: <Contact/>
        }
        ,
        {
          path: "/subjects", 
          element: <LearningPlatform />
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
          path:"/mission",
          element:<Mission />
        },
        {
          path:"/subjects/math",
          element:<Math/>
        },
        {
          path:"/subjects/computer-basics",
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
        },
        {
          path:"/learning-platform",
          element:<LearningPlatform/>
        },
        {
          path:"/quiz",
          element:<ComputerNetworksQuiz/>
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
