// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import Layout from './components/Layout';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Categories from './components/Categories';
// import {
//   createBrowserRouter,
//   Route,
//   createRoutesFromElements,
//   RouterProvider,
// } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="/Categories" element={<Categories />} />
    </Route>,
  ),
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Home />
    <Categories /> */}
    </>
  );
}

export default App;
