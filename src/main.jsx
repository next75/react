import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import App from "./App.jsx";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/ErrorPage";
import DataPage from "./components/DataPage";
import Footer from "./components/Footer"
import Test from "./components/Test"
import "./index.css";

const NavbarWrapper = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavbarWrapper />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "/datapage",
                element: <DataPage />
            },
            {
                path: "/test",
                element: <Test />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
