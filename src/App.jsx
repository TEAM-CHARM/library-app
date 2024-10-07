import "./App.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/dashboard";
import Projects from "./pages/dashboard/projects";
import Tasks from "./pages/dashboard/tasks";
import Services from "./pages/dashboard/services";
import Notifications from "./pages/dashboard/notifications";
import Register from "./pages/auth/register";
import RootLayout from "./layouts/RootLayout";
import ForgotPassword from "./pages/auth/forgot-password";
import Landing from "./pages/landing";
import Login from "./pages/auth/login";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import NotFound from "./pages/not-found";
import BookDetails from "./pages/dashboard/book-detail";

// Simulate a delay function that returns a promise
const delay = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulating success or failure based on time
      if (ms < 3000) {
        resolve("Success!");
      } else {
        reject("Error: Too much delay!");
      }
    }, ms);
  });

const notify = () => {
  // Use toast.promise to handle the delay function
  toast.promise(
    delay(2000), // Simulate a delay of 2 seconds
    {
      loading: "Loading...",
      success: "Task completed!",
      error: "Something went wrong!",
    },
    {
      style: {
        minWidth: "250px",
      },
      success: {
        duration: 5000,
        icon: "🔥",
      },
    }
  );
};

function App() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    // Get the logged in user and dispatch to the redux store
    // const storedUser = localStorage.getItem("portiUser");
    // if (storedUser) {
    //   const parsedUser = JSON.parse(storedUser);
    //   setUser(parsedUser);
    //   console.log("User---->", parsedUser);
    //   dispatch({
    //     type: "LOGGED_IN_USER",
    //     payload: parsedUser,
    //   });
    // }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Landing /> },
        { path: "/login", element: <Login /> },
        { path: "/forgot-password", element: <ForgotPassword /> },
        { path: "/register", element: <Register /> },
      ],
    },

    {
      path: "/dashboard",
      element: (
        // <UserRoute>
        <DashboardLayout />
        // </UserRoute>
      ),
      children: [
        { index: true, element: <Dashboard /> },
        { path: "/dashboard/projects", element: <Projects /> },
        { path: "/dashboard/books/:id", element: <BookDetails /> },
        { path: "/dashboard/tasks", element: <Tasks /> },
        { path: "/dashboard/team", element: <Services /> },
        { path: "/dashboard/notifications", element: <Notifications /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
  return (
    <>
    <Link to='/dashboard'>Dashboard</Link>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
