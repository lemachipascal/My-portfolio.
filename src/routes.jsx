import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Importing components for the routes
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Project';
import Contact from './pages/Contact';

// Creating the routes configuration
const routes = [
  {
    path: "/",
    element: <App />, // Main layout that includes Navbar, Footer, and Theme
    children: [
      {
        index: true, // This represents the default route when the user visits the home page
        element: <Home />, // Render Home component
      },
      {
        path: "about",
        element: <About />, // Render About component
      },
      {
        path: "projects",
        element: <Projects />, // Render Projects component
      },
      {
        path: "contact",
        element: <Contact />, // Render Contact component
      },
    ],
  },
];

// Create browser router with defined routes
const router = createBrowserRouter(routes);

export default router;
