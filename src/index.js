import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import WeatherPage from "./WeatherPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/search",
    element: <SearchPage />
  },
  {
    path:"/search/:cityName",
    element: <SearchPage />
  },
  {
    path: "/weather",
    element: <WeatherPage />
  },
  {
    path: "/weather/:cityName",
    element: <WeatherPage />
  },
  {
    path: "/",
    element: <HomePage />
  }
]);
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
