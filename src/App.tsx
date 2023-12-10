import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menubar from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss"
import Calendar from "./pages/calendar/Calendar";
import Frontend from "./pages/frontend/Frontend";
import Backend from "./pages/backend/Backend";


const Layout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menubar />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

function App() {
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
          path: "/users",
          element: <Users />,
        },
        {
          path: "/frontend",
          element: <Frontend />,
        },
        {
          path: "/backend",
          element: <Backend />,
        },
        {
          path: "/calendar",
          element: <Calendar />,
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
